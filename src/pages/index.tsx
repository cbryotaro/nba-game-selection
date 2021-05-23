import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

export const SITE_TITLE = 'NBA Gaame Selection'

const Home: NextPage = () => {
  const games = [
    {
      id: 1,
      name: 'UTA vs MEM',
      time: '10:00~',
      link: 'https://nba.rakuten.co.jp/games',
    },
    {
      id: 2,
      name: 'PHX vs LAL',
      time: '11:00~',
      link: 'https://nba.rakuten.co.jp/games',
    },
    {
      id: 3,
      name: 'DEN vs POR',
      time: '12:00~',
      link: 'https://nba.rakuten.co.jp/games',
    },
    {
      id: 4,
      name: 'LAC vs DAL',
      time: '13:00~',
      link: 'https://nba.rakuten.co.jp/games',
    },
    {
      id: 5,
      name: 'PHI vs WAS',
      time: '14:00~',
      link: 'https://nba.rakuten.co.jp/games',
    },
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{SITE_TITLE}</h1>
        <p className={styles.description}>今一番熱い試合を見つけよう！</p>
        <div>
          <p className={styles.sectionTitle}>今日の試合</p>
          <div className={styles.grid}>
            {games.map((game) => {
              return (
                <a href={game.link} className={styles.card} key={game.id}>
                  <h2>{game.name} &rarr;</h2>
                  <p>{game.time}</p>
                </a>
              )
            })}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Enjoy the NBA!</footer>
    </div>
  )
}

export default Home
