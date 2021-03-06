/// <reference types="jest" />

import Home from 'pages/index'
import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'

// 各テスト実行後にレンダーしたコンポーネントをアンマウントする
afterEach(cleanup)

it('Home ページコンポーネントが存在している', () => {
  expect(Home).toBeTruthy()
})

it('「Next.js!」のリンクが Next.js の公式サイトのトップページである', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!').getAttribute('href')).toBe(
    'https://nextjs.org'
  )
})
