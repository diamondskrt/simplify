import type {
  createIcon,
  IPrimitiveIcon,
  PrimitiveIcon,
  Svg,
} from '@gluestack-ui/core/icon/creator';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type { IPressableProps } from '../../pressable';
import type { iconStyle } from '../config';
import type { UIIcon } from '../ui';

type ICreateIcon = React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
    React.RefAttributes<React.ComponentRef<typeof Svg>>
>;

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;

type IIConProps = IPrimitiveIcon &
  VariantProps<typeof iconStyle> &
  React.ComponentPropsWithoutRef<typeof UIIcon>;

interface IPressableIconProps {
  iconProps: IIConProps;
  pressableProps?: IPressableProps;
}

export type { ICreateIcon, ParameterTypes, IIConProps, IPressableIconProps };
