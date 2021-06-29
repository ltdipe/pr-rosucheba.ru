const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: process.env.PROD_ROOT_FRONT_URL,
    site_name: 'Rosucheba'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: 'Дистанционное образование',
  description: 'Rosucheba — получите высшее образование цистанционно',
  canonical: process.env.PROD_ROOT_FRONT_URL
}

export default seo
