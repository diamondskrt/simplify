import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

import { useAuthStore } from './auth';

const supabaseGrapqlUrl = process.env.EXPO_PUBLIC_SUPABASE_GRAPHQL_URL ?? '';
const supabasePublishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '';

const httpLink = new HttpLink({
  uri: supabaseGrapqlUrl,
});

const authLink = new ApolloLink((operation, forward) => {
  const session = useAuthStore.getState().session;

  operation.setContext({
    headers: {
      apikey: supabasePublishableKey,
      Authorization: session?.access_token ? `Bearer ${session.access_token}` : '',
    },
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export { apolloClient };
