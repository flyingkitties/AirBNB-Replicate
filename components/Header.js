import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Router, useRouter } from 'next/router';


function Header({placeholder}) {

const [searchInput, setSearchInput]= useState("");
const [startDate, setStartDate]= useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const[numberOfGuests, setNumberOfGuests] = useState(1);

const router = useRouter();

const selectionRange = {
  startDate,
  endDate,
  key: 'selection',
};

const handleSelect = (ranges) => {
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}

function resetInput() {
setSearchInput("");
}

const search = () => {
  router.push({
    pathname: "/search",
    query: {
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      numberOfGuests,
    }

  });
  setSearchInput("");
}



  return (
    <header content="width=device-width" className='stiky w-full top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      
      {/* div left section */}
      <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
            src="https://links.papareact.com/qd3"
            layout='fill'
            objectFit="contain"
             objectPosition="left"
        />
      </div>


      {/* middle div */}
      <div className='flex items-center 
       border-2 rounded-full py-2 md:shadow-sm '>
        <input 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
         className='grow pl-8 bg-transparent 
        outline-none text-sm text-gray-600 placeholder-gray-400' type="text" 
        placeholder={ placeholder || "Start your search"} />
      <MagnifyingGlassIcon className="hidden md:inline-flex
       h-8 bg-red-400 text-white 
       rounded-full p-2 cursor-pointer mr-2 "/>
      </div>





      {/* div right section */}
      <div className='flex items-center space-x-4 
      justify-end text-gray-500'>
      <p className='hidden lg:inline'>Become a host</p>
      <GlobeAltIcon className='hidden md:inline h-6 cursor-pointer'/>

      <div className='flex items-center space-x-2 border-2 
      p-2 rounded-full'>
      <Bars3Icon className='h-6 cursor-pointer '/>
      <UserCircleIcon className='h-6 cursor-pointer'/>
      </div>
      

      </div>
{searchInput && 
(
<div className='flex flex-col col-span-3 mx-auto '>
<DateRangePicker
className=''
  ranges={[selectionRange]}
  minDate = {new Date()}
  rangeColors={["#FD5B61"]}
  onChange={handleSelect}
/>
<div className='flex items-center border-b mb-4'>
  <h2 className='text-2xl flex-grow font-semibold pl-5 '
  >Number of Guests</h2>

  <UsersIcon className='h-5'/>
  <input 
  value={numberOfGuests}
  onChange={e => setNumberOfGuests(e.target.value) }
  type="number" 
  min={1}
  className='w-12 pl-2 text-lg outline-none text-red-400 '/>
  
</div>

<div className='flex space-x-10'>
  <button 
  onClick={resetInput}
  className='flex-grow border border-red-400  hover:bg-red-400 hover:text-white text-black font-bold py-2 px-4 rounded-full'>Cancel</button>
  <button onClick={search} className='flex-grow  bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full'>Search</button>
</div>

</div>



)}
    </header>
  )
}

export default Header


