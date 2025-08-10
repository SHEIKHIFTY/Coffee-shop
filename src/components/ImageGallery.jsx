import React, { useState } from 'react';

export default function ImageGallery({ first, second, third }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const images = [first, second, third];

  return (
   <div className="max-w-6xl mx-auto flex flex-row flex-nowrap gap-2 justify-center transition-all duration-500 [&>img]:transition-all">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Cafe view ${index + 1}`}
      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
      className={`rounded-md shadow-md object-cover bg-top cursor-pointer h-52 sm:h-72
        ${
          activeIndex === null
            ? 'w-[32%] lg:w-[32%]'
            : activeIndex === index
            ? 'w-[55%] lg:w-[66%]'
            : 'w-[22%] lg:w-[17%] opacity-70'
        }
      `}
    />
  ))}
</div>






  );
}
