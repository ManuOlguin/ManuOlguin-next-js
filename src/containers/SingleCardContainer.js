import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from '@/components/ShowSingleCard';

const SingleCardContainer = ({ id }) => {
  const { show, getShow, getShowCast, showLoading,showCast, ShowCastLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
      getShowCast(id)
    }
  }, [id, getShow, getShowCast]);
  return (
    <>
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <ShowSingleCard show={show} showCast={showCast} />}
    </>
  );
};

export default SingleCardContainer;
