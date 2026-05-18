import { isWeb, tva } from '@gluestack-ui/utils/nativewind-utils';

const baseStyle = isWeb
  ? 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-background items-stretch m-0 p-0 text-decoration-none'
  : 'bg-background';

const boxStyle = tva({
  base: baseStyle,
});

export { boxStyle };
