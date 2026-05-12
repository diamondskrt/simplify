import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import { cssInterop } from 'nativewind';
import React, { forwardRef, memo } from 'react';

import { headingStyle } from '../config';
import type { IHeadingProps } from '../model';

cssInterop(H1, { className: 'style' });
cssInterop(H2, { className: 'style' });
cssInterop(H3, { className: 'style' });
cssInterop(H4, { className: 'style' });
cssInterop(H5, { className: 'style' });
cssInterop(H6, { className: 'style' });

const MappedHeading = memo(
  forwardRef<React.ComponentRef<typeof H1>, IHeadingProps>(function MappedHeading(
    {
      bold,
      className,
      highlight,
      isTruncated,
      italic,
      size,
      strikeThrough,
      sub,
      underline,
      ...props
    },
    ref,
  ) {
    switch (size) {
      case '5xl':
      case '4xl':
      case '3xl':
        return (
          <H1
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
      case '2xl':
        return (
          <H2
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
      case 'xl':
        return (
          <H3
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
      case 'lg':
        return (
          <H4
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
      case 'md':
        return (
          <H5
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
      case 'sm':
      case 'xs':
        return (
          <H6
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
      default:
        return (
          <H4
            className={headingStyle({
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
            // @ts-expect-error : type issue
            ref={ref}
          />
        );
    }
  }),
);

const Heading = memo(
  forwardRef<React.ComponentRef<typeof H1>, IHeadingProps>(function Heading(
    { as: AsComp, className, size = 'lg', ...props },
    ref,
  ) {
    const { bold, highlight, isTruncated, italic, strikeThrough, sub, underline } = props;

    if (AsComp) {
      return (
        <AsComp
          className={headingStyle({
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
        />
      );
    }

    return <MappedHeading className={className} size={size} ref={ref} {...props} />;
  }),
);

Heading.displayName = 'Heading';

export { Heading };
