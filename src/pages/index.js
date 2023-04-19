import Head from 'next/head';
import Hero from '../components/Hero';
import { SliderData } from '../components/SliderData';
import Slider from '../components/Slider';
import Instagram from '../components/instagram';

export default function Home() {
  return (
    <div> 
        <Head>
          <title> Pottery page </title>
          <meta name='description' content='Pottery blog site' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Hero heading="Sus.Ceramics" description="Coming soon..." />
        <Slider slides={SliderData} />
        <Instagram />
    </div>
  );
}
