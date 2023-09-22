import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Router, useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/styles.css';

function Header({ placeholder }) {
  const { data: session, status } = useSession();
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  function resetInput() {
    setSearchInput('');
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
    setSearchInput('');
  };

  return (
    <header
      className="stiky w-full top-0 z-50 grid grid-cols-4 
       shadow-md p-2 py-3 md:p-5 md:px-10 space-x-3"
    >
      {/* div left section */}
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer
         my-auto mr-1 "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Logo"
        />
      </div>

      {/* middle div */}
      <div
        className="relative flex items-center dark:border-gray-400
       border-2 rounded-full py-2 md:shadow-sm col-span-2"
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="absolute left-0 right-0 top-0 bottom-0 grow pl-3 bg-transparent 
        outline-none text-sm text-gray-600 dark:text-gray-200 placeholder-gray-400"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex absolute right-0 dark:bg-[#2c3333]
       h-9 bg-red-400 text-white dark:text-gray-200 rounded-full p-2 cursor-pointer mr-0.5 "
        />
      </div>

      {/* div right section */}
      <div
        className="flex items-center md:space-x-4 
      justify-end text-gray-500 dark:text-gray-200"
      >
        <p className="hidden lg:inline text-xs">Become a host</p>
        <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer" />

        <div
          className="flex items-center space-x-2 md:space-x-4 border-2 
      p-2 rounded-full dark:border-gray-400"
          onClick={!session ? signIn : signOut}
        >
          <Bars3Icon className="h-6 cursor-pointer " />
          {session ? (
            <Image
              src={session.user.image}
              width={25}
              height={25}
              className="rounded-full cursor-pointer"
              alt="User Image"
            />
          ) : (
            <UserCircleIcon className="h-6 cursor-pointer" />
          )}
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-4 mx-auto ">
          <div className="flex items-center justify-center md:hidden ">
            <DateRange
              className="mt-2"
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
              onChange={handleSelect}
              direction="vertical"
            />
          </div>
          <div className=" items-center justify-center hidden md:inline-flex dark:text-gray-800 ">
            <DateRangePicker
              className={`my-2 lg:my-5 `}
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#FD5B61', '#2c3333']}
              onChange={handleSelect}
              direction="vertical"
            />
          </div>
          <div className="flex items-center border-b mb-4 lg:mx-28">
            <h2 className="sm:text-xl md:text-2xl flex-grow font-semibold pl-5 ">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400
               dark:text-gray-200 dark:bg-[#2c3333]"
            />
          </div>

          <div className="flex space-x-10 mr-3 lg:mx-28 ">
            <button
              onClick={resetInput}
              className="flex-grow border border-red-400  hover:bg-red-400
               hover:text-white text-black font-bold py-2 px-4 rounded-full
               dark:text-white"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow  bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
