import React from 'react';

import { textStyle } from '../config';
import { ITextProps } from '../model';

const Text = React.forwardRef<React.ComponentRef<'span'>, ITextProps>(function Text(
  {
    bold,
    className,
    highlight,
    isTruncated,
    italic,
    size = 'md',
    strikeThrough,
    sub,
    underline,
    ...props
  }: { className?: string } & ITextProps,
  ref,
) {
  return (
    <span
      className={textStyle({
        bold: bold as boolean,
        class: className,
        highlight: highlight as boolean,
        isTruncated: isTruncated as boolean,
        italic: italic as boolean,
        size,
        strikeThrough: strikeThrough as boolean,
        sub: sub as boolean,
        underline: underline as boolean,
      })}
      {...props}
      ref={ref}
    />
  );
});

Text.displayName = 'Text';

export { Text };
