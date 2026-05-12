import { isWeb, tva } from '@gluestack-ui/utils/nativewind-utils';

const baseStyle = isWeb
  ? 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none'
  : '';

const vStackStyle = tva({
  base: `flex-col ${baseStyle}`,
  variants: {
    reversed: {
      true: 'flex-col-reverse',
    },
    space: {
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
      lg: 'gap-4',
      md: 'gap-3',
      sm: 'gap-2',
      xl: 'gap-5',
      xs: 'gap-1',
    },
  },
});

export { vStackStyle };
