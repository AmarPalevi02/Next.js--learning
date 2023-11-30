import '@/styles/globals.css'
import LayoutPage from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <LayoutPage>
      <Component {...pageProps} />
    </LayoutPage>
  )
}
