import { View } from '~/shared/ui';

import { Header } from '../../header';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <Header />
      <View className="flex-1">{children}</View>
    </View>
  );
}
