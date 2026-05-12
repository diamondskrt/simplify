import { createPressable } from '@gluestack-ui/core/pressable/creator';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { Pressable as RNPressable } from 'react-native';

const UIPressable = createPressable({
  Root: withStyleContext(RNPressable),
});

export { UIPressable };
