import { useRouter } from 'next/router'
import Image from 'next/image'
import { useIntl } from 'react-intl'

import posti from '../../assets/img/post-i-1.webp'
import posti2 from '../../assets/img/post-i-2.webp'
import posti3 from '../../assets/img/post-i-3.webp'
import bgImage from '../../assets/img/bg-image.webp'

import Card from '../Card/index.jsx'

const Body = props => {
  const { locale } = useRouter()
  const intl = useIntl()

  const title = props.title
  const description = props.description

  const titleOGCleanPt1 = title.split(/[-|]+/)[0]
  const titleOGCleanPt2 = title.split(/[-|]+/)[1]

  const descriptionOGCleanPt1 = description.split('.')[0].toString()
  const descriptionOGCleanPt2 = description.split('.')[3].toString()

  const card1Title = intl.formatMessage({ id: 'page.home.card1.title' })
  const card1Desc = intl.formatMessage({ id: 'page.home.card1.description' })
  const card2Title = intl.formatMessage({ id: 'page.home.card2.title' })
  const card2Desc = intl.formatMessage({ id: 'page.home.card2.description' })
  const card3Title = intl.formatMessage({ id: 'page.home.card3.title' })
  const card3Desc = intl.formatMessage({ id: 'page.home.card3.description' })
  const callToAction = intl.formatMessage({ id: 'page.home.callToAction' })

  return (
    <>
      <div className="mainComponentContainer">
        <span className="mainImgContainer">
          <Image
            sizes="100vw"
            src={bgImage}
            decoding="async"
            data-nimg="fill"
            className="mainImg"
          />
        </span>
        <section className="relative pt-20 pb-6 lg:pt-20 lg:pb-0 ">
          <div className="max-w-7xl mx-auto px-6 md:px-8 ">
            <div className="titleWrapper">
              <div className="col-span-12 lg:col-span-9 ">
                <div className="titleContainer">
                  <h1>
                    {titleOGCleanPt1}
                    <span className="font-normal">{titleOGCleanPt2}</span>
                  </h1>
                  <div className="descriptionText">{descriptionOGCleanPt1}</div>
                  <div className="descriptionText">{descriptionOGCleanPt2}</div>
                  <div className="call-to-action">
                    <a href="/msps/success-stories/">{callToAction}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="z-10 md:pt-28 pt-0 lg:pt-0 max-w-7xl mx-auto px-6 md:px-8 overflow-visible indexCounters_container">
          <div className="md:gap-x-8 md:gap-y-10 gap-5 grid auto-rows-auto md:pb-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 indexCounters_line">
            <Card
              imgSrc={posti}
              alt="Start and grow your RPA service business"
              title={card1Title}
              desc={card1Desc}
              color="arrow-blue"
            />
            <Card
              imgSrc={posti2}
              alt="Learn our partners"
              title={card2Title}
              desc={card2Desc}
              color="arrow-green"
            />
            <Card
              imgSrc={posti3}
              alt="Meet our partners"
              title={card3Title}
              desc={card3Desc}
              color="arrow-orange"
            />
          </div>
        </div>
      </div>
      <div className="postBody main-screen-0"></div>{' '}
    </>
  )
}

export default Body
