import { tva } from '@gluestack-ui/utils/nativewind-utils';

const pressableStyle = tva({
  base: 'data-[focus-visible=true]:ring-indicator-info data-[disabled=true]:opacity-40 data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2',
});

export { pressableStyle };
