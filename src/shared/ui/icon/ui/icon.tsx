import type { Svg } from '@gluestack-ui/core/icon/creator';
import { createIcon, PrimitiveIcon } from '@gluestack-ui/core/icon/creator';
import { cssInterop } from 'nativewind';
import React from 'react';

import { Pressable } from '../../pressable';
import { iconStyle } from '../config';
import type { IIConProps, IPressableIconProps } from '../model';

const UIIcon = createIcon({
  Root: PrimitiveIcon,
}) as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
    React.RefAttributes<React.ComponentRef<typeof Svg>>
>;

cssInterop(UIIcon, {
  className: {
    nativeStyleToProp: {
      color: 'classNameColor',
      fill: true,
      height: true,
      stroke: true,
      width: true,
    },
    target: 'style',
  },
});

const Icon = React.forwardRef<React.ComponentRef<typeof UIIcon>, IIConProps>(function Icon(
  { className, size = 'md', ...props },
  ref,
) {
  return <UIIcon ref={ref} {...props} className={iconStyle({ class: className, size })} />;
});

Icon.displayName = 'Icon';

const PressableIcon = React.forwardRef<React.ComponentRef<typeof UIIcon>, IPressableIconProps>(
  function Icon({ iconProps: { className, size = 'md', ...props }, pressableProps }, ref) {
    return (
      <Pressable {...pressableProps}>
        <UIIcon ref={ref} {...props} className={iconStyle({ class: className, size })} />
      </Pressable>
    );
  },
);

PressableIcon.displayName = 'PressableIcon';

export { UIIcon, Icon, PressableIcon };
