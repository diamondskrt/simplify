import { tva } from '@gluestack-ui/utils/nativewind-utils';

const buttonStyle = tva({
  base: 'group/button flex-row items-center justify-center gap-2 rounded bg-primary data-[disabled=true]:opacity-40 data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2',
  compoundVariants: [
    {
      action: 'primary',
      class:
        'bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent px-0',
      variant: 'link',
    },
    {
      action: 'secondary',
      class:
        'bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent px-0',
      variant: 'link',
    },
    {
      action: 'success',
      class:
        'bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent px-0',
      variant: 'link',
    },
    {
      action: 'warning',
      class:
        'bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent px-0',
      variant: 'link',
    },
    {
      action: 'error',
      class:
        'bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent px-0',
      variant: 'link',
    },
    {
      action: 'primary',
      class: 'bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-background/20',
      variant: 'outline',
    },
    {
      action: 'secondary',
      class: 'bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-background/20',
      variant: 'outline',
    },
    {
      action: 'success',
      class: 'bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-background/20',
      variant: 'outline',
    },
    {
      action: 'warning',
      class: 'bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-background/20',
      variant: 'outline',
    },
    {
      action: 'error',
      class: 'bg-transparent data-[active=true]:bg-transparent data-[hover=true]:bg-background/20',
      variant: 'outline',
    },
  ],
  variants: {
    action: {
      default:
        'bg-transparent data-[hover=true]:bg-foreground/20 data-[active=true]:bg-foreground/20',
      error:
        'data-[focus-visible=true]:web:error border-error bg-error data-[active=true]:border-error/80 data-[hover=true]:border-error/80 data-[active=true]:bg-error/80 data-[hover=true]:bg-error/80',
      primary:
        'data-[focus-visible=true]:web:primary border-primary/80 bg-primary data-[active=true]:border-primary/80 data-[hover=true]:border-primary/80 data-[active=true]:bg-primary/80 data-[hover=true]:bg-primary/80',
      secondary:
        'data-[focus-visible=true]:web:secondary border-secondary/80 bg-secondary data-[active=true]:border-secondary/80 data-[hover=true]:border-secondary/80 data-[active=true]:bg-secondary/80 data-[hover=true]:bg-secondary/80',
      success:
        'data-[focus-visible=true]:web:success border-success bg-success data-[active=true]:border-success/80 data-[hover=true]:border-success/80 data-[active=true]:bg-success/80 data-[hover=true]:bg-success/80',
      warning:
        'data-[focus-visible=true]:web:warning border-warning bg-warning data-[active=true]:border-warning/80 data-[hover=true]:border-warning/80 data-[active=true]:bg-warning/80 data-[hover=true]:bg-warning/80',
    },
    size: {
      lg: 'h-11 px-6',
      md: 'h-10 px-5',
      sm: 'h-9 px-4',
      xl: 'h-12 px-7',
      xs: 'h-8 px-3.5',
    },
    variant: {
      link: 'px-0',
      outline: 'bg-transparent border',
      solid: '',
    },
  },
});

const buttonTextStyle = tva({
  base: 'text-foreground font-semibold web:select-none',
  parentCompoundVariants: [
    {
      action: 'primary',
      class:
        'text-primary-foreground data-[active=true]:text-primary-foreground data-[hover=true]:text-primary-foreground',
      variant: 'solid',
    },
    {
      action: 'secondary',
      class:
        'text-secondary-foreground data-[active=true]:text-secondary-foreground data-[hover=true]:text-secondary-foreground',
      variant: 'solid',
    },
    {
      action: 'success',
      class:
        'text-success-foreground data-[active=true]:text-success-foreground data-[hover=true]:text-success-foreground',
      variant: 'solid',
    },
    {
      action: 'error',
      class:
        'text-error-foreground data-[active=true]:text-error-foreground data-[hover=true]:text-error-foreground',
      variant: 'solid',
    },
    {
      action: 'warning',
      class:
        'text-warning-foreground data-[active=true]:text-warning-foreground data-[hover=true]:text-warning-foreground',
      variant: 'solid',
    },
    {
      action: 'primary',
      class:
        'text-primary data-[active=true]:text-primary-foreground data-[hover=true]:text-primary-foreground',
      variant: 'outline',
    },
    {
      action: 'secondary',
      class:
        'text-secondary data-[active=true]:text-secondary-foreground data-[hover=true]:text-secondary-foreground',
      variant: 'outline',
    },
    {
      action: 'success',
      class:
        'text-success data-[active=true]:text-success-foreground data-[hover=true]:text-success-foreground',
      variant: 'outline',
    },
    {
      action: 'error',
      class:
        'text-error data-[active=true]:text-error-foreground data-[hover=true]:text-error-foreground',
      variant: 'outline',
    },
    {
      action: 'warning',
      class:
        'text-warning data-[active=true]:text-warning-foreground data-[hover=true]:text-warning-foreground',
      variant: 'outline',
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
      link: 'data-[active=true]:underline data-[hover=true]:underline',
      outline: '',
      solid: 'text-foreground data-[hover=true]:text-foreground data-[active=true]:text-foreground',
    },
  },
});

const buttonIconStyle = tva({
  base: 'fill-none',
  parentCompoundVariants: [
    {
      action: 'primary',
      class: 'text-primary data-[active=true]:text-primary/80 data-[hover=true]:text-primary/80',
      variant: 'solid',
    },
    {
      action: 'secondary',
      class:
        'text-secondary data-[active=true]:text-secondary/80 data-[hover=true]:text-secondary/80',
      variant: 'solid',
    },
    {
      action: 'success',
      class: 'text-success data-[active=true]:text-success/80 data-[hover=true]:text-success/80',
      variant: 'solid',
    },
    {
      action: 'error',
      class: 'text-error data-[active=true]:text-error/80 data-[hover=true]:text-error/80',
      variant: 'solid',
    },
    {
      action: 'warning',
      class: 'text-warning data-[active=true]:text-warning/80 data-[hover=true]:text-warning/80',
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
      lg: 'h-[18px] w-[18px]',
      md: 'h-[18px] w-[18px]',
      sm: 'h-4 w-4',
      xl: 'h-5 w-5',
      xs: 'h-3.5 w-3.5',
    },
    variant: {
      link: 'data-[active=true]:underline data-[hover=true]:underline',
      outline: '',
      solid: 'text-foreground data-[hover=true]:text-foreground data-[active=true]:text-foreground',
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
