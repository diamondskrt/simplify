import { tva, isWeb } from '@gluestack-ui/utils/nativewind-utils';
const baseStyle = isWeb
  ? 'font-sans tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

const headingStyle = tva({
  base: `text-typography-900 font-heading tracking-sm my-0 font-bold ${baseStyle}`,
  variants: {
    bold: {
      true: 'font-bold',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
    isTruncated: {
      true: 'truncate',
    },
    italic: {
      true: 'italic',
    },
    size: {
      '2xl': 'text-3xl',
      '3xl': 'text-4xl',
      '4xl': 'text-5xl',
      '5xl': 'text-6xl',
      lg: 'text-xl',
      md: 'text-lg',
      sm: 'text-base',
      xl: 'text-2xl',
      xs: 'text-sm',
    },
    strikeThrough: {
      true: 'line-through',
    },
    sub: {
      true: 'text-xs',
    },
    underline: {
      true: 'underline',
    },
  },
});

export { headingStyle };
