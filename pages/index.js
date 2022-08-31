import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Body from '../components/Body'

import styles from '../styles/Home.module.css'

export default function Home({ dir, yoast_head_json }) {
  const { locale } = useRouter()

  const titleOG = yoast_head_json[0].yoast_head_json.title
  const descriptionOG = yoast_head_json[0].yoast_head_json.og_description
  const descriptionOGLinkReplaced = descriptionOG
    .replace('Learn more', '')
    .replace('[&hellip;]', '')

  return (
    <>
      <Head>
        <title>{yoast_head_json[0].yoast_head_json.title}</title>
        <meta
          name="description"
          content={yoast_head_json[0].yoast_head_json.og_description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout locale={locale}>
        <Body title={titleOG} description={descriptionOGLinkReplaced} />
        <main dir={dir} className={styles.main}></main>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const commonPath = `https://wp.dev.electroneek.com/wp-json/wp/v2/pages?slug`
  const spURL = `${commonPath}=homepage-studio-ide-2&lang=es`
  const enURL = `${commonPath}=new-mainpage`

  const pickLanguage = locale && locale === 'es' ? spURL : enURL
  const yoast_head_json = await fetch(pickLanguage).then(res => res.json())

  return {
    props: {
      yoast_head_json,
    },
  }
}
