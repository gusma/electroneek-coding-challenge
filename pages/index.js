import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home({ dir }) {
  const { locales } = useRouter()

  const intl = useIntl()

  const title = intl.formatMessage({ id: 'page.home.head.title' })
  const description = intl.formatMessage({
    id: 'page.home.head.meta.description',
  })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main dir={dir} className={styles.main}>
          <h1 className="text-3xl font-bold underline bg-orange-500">
            <FormattedMessage
              id="page.home.title"
              values={{ b: chunks => <b>{chunks}</b> }}
            />
          </h1>

          <p className={styles.description}>
            <FormattedMessage id="page.home.description" />
          </p>
        </main>
      </Layout>
    </>
  )
}
