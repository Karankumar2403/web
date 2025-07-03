import React from 'react'
import About from '../components/about/About'
import Head from 'next/head'

export const metadata = {
  title: "About Us",
  description: "",
};

const page = () => {
  return (
    <>
    <Head>
      <title>About Us</title>
    </Head>
    <About/>
  
    </>
  )
}

export default page
