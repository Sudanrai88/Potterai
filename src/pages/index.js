import Head from 'next/head';
import Hero from '../components/Hero';
import Some from '../components/Some';
import Instagram from '../components/Instagram';
import { useState } from 'react';
import TestModal from '@/components/TestModal';

export default function Home() {
  return (
    <div >
      <Head>
        <title> Pottery page </title>
        <meta name='description' content='Pottery blog site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading="Sus.Ceramics" description="Coming soon..." image="https://i.imgur.com/euCFIxM.jpg" />
      <Some />
      <Instagram />
    </div>
  );
}
