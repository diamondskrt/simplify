import type { ScrollView as RNScrollView, View as RNView } from 'react-native';
import type { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

type IViewProps = React.ComponentProps<typeof RNView>;
type ISafeAreaViewProps = React.ComponentProps<typeof RNSafeAreaView>;
type IScrollViewProps = React.ComponentProps<typeof RNScrollView>;

export type { IViewProps, ISafeAreaViewProps, IScrollViewProps };
