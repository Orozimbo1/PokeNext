
import '@/styles/globals.css'

import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('../components/Layout'))

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
