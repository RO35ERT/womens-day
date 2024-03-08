'use client'
// pages/womens-day.js
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'
import messages from '../components/mesages';

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const WomensDayPage = () => {
    const searchParams = useSearchParams()
 
    const gender = searchParams.get('gender');

    const [randomMessage, setRandomMessage] = useState(null);

  useEffect(() => {
    setRandomMessage(getRandomMessage());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md text-center">
        <Suspense>
        {gender === 'female' ? (
          <div>
            <h2 className="text-4xl font-bold mb-4 text-pink-800">
              Happy Women's Day!
            </h2>
            <p className="text-gray-600 mb-8">{randomMessage}</p>
          </div>
        ) : (
          <h2 className="text-2xl font-bold mb-4">
            I hope you wished the women in your life a Happy Women's Day!
          </h2>
        )}
        </Suspense>
      </div>
    </div>
  );
};

export default WomensDayPage;
