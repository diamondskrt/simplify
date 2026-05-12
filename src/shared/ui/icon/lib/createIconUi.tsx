import { createIcon, Svg } from '@gluestack-ui/core/icon/creator';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import React from 'react';

import { iconStyle } from '../config';
import type { ICreateIcon, ParameterTypes } from '../model';

const createIconUI = ({ ...props }: ParameterTypes) => {
  const UIIconCreateIcon = createIcon({
    Root: Svg,
    ...props,
  }) as ICreateIcon;

  return React.forwardRef<React.ComponentRef<typeof Svg>>(function UIIcon(
    {
      className,
      size,
      ...inComingProps
    }: VariantProps<typeof iconStyle> & React.ComponentPropsWithoutRef<typeof UIIconCreateIcon>,
    ref,
  ) {
    return (
      <UIIconCreateIcon
        ref={ref}
        {...inComingProps}
        className={iconStyle({ class: className, size })}
      />
    );
  });
};

export { createIconUI };
