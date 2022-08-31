import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import { enFlag, esFlag } from '../../assets/img'

export default function DropdownLangSelector({ locale }) {
  const localeText = locale.toString().toUpperCase()
  return (
    <div className="dropdownContainer">
      <Menu as="div" className="ml-3 mt-1 xl:ml-0 relative">
        <div>
          <Menu.Button className="menuButtonOption">
            <span className="pr-3">
              <Image src={localeText === 'EN' ? enFlag : esFlag} />
            </span>
            <Link href={localeText === 'EN' ? '/en' : '/es'}>{localeText}</Link>
            <ChevronDownIcon className="chevronDownIcon" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="menuOptionContainer">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button className="flagClass">
                  <span className="pr-3">
                    <Image src={esFlag} />
                  </span>
                  <a href="/es">ES</a>
                </button>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                <button className="flagClass">
                  <span className="pr-3">
                    <Image src={enFlag} />
                  </span>
                  <a href="/en">EN</a>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
