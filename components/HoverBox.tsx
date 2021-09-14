import { ThemeName, useColors } from '@clouds/colors';
import { forwardRef } from 'react';

import { Box, BoxProps } from './Box';

export const HoverBox = forwardRef<any, BoxProps & { theme?: ThemeName }>(
  function HoverBox(
    { onPointerEnter, onPointerLeave, onFocus, onBlur, theme, css, ...rest },
    ref,
  ) {
    return (
      <Box
        ref={ref}
        onPointerEnter={(ev) => {
          useColors.getState().setTheme(theme ?? 'day');
          onPointerEnter?.(ev as any);
        }}
        onFocus={(ev) => {
          useColors.getState().setTheme(theme ?? 'day');
          onFocus?.(ev);
        }}
        onPointerLeave={(ev) => {
          useColors.getState().setTheme('day');
          onPointerLeave?.(ev as any);
        }}
        onBlur={(ev) => {
          useColors.getState().setTheme('day');
          onBlur?.(ev);
        }}
        css={{
          padding: '$5',
          borderWidth: '$1',
          borderColor: 'currentColor',
          borderStyle: 'solid',
          mixBlendMode: 'soft-light',
          height: '100%',
          '&:hover, &:focus, &:focus-within': {
            backgroundColor: '$white',
            color: '$black',
            borderColor: '$black',
            mixBlendMode: 'normal',
          },
          ...css,
        }}
        {...rest}
      />
    );
  },
);
