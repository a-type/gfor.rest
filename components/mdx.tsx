import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

import { Box } from './Box';
import { Link } from './Link';
import { Typography } from './Typography';

export const components = {
  Box: ({ css, ...props }: any) => <Box css={css} {...props} />,
  h1: (props) => (
    <Typography kind="h2" as="h2" css={{ mt: '$4', mb: '$6' }} {...props} />
  ),
  h2: (props) => (
    <Typography kind="h3" as="h3" css={{ mt: '$4', mb: '$4' }} {...props} />
  ),
  h3: (props) => (
    <Typography kind="h4" as="h4" css={{ mt: '$2', mb: '$2' }} {...props} />
  ),
  h4: (props) => <Typography kind="h4" as="h5" css={{ my: '0' }} {...props} />,
  p: (props) => <Typography kind="p1" css={{ mb: '$4' }} {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <Link href={href} target="_blank" rel="noopener" {...props} />;
    }

    return (
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    );
  },
  Image: ({ children, ...props }) => (
    <Box as="figure" css={{ my: '$6' }}>
      <NextImage {...(props as any)} />
      {children && (
        <Box
          as="figcaption"
          css={{
            textAlign: 'center',
            fontSize: '$1',
            lineHeight: 1,
            color: '$black',
            opacity: 0.8,
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  ),
  img: ({ children, ...props }) => (
    <Box css={{ my: '$5', mx: '-$3', '@bp1': { mx: '-$5' } }}>
      <NextImage {...(props as any)} />
    </Box>
  ),
  video: (props) => (
    <Box
      css={{
        my: '$6',
        border: '1px solid $gray',
        overflow: 'hidden',
      }}
    >
      <Box
        as="video"
        {...props}
        autoPlay
        playsInline
        muted
        loop
        css={{ width: '100%', display: 'block' }}
      />
    </Box>
  ),
  iframe: ({ ...props }) => (
    <Box css={{ mb: '$8' }}>
      <iframe {...props} />
    </Box>
  ),
  blockquote: (props) => (
    <Box
      as="blockquote"
      css={{
        my: '$3',
        mx: '$3',
        pl: '$3',
        borderLeft: '2px solid $gray',
      }}
      {...props}
    />
  ),
  pre: (props) => (
    <Box
      as="pre"
      css={{
        backgroundColor: '$lightGray',
        p: '$3',
        mb: '$3',
        maxWidth: '100%',
        overflow: 'auto',
        '& code': {
          fontFamily: '$mono',
          fontSize: '$p1',
        },
      }}
      {...props}
    />
  ),
};
