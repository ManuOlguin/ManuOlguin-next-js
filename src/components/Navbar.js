import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';

const Navbar = () => {
  const { shows } = useAppContext();
const randomElement = Math.floor(Math.random() * shows.length);
const id = shows[randomElement]?.show.id;

  return (
    <header class="text-black body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href={`/`}>
    <img class="w-28  text-white p-1 bg-red-600 " src='/assets/Marvel_Logo.svg.webp'></img>
      <span class="ml-3 text-white text-xl">HYPER MEGA ULTRA WIKI</span>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-black justify-center">
      <a class="mr-5 cursor-pointer text-white hover:text-gray-300">Series</a>
    </nav>
    <Link  href={`/show/${id}`}><button class="inline-flex items-center p-4 bg-red-500 border-0 font-medium py-1 text-black px-3 focus:outline-none  rounded mt-4 md:mt-0">Recomendación Random
    </button></Link>
  </div>
</header>
  );
};

export default Navbar;
