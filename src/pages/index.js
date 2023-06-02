import Head from 'next/head';
import Hero from '../components/Hero';
import Some from '../components/Some';
import Instagram from '../components/Instagram';
import image8 from "src/assets/img8.jpg";

export default function Home() {
  return (
    <div >
      <Head>
        <title> Pottery page </title>
        <meta name='description' content='Pottery blog site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading="Sus.Ceramics" description="Coming soon..." image="https://i.imgur.com/euCFIxM.jpg" backgroundVH="110vh" showButton={true} />
      <Some />
      <Instagram />
    </div>
  );
}
