import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link.js'

import { electroneekLogo } from '../../assets/img/index.js'
import DropdownLangSelector from '../DropdownLangSelector/index.jsx'

const Header = () => {
  const { locale } = useRouter()
  const [navbar, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <nav className="headerWrapper" data-fixed-header="true">
      <div className={navbar ? 'navbar-active' : 'navbar'}>
        <div className="headerContainer">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <div className="h-full w-auto">
                    <Image src={electroneekLogo} alt="Electroneek" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-0 sm:pr-0">
              <div className="hidden xl:block sm:ml-0">
                <div className="flex space-x-1">
                  <div className="inline-block">
                    <button
                      className="inline-flex justify-center w-full px-2 py-2 text-xs font-medium text-gray-300 hover:text-green-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-menu-button-1"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      HYPERAUTOMATION
                    </button>
                  </div>
                  <div className="inline-block">
                    <button
                      className="inline-flex justify-center w-full px-2 py-2 text-xs font-medium text-gray-300 hover:text-green-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-menu-button-2"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      MSPs
                    </button>
                  </div>
                  <div className="inline-block">
                    <button
                      className="inline-flex justify-center w-full px-2 py-2 text-xs font-medium text-gray-300 hover:text-green-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-menu-button-3"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PLATFORM
                    </button>
                  </div>
                  <a
                    className=" text-gray-300 hover:text-green-400 px-3 py-2 rounded-none text-xs font-medium"
                    href="/partners/"
                  >
                    PARTNERS
                  </a>
                  <div className="inline-block">
                    <button
                      className="inline-flex justify-center w-full px-2 py-2 text-xs font-medium text-gray-300 hover:text-green-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-menu-button-4"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      RESOURCES
                    </button>
                  </div>
                  <a
                    className=" text-gray-300 hover:text-green-400 px-3 py-2 rounded-none text-xs font-medium"
                    href="/blog/"
                  >
                    BLOG
                  </a>
                  <div className="inline-block">
                    <button
                      className="inline-flex justify-center w-full px-2 py-2 text-xs font-medium text-gray-300 hover:text-green-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      id="headlessui-menu-button-5"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      COMPANY
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-buttons  hidden xl:flex xl:flex-row">
              <div class="hidden lg:inline-block order-1 flex-shrink-0 sm:order-3 sm:ml-3">
                <DropdownLangSelector locale={locale} />
              </div>
              <div class="hidden lg:inline-block order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <div class="uppercase cursor-pointer flex items-center justify-center px-4 py-2 border border-white border-opacity-20 hover:border-opacity-100 rounded-md shadow-sm text-xs font-medium text-white hover:text-gray-50">
                  Talk to us
                </div>
              </div>
              <div class="hidden lg:inline-block order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <a
                  target="_blank"
                  class="flex items-center justify-center py-2 shadow-sm text-sm font-medium text-white"
                  href="/account/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-0.5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <title>Partner sign in</title>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="hidden lg:inline-block order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <a
                  href="tel:+16506009550"
                  class="flex items-center justify-center py-2 shadow-sm text-sm font-medium text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4 mt-0.5 ml-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
