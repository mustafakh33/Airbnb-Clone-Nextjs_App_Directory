import Image from 'next/image';
import Link from 'next/link';
import Searchbar from '@/app/components/header/Searchbar';
import Navbar from '@/app/components/header/Navbar';

const Header = ({ placeholder }: { placeholder?: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-2 md:py-4">
      <div className="container">
        <div className="relative grid grid-col-1 gap-4 md:gap-0 md:grid-cols-[1fr_2fr] lg:grid-cols-3 ">
        <Link href="/" className="flex items-center justify-center md:justify-start">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="logo-img"
            width={500}
            height={500}
            className="object-contain object-left w-[150px] h-10"
          />
        </Link>
        <Searchbar placeholder={placeholder} />
        <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
