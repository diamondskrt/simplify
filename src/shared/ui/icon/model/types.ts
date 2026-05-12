import type {
  IPrimitiveIcon,
  PrimitiveIcon,
  Svg,
  createIcon,
} from '@gluestack-ui/core/icon/creator';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import type { IPressableProps } from '../../pressable';
import type { iconStyle, UIIcon } from '../config';

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
