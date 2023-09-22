import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-x-10 lg:gap-x-20 px-10 lg:px-24 space-y-10 md:space-y-0 md:space-x-3
 py-14 bg-grey-100 text-gray-600 "
      >
        <div className="text-center md:text-left space-y-2 md:space-y-4 text-xs text-gray-500 dark:text-gray-200">
          <h1 className="font-bold text-gray-800 dark:text-white">Support</h1>
          <p className="link">Help Center</p>
          <p className="link">AirCover</p>
          <p className="link">Safety information</p>
          <p className="link">Supporting people with disabilities</p>
          <p className="link">Cancellation options</p>
          <p className="link">Our COVID-19 Response</p>
          <p className="link">Report a neighbourhood concern</p>
        </div>

        <div className="text-center md:text-left space-y-2 md:space-y-4 text-xs text-gray-500 dark:text-gray-200">
          <h1 className="font-bold text-gray-800 dark:text-white">Community</h1>
          <p className="link">Airbnb.org: disaster relief housing</p>
          <p className="link">Support Afghan refugees</p>
          <p className="link">Combating discrimination</p>
        </div>

        <div className=" text-center md:text-left space-y-2 md:space-y-4 text-xs text-gray-500 dark:text-gray-200">
          <h1 className="font-bold text-gray-800 dark:text-white">Hosting</h1>
          <p className="link">Try hosting</p>
          <p className="link">AirCover for Hosts</p>
          <p className="link">Explore hosting resources</p>
          <p className="link">Visit our community forum</p>
          <p className="link">How to host responsibly</p>
        </div>

        <div className=" text-center md:text-left space-y-2 md:space-y-4 text-xs text-gray-500 dark:text-gray-200">
          <h1 className="font-bold text-gray-800 dark:text-white">Airbnb</h1>
          <p className="link">Newsroom</p>
          <p className="link">Learn about new features</p>
          <p className="link">Letter from our founders</p>
          <p className="link">Careers</p>
          <p className="link">Investors</p>
          <p className="link">Gift cards</p>
        </div>
      </div>

      <div
        className="flex justify-center  p-5 text-sm  text-gray-600 dark:text-gray-200
           border-t  "
      >
        <div className="flex space-x-4 cursor-pointer my-auto font-bold items-center">
          <GlobeAltIcon className="icons h-6" />
          <p className="">English(GB)</p>
          <p>£</p>
          <p className="flex items-center">GBP</p>
        </div>
      </div>

      <div className="flex justify-center  text-gray-600 dark:text-gray-200">
        <div className=" flex cursor-pointer my-auto pb-2 text-xs ">
          <Link href="https://www.ritaguilherme.com/">
            <p className="px-3 md:px-10 space-x-8">© 2022 RG Buils</p>
          </Link>
          <p>·</p>
          <p className="px-4">Privacy</p>
          <p>·</p>
          <p className="px-4">Terms</p>
          <p>·</p>
          <p className="px-4">Sitemap</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
