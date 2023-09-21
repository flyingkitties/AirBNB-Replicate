import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function Footer() {
  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-36 space-x-3
 py-14 bg-grey-100 text-gray-600 "
      >
        <div className="space-y-4 text-xs text-gray-500">
          <h1 className="font-bold text-gray-800">Support</h1>
          <p>Help Center</p>
          <p>AirCover</p>
          <p>Safety information</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Report a neighbourhood concern</p>
        </div>

        <div className="space-y-4 text-xs text-gray-500">
          <h1 className="font-bold text-gray-800">Community</h1>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Support Afghan refugees</p>
          <p>Combating discrimination</p>
        </div>

        <div className="space-y-4 text-xs text-gray-500">
          <h1 className="font-bold text-gray-800">Hosting</h1>
          <p>Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>

        <div className="space-y-4 text-xs text-gray-500">
          <h5 className="font-bold text-gray-800">Airbnb</h5>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Gift cards</p>
        </div>
      </div>

      <div
        className="flex justify-center  p-5 text-sm  text-gray-600 
           border-t  "
      >
        <div className="flex space-x-4 cursor-pointer my-auto font-bold ">
          <GlobeAltIcon className="icons h-6" />
          <p className="">English(GB)</p>
          <p>£</p>
          <p className="flex items-center">GBP</p>
        </div>
      </div>

      <div className="flex justify-center  text-gray-600 ">
        <div className=" flex cursor-pointer my-auto text-xs ">
          <p className="px-10 space-x-8">© 2022 RG Buils</p>
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
