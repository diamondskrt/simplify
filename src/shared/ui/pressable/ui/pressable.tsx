import React from 'react';

import { pressableStyle, UIPressable } from '../config';
import type { IPressableProps } from '../model';

const Pressable = React.forwardRef<React.ComponentRef<typeof UIPressable>, IPressableProps>(
  function Pressable({ className, ...props }, ref) {
    return (
      <UIPressable
        {...props}
        ref={ref}
        className={pressableStyle({
          class: className,
        })}
      />
    );
  },
);

Pressable.displayName = 'Pressable';

export { Pressable };
