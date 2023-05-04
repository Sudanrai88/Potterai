import '@/styles/globals.css'
import Navbar from '@/components/Navbar';
import TestModal from '@/components/TestModal';
import 'blaze-slider/dist/blaze.css'
import Footer from '@/components/Footer';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
