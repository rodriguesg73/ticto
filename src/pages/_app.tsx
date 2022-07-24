import { Header } from "../components/Header"


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import { TransactionContext, TransactionContextProvider } from "../contexts/TransactionContext";

function MyApp({ Component, pageProps }: AppProps) {
  const color = typeof window !== 'undefined' ? 'red' : 'blue'
  return (
    <TransactionContextProvider>
      <div >
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </TransactionContextProvider>
  )
}

export default MyApp
