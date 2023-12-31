import ShowCard from '@/components/ShowCard';
import { useAppContext } from '@/contexts/AppContext';

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
      <h2 class="font-mono font-bold text-5xl">SERIES</h2>
      {!loading && (
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="flex flex-wrap -m-4 justify-center">
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
            </div>
          </div>
        </section>
      )}
      {loading && <p className='w-full flex justify-center'>Loading...</p>}
    </section>
  );
};

export default CardsContainer;
