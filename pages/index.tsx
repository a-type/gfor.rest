import { useColors } from '@clouds/colors';
import { BlogCard } from '@components/BlogCard';
import { Box } from '@components/Box';
import { GithubButton } from '@components/GithubButton';
import { HoverBox } from '@components/HoverBox';
import { Link } from '@components/Link';
import { TwitterButton } from '@components/TwitterButton';
import { Typography } from '@components/Typography';
import { getAllFrontmatter } from '@lib/mdx';
import React, { useEffect } from 'react';
import { Frontmatter } from 'types/post';

export default function Home({ posts }: { posts: Frontmatter[] }) {
  useEffect(() => {
    useColors.getState().setTheme('day');
  }, []);

  return (
    <Box
      css={{
        padding: '$6',
        position: 'relative',
        width: '100%',
        pointerEvents: 'none',
      }}
    >
      <Box css={{ maxWidth: 900 }}>
        <Box
          direction="column"
          gap="2"
          css={{
            mb: '$6',
            alignItems: 'flex-start',
            '@bp1': {
              alignItems: 'flex-end',
              flexDirection: 'row',
              '& > * + *': {
                marginLeft: '$2',
                marginTop: '0',
              },
            },
          }}
        >
          <Typography kind="h1" as="h1" css={{ mb: '-20px', mr: '$3' }}>
            Grant Forrest
          </Typography>
          <Box direction="row" css={{ pointerEvents: 'initial' }} gap="2">
            <TwitterButton />
            <GithubButton />
          </Box>
        </Box>
        <HoverBox css={{ mb: '$5', pointerEvents: 'initial' }}>
          <Typography kind="p1" css={{ mb: '$2' }}>
            I'm constantly making things. I prefer to make pretty stuff you can
            click on. Sometimes I get in a mood and make invisible stuff that
            runs on a box somewhere instead. What really gets me onboard is if
            it's never been done before.
          </Typography>
          <Typography kind="p1" css={{ mb: '$2' }}>
            Today I work at{' '}
            <Link href="https://twitter.com/withhq">With Labs</Link> as a senior
            full-stack developer. You can find the whole story{' '}
            <Link href="https://timeline.gfor.rest">here</Link>.
          </Typography>
          <Typography kind="p1" css={{ mb: '$0' }}>
            In my personal life, I write down my thoughts about life, faith, and
            ideals. If you're interested in that, I publish{' '}
            <Link href="https://temporarymountains.substack.com/publish?utm_source=menu">
              here
            </Link>
            .
          </Typography>
        </HoverBox>
        <Box
          css={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: '$5',
            pointerEvents: 'initial',
          }}
        >
          {posts.map((postData) => (
            <BlogCard
              key={postData.slug || postData.title}
              frontmatter={postData}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function getStaticProps() {
  let posts = getAllFrontmatter();

  // filter out drafts in prod
  if (process.env.NODE_ENV === 'production') {
    posts = posts.filter((post) => !post.draft);
  }

  return { props: { posts } };
}
