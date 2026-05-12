import type { Svg } from '@gluestack-ui/core/icon/creator';
import { createIcon, PrimitiveIcon } from '@gluestack-ui/core/icon/creator';

const UIIcon = createIcon({
  Root: PrimitiveIcon,
}) as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
    React.RefAttributes<React.ComponentRef<typeof Svg>>
>;

export { UIIcon };
