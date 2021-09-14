import { BODY_FONT, TITLE_FONT } from '@constants/fonts';
import { createStitches, PropertyValue } from '@stitches/react';

export const stitchesConfig = createStitches({
  theme: {
    colors: {
      black: '#323238',
      white: 'white',
      gray: '#e0e0f0',
      lightGray: '#f8f8ff',
      dim: 'rgba(0, 0, 32, 0.1)',
    },
    space: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '32px',
      6: '64px',
      7: '80px',
      8: '120px',
    },
    sizes: {
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '32px',
      6: '64px',
      7: '80px',
      8: '120px',
    },
    borderWidths: {
      1: '3px',
    },
    fonts: {
      title: TITLE_FONT,
      body: BODY_FONT,
      mono: 'monospace',
    },
    fontSizes: {
      p2: '12px',
      p1: '16px',
      h4: '24px',
      h3: '36px',
      h2: '64px',
      h1: '120px',
    },
    lineHeights: {
      p2: '20px',
      p1: '30px',
      h4: '40px',
      h3: '60px',
      h2: '80px',
      h1: '140px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
  },
  media: {
    bp1: '(min-width: 575px)',
    bp2: '(min-width: 750px)',
    bp3: '(min-width: 1000px)',
    bp4: '(min-width: 1200px)',
  },
  utils: {
    // Abbreviated margin properties
    m: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginTop'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginTop'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginTop'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginTop'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // Abbreviated padding properties
    p: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingTop'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingTop'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingTop'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingTop'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    // background color
    bc: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    // Creates focus ring effects
    focusRing: (color: string) => ({
      boxShadow:
        color === 'none'
          ? 'inset 0 0 0 0 transparent'
          : `inset 0 0 0 2px ${color}`,
    }),

    outerFocusRing: (color: string) => ({
      boxShadow:
        color === 'none' ? '0 0 0 0 transparent' : `0 0 0 2px ${color}`,
    }),

    // Easing animation
    transitionEase: () => (propertyNames: string) => ({
      transition: propertyNames
        .split(/,\s+/)
        .map((propName) => `${propName} 300ms cubic-bezier(0.4, 0, 0.2, 1)`)
        .join(','),
    }),
  },
});

export const { styled, css, keyframes, getCssText, globalCss, theme } =
  stitchesConfig;
