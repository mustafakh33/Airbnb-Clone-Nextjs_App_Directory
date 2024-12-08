import Image from 'next/image';
import { ListingCardItem } from '../types/app';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

type ListingCardProps = Omit<ListingCardItem, 'long' | 'lat'>;
const ListingCard = ({
  title,
  description,
  img,
  total,
  price,
  star,
  location,
}: ListingCardProps) => {
  return (
    <div className='flex flex-col gap-4 md:gap-0 md:flex-row py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='flex-shrink-0'>
        <Image
          src={img}
          width={500}
          height={200}
          className='rounded-2xl object-cover h-[15rem] w-full md:w-80'
          alt='Listing-Card'
        />
      </div>
      <div className='flex flex-col flex-grow md:pl-5 '>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            <StarIcon className='h-5 text-red-400' />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-extralight '>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
