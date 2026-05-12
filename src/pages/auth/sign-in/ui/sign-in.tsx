import { Link } from 'expo-router';

import { View, Text } from '~/shared/ui';

export function SignInPage() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Sign In</Text>
      <Link href="/(tabs)">Home</Link>
    </View>
  );
}
