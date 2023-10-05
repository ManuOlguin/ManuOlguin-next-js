import { useAppContext } from '@/contexts/AppContext';

import Link from 'next/link';

const Hero = () => {
  const { shows } = useAppContext();
const randomElement = Math.floor(Math.random() * shows.length);
const id = shows[randomElement]?.show.id;
  return (

    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-7xl font-mono font-black text-5xl mb-4 text-red-500">MARVEL HYPER 
          <br class="hidden lg:inline-block"></br>MEGA ULTRA WIKI
        </h1>
        <p class="text-2xl mb-8 leading-relaxed text-stone-300">Encontrá las mejores series de Marvel en el sitio de fanaticos más grande de toda Latinoamérica</p>
        <div class="flex justify-center">
          <Link  href={`/show/${id}`}>
          <button class="inline-flex text-black bg-red-500 font-medium  border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">Recomendación Random</button>
          </Link>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-4/12 md:w-1/2 w-4/6">
        <img class="object-cover object-center rounded" alt="hero" src="/assets/ironhero.png"></img>
      </div>
    </div>
  </section>


  );
};

export default Hero;
