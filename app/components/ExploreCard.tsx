"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ExploreItem } from '../types/app';
import defaultImg from '../../public/img/liverpoolwebp.webp';
type ExploreCardProps = ExploreItem;
const ExploreCard = ({ location, distance, img }: ExploreCardProps) => {
  const [imageSrc, setImageSrc] = useState(img || defaultImg);

  const handleImageError = () => {
    setImageSrc(defaultImg);
  };
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative w-16 h-16'>
        <Image src={imageSrc}  alt='ExploreCard-Img' fill onError={handleImageError}  />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
