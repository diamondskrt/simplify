import { tva, isWeb } from '@gluestack-ui/utils/nativewind-utils';

const baseStyle = isWeb
  ? 'font-sans tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

const textStyle = tva({
  base: `font-body text-background-foreground ${baseStyle}`,

  variants: {
    bold: {
      true: 'font-bold',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
    isTruncated: {
      true: 'web:truncate',
    },
    italic: {
      true: 'italic',
    },
    size: {
      '2xl': 'text-2xl',
      '2xs': 'text-2xs',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
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

export { textStyle };
