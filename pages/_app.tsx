import '@/styles/legacy/main.scss'
import Router from 'next/router'
import Script from 'next/script'
import { useEffect, useState, useContext } from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { motion, AnimatePresence } from 'framer-motion'
import { prod, gtmId } from '@/config/index'
import GtmNoScript from '@/components/general/GtmNoScript'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (prod) {
    console.log = function () {}
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <Script src='/assets/js/gtm.js' />
      <GtmNoScript />
      <Header />
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial='initial'
          animate='animate'
          transition={{ ease: 'easeInOut', duration: 0.4 }}
          exit='exit'
          variants={{
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            }
          }}>
          <main id='home'>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <Script src='/assets/js/main.js' />
    </>
  )
}

export default MyApp
