import { useAppContext } from '@/contexts/AppContext';
import CastCard from './CastCard';

const Cast = () => {
  const { showCast, showCastLoading } = useAppContext();

  return (
    
    <section class="text-gray-600 body-font">
      {!showCastLoading && (
        showCast.length != 0 && 
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">

      <h1 class="text-2xl font-medium title-font mb-1 text-gray-400">CAST</h1>
    </div>
    <div class="flex flex-wrap -m-4 justify-center">
    {showCast.map((actualCast, j) => {
              return <CastCard actualCast={actualCast} key={j} />;
            })}
      </div>
            
  </div>

  )}
</section>


  );
};

export default Cast;
