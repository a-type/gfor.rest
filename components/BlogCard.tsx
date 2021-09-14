import { CONTENT_PATH } from '@constants/paths';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import React from 'react';

import { HoverBox } from './HoverBox';
import { Link } from './Link';
import { Typography } from './Typography';

import type { Post } from 'types/post';
export const BlogCard = ({ frontmatter, ...props }: Post) => {
  return (
    <NextLink href={`${CONTENT_PATH}/${frontmatter.slug}`} passHref>
      <HoverBox
        as={Link}
        css={{
          lineHeight: '$3',
          textDecoration: 'none',
          height: '100%',
        }}
        theme={frontmatter.theme}
      >
        <Typography
          kind="h4"
          as="h2"
          css={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
        >
          {frontmatter.title}
          {frontmatter.draft && (
            <Typography as="span" kind="p2" css={{ ml: '$5' }}>
              Draft
            </Typography>
          )}
        </Typography>

        {frontmatter.publishedAt && (
          <Typography
            as="time"
            css={{
              fontFamily: '$mono',
            }}
          >
            {(() => {
              try {
                return format(
                  parseISO(frontmatter.publishedAt),
                  'MMMM dd, yyyy',
                );
              } catch (err) {
                return '';
              }
            })()}
          </Typography>
        )}
      </HoverBox>
    </NextLink>
  );
};
