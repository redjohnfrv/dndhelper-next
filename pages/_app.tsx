import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import {store} from '../redux'
import {Provider} from 'react-redux'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
