import React from 'react';
import { Text as RNText } from 'react-native';

import { textStyle } from '../config';
import { ITextProps } from '../model';

const Text = React.forwardRef<React.ComponentRef<typeof RNText>, ITextProps>(function Text(
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
  },
  ref,
) {
  return (
    <RNText
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
