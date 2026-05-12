import { tva } from '@gluestack-ui/utils/nativewind-utils';

const iconStyle = tva({
  base: 'pointer-events-none fill-none text-background-foreground',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      lg: 'h-5 w-5',
      md: 'h-[18px] w-[18px]',
      sm: 'h-4 w-4',
      xl: 'h-6 w-6',
      xs: 'h-3.5 w-3.5',
    },
  },
});

export { iconStyle };
