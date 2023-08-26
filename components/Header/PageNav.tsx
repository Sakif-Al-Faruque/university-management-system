import { 
  EllipsisHorizontalCircleIcon,
  PencilIcon,
  Bars4Icon 
} from "@heroicons/react/24/outline";
import { WebLogo } from "@/asset/images";
import Image from "next/image";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function PageNav({background}:{background: string}) {
  return (
    <nav className={`bg-white py-10 ${background}`}>
      <div className="container w-4/5 mx-auto my-0">
        <div className="nav-container flex flex-wrap flex-row justify-between">
          <div className="nav-logo-bar xl:w-1/5 py-4 md:w-full md:text-center xl:text-left">
            <Image 
              className="inline block"
              src={WebLogo} 
              alt={"Web Site Logo"}
              height={35}
              width={35}
              />
          </div>
          <div className="nav-menu-bar xl:hidden md:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-end">
                    <Bars4Icon className="w-5 inline-block hover:text-red-600 py-4"/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    <div className="nav-menu-primary-links-bar w-full">
                      <ul className="list-none flex flex-wrap flex-column justify-between">
                        <li className="py-4 block w-full text-right"><a href="/about" className="text-base hover:text-red-600 uppercase">about</a></li>
                        <li className="py-4 block w-full text-right"><a href="#" className="text-base hover:text-red-600 uppercase">academics</a></li>
                        <li className="py-4 block w-full text-right"><a href="#" className="text-base hover:text-red-600 uppercase">admission</a></li>
                        <li className="py-4 block w-full text-right"><a href="#" className="text-base hover:text-red-600 uppercase">administration</a></li>
                        <li className="py-4 block w-full text-right"><a href="#" className="text-base hover:text-red-600 uppercase">research</a></li>
                        <li className="py-4 block w-full text-right"><a href="#" className="text-base hover:text-red-600 uppercase">contacts</a></li>
                      </ul>
                    </div>
                    <div className="nav-menu-secondary-links-bar w-full border-t-2 border-stone-400"> 
                      <ul className="list-none flex flex-wrap flex-column justify-end">
                        <li className="py-4 block w-full text-right"><a href="/portal" className="text-base hover:text-red-600 uppercase"><EllipsisHorizontalCircleIcon className="w-5 inline"/> <span className="w-6">portal</span></a></li>
                        <li className="py-4 block w-full text-right"><a href="#" className="text-base hover:text-red-600 uppercase"><PencilIcon className="w-5 inline"/>apply</a></li>
                      </ul>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="nav-primary-links-bar xl:w-3/5  md:w-full">
            <ul className="list-none flex flex-wrap flex-row justify-between">
              <li className="py-4"><a href="/about" className="text-base hover:text-red-600 uppercase">about</a></li>
              <li className="py-4"><a href="#" className="text-base hover:text-red-600 uppercase">academics</a></li>
              <li className="py-4"><a href="#" className="text-base hover:text-red-600 uppercase">admission</a></li>
              <li className="py-4"><a href="#" className="text-base hover:text-red-600 uppercase">administration</a></li>
              <li className="py-4"><a href="#" className="text-base hover:text-red-600 uppercase">research</a></li>
              <li className="py-4"><a href="#" className="text-base hover:text-red-600 uppercase">contacts</a></li>
            </ul>
          </div>
          <div className="nav-secondary-links-bar xl:w-1/5 md:w-full"> 
            <ul className="list-none xl:flex xl:flex-wrap xl:flex-row xl:justify-end md:text-center ">
              <li className="py-4 xl:ml-6 inline-block md:mx-3"><a href="/portal" className="text-base hover:text-red-600 uppercase"><EllipsisHorizontalCircleIcon className="w-5 inline"/> <span className="w-6">portal</span></a></li>
              <li className="py-4 xl:ml-6 inline-block md:mx-3"><a href="#" className="text-base hover:text-red-600 uppercase"><PencilIcon className="w-5 inline"/>apply</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
