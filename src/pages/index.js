
import Hero from '@/components/Frontpage/Hero/Hero';
import LatestMatch from '@/components/Frontpage/Latestmatch/LatestMatch';
import TopMatch from '@/components/Frontpage/TopMatche/Topmatch';
import { enviourment } from 'next.config';

import Head from 'next/head'
import { useEffect, useState } from 'react';


// const inter = Inter({ subsets: ['latin'] })

export default function Home({Data}) {
  
  return (
    <>
      <Head>
        <title>Pro Football</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <LatestMatch Data={Data} />
      <TopMatch Data={Data} />
    </>
  )
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${enviourment.MYFOOTBALLAPIKEY}`,
		'X-RapidAPI-Host': `${enviourment.url}`
	}
};

export async function getServerSideProps(){
  const responseLatest= await fetch(`https://${enviourment.url}/`, options);
  const Data = await responseLatest.json();
  return{
    props:{
      Data: Data,
    }
  }
}
