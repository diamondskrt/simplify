import { tva } from '@gluestack-ui/utils/nativewind-utils';

const buttonStyle = tva({
  base: 'group/button flex-row items-center justify-center gap-2 rounded-full border data-[disabled=true]:opacity-40 data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-background-foreground',
  compoundVariants: [
    {
      action: ['error', 'primary', 'secondary', 'success', 'warning'],
      class:
        'border-transparent bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-transparent',
      variant: 'ghost',
    },
    {
      action: ['error', 'primary', 'secondary', 'success', 'warning'],
      class: 'bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-transparent',
      variant: 'outline',
    },
  ],
  variants: {
    action: {
      error: 'border-error bg-error data-[active=true]:bg-error/80 data-[hover=true]:bg-error/80',
      primary:
        'border-primary bg-primary data-[active=true]:bg-primary/80 data-[hover=true]:bg-primary/80',
      secondary:
        'border-secondary bg-secondary data-[active=true]:bg-secondary/80 data-[hover=true]:bg-secondary/80',
      success:
        'border-success bg-success data-[active=true]:bg-success/80 data-[hover=true]:bg-success/80',
      warning:
        'border-warning bg-warning data-[active=true]:bg-warning/80 data-[hover=true]:bg-warning/80',
    },
    size: {
      lg: 'h-11 px-6',
      md: 'h-10 px-5',
      sm: 'h-9 px-4',
      xl: 'h-12 px-7',
      xs: 'h-8 px-3.5',
    },
    variant: {
      ghost: '',
      outline: '',
      solid: '',
    },
  },
});

const buttonTextStyle = tva({
  base: 'font-semibold web:select-none',
  parentCompoundVariants: [
    {
      action: 'primary',
      class:
        'text-primary-foreground data-[active=true]:text-primary-foreground/80 data-[hover=true]:text-primary-foreground/80',
      variant: 'solid',
    },
    {
      action: 'secondary',
      class:
        'text-secondary-foreground data-[active=true]:text-secondary-foreground/80 data-[hover=true]:text-secondary-foreground/80',
      variant: 'solid',
    },
    {
      action: 'success',
      class:
        'text-success-foreground data-[active=true]:text-success-foreground/80 data-[hover=true]:text-success-foreground/80',
      variant: 'solid',
    },
    {
      action: 'warning',
      class:
        'text-warning-foreground data-[active=true]:text-warning-foreground/80 data-[hover=true]:text-warning-foreground/80',
      variant: 'solid',
    },
    {
      action: 'error',
      class:
        'text-error-foreground data-[active=true]:text-error-foreground/80 data-[hover=true]:text-error-foreground/80',
      variant: 'solid',
    },
  ],
  parentVariants: {
    action: {
      error: 'text-error data-[active=true]:text-error/80 data-[hover=true]:text-error/80',
      primary: 'text-primary data-[active=true]:text-primary/80 data-[hover=true]:text-primary/80',
      secondary:
        'text-secondary data-[active=true]:text-secondary/80 data-[hover=true]:text-secondary/80',
      success: 'text-success data-[active=true]:text-success/80 data-[hover=true]:text-success/80',
      warning: 'text-warning data-[active=true]:text-warning/80 data-[hover=true]:text-warning/80',
    },
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
    variant: {
      ghost: '',
      outline: '',
      solid: '',
    },
  },
});

const buttonIconStyle = tva({
  base: '',
  parentCompoundVariants: [
    {
      action: ['error', 'primary', 'secondary', 'success', 'warning'],
      class: 'text-background-foreground',
      variant: 'ghost',
    },
    {
      action: 'primary',
      class:
        'text-primary-foreground data-[active=true]:text-primary-foreground/80 data-[hover=true]:text-primary-foreground/80',
      variant: 'solid',
    },
    {
      action: 'secondary',
      class:
        'text-secondary-foreground data-[active=true]:text-secondary-foreground/80 data-[hover=true]:text-secondary-foreground/80',
      variant: 'solid',
    },
    {
      action: 'success',
      class:
        'text-success-foreground data-[active=true]:text-success-foreground/80 data-[hover=true]:text-success-foreground/80',
      variant: 'solid',
    },
    {
      action: 'warning',
      class:
        'text-warning-foreground data-[active=true]:text-warning-foreground/80 data-[hover=true]:text-warning-foreground/80',
      variant: 'solid',
    },
    {
      action: 'error',
      class:
        'text-error-foreground data-[active=true]:text-error-foreground/80 data-[hover=true]:text-error-foreground/80',
      variant: 'solid',
    },
  ],
  parentVariants: {
    action: {
      error:
        'text-error-foreground data-[active=true]:text-error-foreground/80 data-[hover=true]:text-error-foreground/80',
      primary:
        'text-primary-foreground data-[active=true]:text-primary-foreground/80 data-[hover=true]:text-primary-foreground/80',
      secondary:
        'text-secondary-foreground data-[active=true]:text-secondary-foreground/80 data-[hover=true]:text-secondary-foreground/80',
      success:
        'text-success-foreground data-[active=true]:text-success-foreground/80 data-[hover=true]:text-success-foreground/80',
      warning:
        'text-warning-foreground data-[active=true]:text-warning-foreground/80 data-[hover=true]:text-warning-foreground/80',
    },
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'tex-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
    variant: {
      ghost: '',
      outline: '',
      solid: '',
    },
  },
});

const buttonGroupStyle = tva({
  base: '',
  variants: {
    flexDirection: {
      column: 'flex-col',
      'column-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
    },
    isAttached: {
      true: 'gap-0',
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

export { buttonStyle, buttonTextStyle, buttonIconStyle, buttonGroupStyle };
