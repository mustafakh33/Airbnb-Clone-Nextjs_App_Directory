import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
      <Image
        src="/img/Hero2.jpg"
        alt="banner-img"
        fill
        className="object-cover object-center"
      />
       <div className="absolute top-1/2 w-full text-center transform -translate-y-1/2">
        <p className="text-sm sm:text-lg text-gray-800">
          Not sure where to go? Perfect.
        </p>
        <button
          type="button"
          className="text-purple-500 bg-white px-6 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
