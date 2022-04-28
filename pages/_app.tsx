import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from '../redux'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
