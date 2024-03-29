import { BODY_FONT_SOURCE, TITLE_FONT_SOURCE } from '@constants/fonts';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="icon" href="/favicon32.png" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link href={TITLE_FONT_SOURCE} rel="preload" as="style" />
          <link href={TITLE_FONT_SOURCE} rel="stylesheet" media="all" />
          <link href={BODY_FONT_SOURCE} rel="preload" as="style" />
          <link href={BODY_FONT_SOURCE} rel="stylesheet" media="all" />
          <noscript>
            <link href={TITLE_FONT_SOURCE} rel="stylesheet" />
            <link href={BODY_FONT_SOURCE} rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
