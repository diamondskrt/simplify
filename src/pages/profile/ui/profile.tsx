import { useQuery } from '@apollo/client/react';

import { GetUserByIdDocument } from '~/entities/profile';
import { useAuthStore } from '~/shared/api';
import { View, Text } from '~/shared/ui';

export function ProfilePage() {
  const session = useAuthStore((state) => state.session);
  const res = useQuery(GetUserByIdDocument, {
    variables: {
      userId: session?.user.id ?? '',
    },
  });
  console.log('user', res.data?.usersById);
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile</Text>
    </View>
  );
}
