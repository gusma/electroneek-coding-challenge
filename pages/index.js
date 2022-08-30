import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home({ dir, yoast_head_json }) {
  const intl = useIntl()

  const descriptionOG = yoast_head_json[0].yoast_head_json.og_description
  const descriptionOGLinkReplaced = descriptionOG.replace('Learn more', '')
  const descriptionOGClean = descriptionOGLinkReplaced.replace(
    /((http:|https:)[^\s]+[\w])/g,
    '<a href="$1" target="_blank">Learn more</a>'
  )

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

      <Layout>
        <main dir={dir} className={styles.main}>
          <h1 className="text-3xl font-bold underline bg-orange-500">
            {yoast_head_json[0].yoast_head_json.title}
          </h1>
          {/* <p className={styles.description}>{descriptionOGCleanHTML}</p> */}
          <div>
            <p dangerouslySetInnerHTML={{ __html: descriptionOGClean }}></p>
          </div>
        </main>
        <p className="bg-white">{yoast_head_json.title}</p>
        {console.log(yoast_head_json[0].yoast_head_json)}
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
