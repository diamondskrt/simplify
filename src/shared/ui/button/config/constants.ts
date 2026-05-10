import { createButton } from '@gluestack-ui/core/button/creator';
import { UIIcon } from '@gluestack-ui/core/icon/creator';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

const SCOPE = 'BUTTON';

const Root = withStyleContext(Pressable, SCOPE);

const UIButton = createButton({
  Group: View,
  Icon: UIIcon,
  Root: Root,
  Spinner: ActivityIndicator,
  Text,
});

export { SCOPE, UIButton };
