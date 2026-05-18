import { tva } from '@gluestack-ui/utils/nativewind-utils';

const inputStyle = tva({
  base: 'flex-row content-center items-center overflow-hidden border data-[focus=true]:border-primary data-[hover=true]:border-border data-[disabled=true]:opacity-40 data-[disabled=true]:hover:border-background data-[focus=true]:hover:border-primary',

  variants: {
    size: {
      xl: 'h-12',
      lg: 'h-11',
      md: 'h-10',
      sm: 'h-9',
    },

    variant: {
      underlined:
        'rounded-none border-b data-[invalid=true]:border-b-2 data-[invalid=true]:border-error data-[invalid=true]:data-[focus=true]:border-error data-[invalid=true]:data-[disabled=true]:hover:border-error data-[invalid=true]:data-[focus=true]:hover:border-error data-[invalid=true]:hover:border-error',

      outline:
        'rounded border data-[invalid=true]:border-error data-[invalid=true]:data-[focus=true]:border-error data-[invalid=true]:data-[disabled=true]:hover:border-error data-[invalid=true]:data-[focus=true]:hover:border-error data-[invalid=true]:hover:border-error data-[focus=true]:web:ring-1 data-[invalid=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[invalid=true]:web:ring-inset data-[focus=true]:web:ring-primary data-[invalid=true]:web:ring-error data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-error data-[invalid=true]:data-[focus=true]:hover:web:ring-error',

      rounded:
        'rounded-full border data-[invalid=true]:border-error data-[invalid=true]:data-[focus=true]:border-error data-[invalid=true]:data-[disabled=true]:hover:border-error data-[invalid=true]:data-[focus=true]:hover:border-error data-[invalid=true]:hover:border-error data-[focus=true]:web:ring-1 data-[invalid=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[invalid=true]:web:ring-inset data-[focus=true]:web:ring-primary data-[invalid=true]:web:ring-error data-[invalid=true]:data-[disabled=true]:hover:web:ring-1 data-[invalid=true]:data-[focus=true]:hover:web:ring-1 data-[invalid=true]:data-[disabled=true]:hover:web:ring-inset data-[invalid=true]:data-[focus=true]:hover:web:ring-inset data-[invalid=true]:data-[disabled=true]:hover:web:ring-error data-[invalid=true]:data-[focus=true]:hover:web:ring-error',
    },
  },
});

const inputIconStyle = tva({
  base: 'items-center justify-center fill-none text-background-foreground',
  parentVariants: {
    size: {
      '2xs': 'h-3 w-3',
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
});

const inputSlotStyle = tva({
  base: 'items-center justify-center web:disabled:cursor-not-allowed',
});

const inputFieldStyle = tva({
  base: 'ios:leading-[0px] h-full flex-1 px-3 py-0 text-background-foreground placeholder:text-muted-foreground web:cursor-text web:data-[disabled=true]:cursor-not-allowed',

  parentVariants: {
    variant: {
      underlined: 'px-0 web:outline-none web:outline-0',
      outline: 'web:outline-none web:outline-0',
      rounded: 'px-4 web:outline-none web:outline-0',
    },

    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
});

export { inputStyle, inputIconStyle, inputSlotStyle, inputFieldStyle };
