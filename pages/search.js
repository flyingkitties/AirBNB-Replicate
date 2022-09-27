import {useRouter } from 'next/router';
import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {format} from "date-fns";
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import InfoCard from '../components/InfoCard';



function Search({searchResults}) {

  

    const router = useRouter();
    const {location, startDate, endDate, numberOfGuests} = router.query;

    

 const formattedStartDate = format(new Date(startDate), "dd");
 const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
const range = `${formattedStartDate}-${formattedEndDate}` 



  return (
    <div className='h-screen'>
      <Header 
        placeholder={`${location} | ${range} | ${numberOfGuests} Guests` }
      />

<main className='flex '>

<section className='flex-grow px-5 pt-14'>
    <p className='text-xs '>300+ Stays · {range} · for {numberOfGuests} Guests</p>
<h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in {location}</h1>

<div className='flex sm:inline-flex mb-5 mt-3 
space-x-3 text-gray-800 whitespace-nowrap'>
    <p className='button '>Cancelation Flexibility </p>
    <p className='button '>Type of Place </p>
    <p className='button '>Price </p>
    <p className='button '>Rooms and Beds </p>
    <p className='button '>More Filters </p>
</div>

<div className='flex flex-col'>
{searchResults.map(({img, location, title, description, star, price, total}) => (<InfoCard
  key={img}
  img={img}
  location={location}
  title={title}
  description={description}
  star={star}
  price={price}
  total={total}
/>))}
</div>

</section>

</main>



      <Footer/>
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://rafaelmendes.co.uk/rita.json').then(
      (res) => res.json()
    )
    

    return {
        props: {
            searchResults
        }
    };
}