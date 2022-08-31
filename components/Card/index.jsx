import Image from 'next/image'

export default function Card({ imgSrc, alt, title, desc, color }) {
  return (
    <a
      className={
        color +
        ' relative items-center bg-white shadow hover:shadow-2xl gridcard rounded-lg h-full text-gray-900'
      }
      href="#"
    >
      <div className="overflow-hidden grid border-t-0 gap-3 md:gap-3 bg-white rounded-lg h-full text-start">
        <div className="relative overflow-hidden rounded-t-lg h-44 sm:h-56 md:h-52 flex justify-center shadow-lg">
          <span className="box">
            <Image
              alt={alt}
              sizes="100vw"
              src={imgSrc}
              decoding="async"
              layout="fill"
              className="card-container"
            />
          </span>
        </div>
        <div>
          <div className="h-28 items-center flex flex-row content-between">
            <div className="w-4/5 md:pb-0 font-extrabold text-start lg:text-lg text-base px-5 flex items-center">
              <div>
                {title}
                <span className="items-center font-light">
                  <br /> {desc}
                </span>
              </div>
            </div>
            <div className="w-1/5">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_23_8" fill="white">
                  <path d="M0.000396729 24C0.000396729 10.7452 10.7456 0 24.0004 0C37.2552 0 48.0004 10.7452 48.0004 24C48.0004 37.2548 37.2552 48 24.0004 48C10.7456 48 0.000396729 37.2548 0.000396729 24Z"></path>
                </mask>
                <path
                  className="arrow-cards"
                  d="M32.7075 24.7071C33.098 24.3166 33.098 23.6834 32.7075 23.2929L26.3435 16.9289C25.953 16.5384 25.3199 16.5384 24.9293 16.9289C24.5388 17.3195 24.5388 17.9526 24.9293 18.3431L30.5862 24L24.9293 29.6569C24.5388 30.0474 24.5388 30.6805 24.9293 31.0711C25.3199 31.4616 25.953 31.4616 26.3435 31.0711L32.7075 24.7071ZM15.0004 25H32.0004V23H15.0004V25ZM24.0004 46C11.8501 46 2.0004 36.1503 2.0004 24H-1.9996C-1.9996 38.3594 9.64099 50 24.0004 50V46ZM46.0004 24C46.0004 36.1503 36.1507 46 24.0004 46V50C38.3598 50 50.0004 38.3594 50.0004 24H46.0004ZM24.0004 2C36.1507 2 46.0004 11.8497 46.0004 24H50.0004C50.0004 9.6406 38.3598 -2 24.0004 -2V2ZM24.0004 -2C9.64099 -2 -1.9996 9.6406 -1.9996 24H2.0004C2.0004 11.8497 11.8501 2 24.0004 2V-2Z"
                  fill="#E5E5E5"
                  mask="url(#path-1-inside-1_23_8)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
