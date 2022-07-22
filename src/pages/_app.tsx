import { Header } from "../components/Header"

import '../styles/globals.scss';
import styles from '../styles/app.module.scss'

import type { AppProps } from 'next/app'
import { Card } from "../components/Card";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div >
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Card />
    </div>
  )
}

export default MyApp
