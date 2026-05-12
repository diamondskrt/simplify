import { cn } from '@gluestack-ui/utils/nativewind-utils';

import { useThemeStore } from '~/shared/lib';

import { HStack } from '../../h-stack';
import { PressableIcon } from '../../icon';
import { View } from '../../view';
import { themes } from '../config';

export function ThemeSwitcher() {
  const { setTheme, theme } = useThemeStore();

  return (
    <>
      <HStack className="rounded-full border border-muted p-0.5">
        {themes.map(({ icon, label }, index) => (
          <View
            key={index}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full',
              theme === label && 'bg-muted',
            )}>
            <PressableIcon
              iconProps={{
                as: icon,
                className: theme === label ? 'text-muted-foreground' : 'text-background-foreground',
              }}
              pressableProps={{ onPress: () => setTheme(label) }}
            />
          </View>
        ))}
      </HStack>
    </>
  );
}
