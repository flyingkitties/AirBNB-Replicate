import React, { useState } from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/outline';

function InfoCard({ img, location, title, description, star, price, total }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <div
      className="flex py-5 px-2 pr-4 border-b cursor-pointer
    hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
    first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          alt="Stays Image"
          className="rounded-2xl"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5 ">
        <div className="flex justify-between ">
          <p>{location}</p>
          <HeartIcon
            className={`h-7 cursor-pointer ${
              liked && 'text-red-400 fill-red-400'
            }`}
            onClick={handleClick}
          />
        </div>

        <h4 className="text-xl ">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p
          className="pt-2 text-sm text-grey-500 
    flex-grow"
        >
          {description}
        </p>

        <div
          className="flex justify-between 
items-end pt-5"
        >
          <p className="flex items-center ">
            <StarIcon className="h-5 text-red-400 fill-red-400" />
            {star}
          </p>

          <div className="">
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>

            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
