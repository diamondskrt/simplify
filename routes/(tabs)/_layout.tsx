import { Stack } from 'expo-router';

import { DefaultLayout } from '~/widgets/layouts';

export default function TabsLayout() {
  return (
    <DefaultLayout>
      <Stack screenOptions={{ headerShown: false }} />
    </DefaultLayout>
  );
}
