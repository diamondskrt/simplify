import { MenuIcon } from 'lucide-react-native';

import { HStack, Icon, Text, ThemeSwitcher, View } from '~/shared/ui';

export function Header() {
  return (
    <View className="flex h-16 justify-center px-4">
      <HStack space="md" className="items-center justify-between">
        <Text size="2xl">Simplify</Text>
        <HStack space="md" className="items-center">
          <ThemeSwitcher />
          <Icon as={MenuIcon} />
        </HStack>
      </HStack>
    </View>
  );
}
