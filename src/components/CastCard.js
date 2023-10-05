import { useAppContext } from '@/contexts/AppContext';
import { useState } from 'react';
import Image from 'next/image'

const Cast = ( actualCast) => {
  const person = actualCast?.actualCast.person;
  const defaultImageSource = '/assets/noimage.png'; 

  const character = actualCast?.actualCast.character;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const getImageSource = () => {
    if (isHovered) {  
      // Return the hover image source here
      return character?.image?.original ?? defaultImageSource; 
    } else {
      // Return the default image source here
      return person?.image?.original ?? defaultImageSource; 
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
      <div class="p-4 lg:w-1/4 md:w-1/2 fade w-3/4"       onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <div class="h-full flex flex-col items-center text-center">
        <Image
        
      src={getImageSource()}
      width={500}
      height={500}
      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
      alt={person.name}
    />
          <div class="w-full">
            <h2 class="title-font font-medium text-base text-gray-600 mb-2">{character.name}</h2>
            <h3 class="text-gray-200 mb-3">{person.name}</h3>
           
          </div>
        </div>

      </div>



  );
};

export default Cast;
