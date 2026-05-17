import { createInput } from '@gluestack-ui/core/input/creator';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { TextInput } from 'react-native';

import { Icon } from '../../icon';
import { Pressable } from '../../pressable';
import { View } from '../../view';

const SCOPE = 'INPUT';

const UIInput = createInput({
  Root: withStyleContext(View, SCOPE),
  Icon: Icon,
  Slot: Pressable,
  Input: TextInput,
});

export { UIInput, SCOPE };
