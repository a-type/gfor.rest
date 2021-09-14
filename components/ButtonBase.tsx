import { ComponentPropsWithRef } from 'react';
import { styled } from 'stitches.config';

export const ButtonBase = styled('button', {
  $$bg: '$colors$white',
  $$fg: '$colors$black',
  $$bgHover: '$colors$gray',
  $$fgHover: '$colors$black',
  $$focus: '$colors$black',
  $$border: 'currentColor',
  $$borderHover: 'currentColor',

  px: '$6',
  py: '$3',
  font: '$default',
  fontSize: '$b1',
  fontWeight: '$b1',
  lineHeight: '$b1',
  color: '$$fg',
  backgroundColor: '$$bg',
  borderRadius: '$content',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  focusRing: 'none',
  cursor: 'pointer',
  borderWidth: '$1',
  borderStyle: 'solid',
  borderColor: 'currentColor',

  transitionEase: 'background-color, color, box-shadow',

  '&:hover': {
    backgroundColor: '$$bgHover',
    color: '$$fgHover',
    borderColor: 'currentColor',
  },

  '&:focus': {
    color: '$$focus',
    backgroundColor: '$$bgHover',
    outline: 'none',
    borderColor: 'currentColor',
  },

  '&:active': {
    color: '$$focus',
    outline: 'none',
    borderColor: 'currentColor',
  },

  '&:disabled': {
    backgroundColor: '$slateLight',
    color: '$slateInk',
  },

  // loading styles are white with border, unless icon is present.
  '&[data-loading="true"]:not([data-icon="true"])': {
    backgroundColor: '$snow',
    borderColor: '$black',
    color: '$black',
  },

  // remove some start padding to fit icon
  '&[data-icon="true"]': {
    pl: '$3',
  },

  variants: {
    color: {
      ghost: {
        $$bg: 'transparent',
        $$fg: 'inherit',
        $$bgHover: '$colors$white',
        $$focus: '$colors$black',
        '&:disabled': {
          backgroundColor: '$dim',
          color: '$black',
        },
      },
      primary: {
        $$bg: '$colors$white',
        $$fg: '$colors$black',
        $$bgHover: '$colors$lightGray',
        $$focus: '$colors$black',
      },
    },
  },

  defaultVariants: {
    color: 'primary',
  },
});

export type ButtonBaseProps = ComponentPropsWithRef<typeof ButtonBase> & {
  as?: any;
  [key: string]: any;
};
