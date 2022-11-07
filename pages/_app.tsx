import '../styles/globals.css'
import '../styles/tailwind.css'

import AppContext from '../lib/AppContext'
import type { AppProps } from 'next/app'

// import initFirebase from '../lib/initFirebase'

// import { fireStoreConfig, remoteConfigInit } from '../lib/firebaseApp'
import { useEffect, useState } from 'react'
import ConfigProvider from '../components/ConfigProvider'


export default function App({ Component, pageProps }: AppProps) {
 return<AppContext.Provider value={{}}>
    <Component {...pageProps} />
  </AppContext.Provider>
  // return <ConfigProvider>
  //   <AppContext.Provider value={{}}>
  //   <Component {...pageProps} />
  // </AppContext.Provider>
  // </ConfigProvider>
}
