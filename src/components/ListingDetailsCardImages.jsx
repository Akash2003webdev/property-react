// // import React from 'react';

// // const ListingDetailsCardImages = ({ images }) => {
// //   return (
// //     <div>
// //       {images.map((image) => {
// //         return <img key={image} src={`/src/assets/${image}`} />;
// //       })}
// //     </div>
// //   );
// // };

// // export default ListingDetailsCardImages;
// import React, { useEffect, useState } from 'react';

// const ListingDetailsCardImages = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className='group relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl'>
//       {/* Gradient background overlay */}
//       <div className='absolute inset-0 bg-gradient-to-r from-pink-300 via-white to-pink-300 opacity-60 blur-2xl'></div>

//       {/* Image Slider */}
//       <div
//         className='flex transition-transform duration-700 ease-in-out'
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {images.map((image) => (
//           <div key={image} className='w-full flex-shrink-0'>
//             <img
//               src={`/src/assets/${image}`}
//               alt='Listing'
//               className='h-96 w-full rounded-2xl object-cover'
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-pink-500 opacity-0 shadow-md transition-all hover:bg-pink-100 group-hover:opacity-100'
//       >
//         ❮
//       </button>
//       <button
//         onClick={nextSlide}
//         className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-pink-500 opacity-0 shadow-md transition-all hover:bg-pink-100 group-hover:opacity-100'
//       >
//         ❯
//       </button>

//       {/* Dots Indicator */}
//       <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2'>
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-3 w-3 rounded-full transition-all ${
//               currentIndex === index
//                 ? 'scale-110 bg-pink-500'
//                 : 'bg-white/70 hover:bg-pink-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListingDetailsCardImages;
import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { getImageUrl } from '@/lib/utils/images';

const ListingDetailsCardImages = ({ listing }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <img
        className='mb-4 h-[500px] w-full rounded-md object-cover'
        src={getImageUrl(listing.images[currentImageIndex])}
        alt={listing.name}
      />
      <Carousel className='mx-auto mb-4 w-[90%]'>
        <CarouselContent>
          {listing.images.map((image, index) => (
            <CarouselItem
              key={image}
              className='basis-1/3 cursor-pointer'
              onClick={() => setCurrentImageIndex(index)}
              isSelected={index === currentImageIndex}
            >
              <img
                className='h-52 w-full object-cover shadow-sm'
                src={getImageUrl(image)}
                alt={listing.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ListingDetailsCardImages;
