import '@/src/assets/sass/main.scss'
import { useRouter } from 'next/router'
import ProductLayout from '@/src/components/product.layout'
import {SessionProvider, getSession} from 'next-auth/react'

function AppSwitchTheme({children}) {
  const router = useRouter()
  if (router.asPath.startsWith(`/product`)){
    return (
      <ProductLayout>
        {children}
      </ProductLayout>
    )
  } else {
    return (
      <>
        {children}
      </>
    )
  }
}

function App(props) {
  let {
    Component,
    pageProps: { session, ...pageProps },
  } = props
  console.log(session, 'SESSION')
  console.log(props, 'PROPS')
  return (
    <SessionProvider>
      <AppSwitchTheme>
        <Component {...pageProps} />
      </AppSwitchTheme>
    </SessionProvider>
  )
}

App.getInitialProps = async ({Component,ctx}) => {
  let pageProps = Component.getInitialProps ?
    await Component.getInitialProps(ctx) : {}
  return {
    pageProps: {
      session: await getSession(ctx),
      ...pageProps
    }
  }
}

export default App