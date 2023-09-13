import SingleCardContainer from '@/containers/SingleCardContainer';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Show = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <Navbar />
      <SingleCardContainer id={id} />
      <Footer />


    </>
  )
};

export default Show;
