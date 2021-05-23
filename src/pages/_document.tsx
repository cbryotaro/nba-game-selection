import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

interface MyDocumentInterface {
  url: string
  title: string
  description: string
}

class MyDocument extends Document implements MyDocumentInterface {
  url = process.env.NEXT_PUBLIC_SITE_URL || ''
  title = 'NBA Gaame Selection'
  description =
    'NBAで今一番熱い試合を見つけよう！NBAの試合情報を一覧表示します。怪我人の有無や実力の拮抗が一目でわかるため、見るべき試合を手軽に選ぶことができます。'

  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <meta name="description" content={this.description} />
          <meta name="theme-color" content="#01579B" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/ogp.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
