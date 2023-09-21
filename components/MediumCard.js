import React from 'react';
import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div
      className="cursor-pointer hover:scale-105
    transform transition-transform duration-300
   ease-out  scrollbar-hide p-3 -ml-3"
    >
      <div className="relative h-80 w-80">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          alt="Stays image"
        />
      </div>

      <h3 className="flex items-center justify-center text-2xl mt-3 ">
        {title}
      </h3>
    </div>
  );
}

export default MediumCard;
