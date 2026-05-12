import { cssInterop } from 'nativewind';
import React from 'react';

import { Pressable } from '../../pressable';
import { iconStyle, UIIcon } from '../config';
import type { IIConProps, IPressableIconProps } from '../model';

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

export { Icon, PressableIcon };
