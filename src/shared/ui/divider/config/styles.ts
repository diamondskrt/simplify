import { tva } from '@gluestack-ui/utils/nativewind-utils';

const dividerStyle = tva({
  base: 'bg-background-foreground',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px',
    },
  },
});

export { dividerStyle };
