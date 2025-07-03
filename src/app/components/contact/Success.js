"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Success = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          window.history.back();
        }
        return prevCountdown - 1;
      });
    }, 1000); 

    return () => clearInterval(timer);
  }, [router]);

  return (
    <section className='min-h-[85vh] flex flex-col items-center justify-center'>
      
      <h1 className="text-[2rem] text-green-500 mb-4">Form submitted successfully🎉</h1>
      <p className='text-[1.2rem]'>We will contact you soon!!</p>
      <Link href={'/'} className='text-blue-500 hover:underline'>Go back</Link>
      <p className='text-gray-300'>{countdown}s</p>
    </section>
  );
};

export default Success;
