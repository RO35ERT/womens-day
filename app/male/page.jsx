'use client'
// pages/womens-day.js
import { useState, useEffect } from 'react';
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
    if (gender) {
      setRandomMessage(getRandomMessage());
    }
  }, [gender]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md text-center m-4">
        {gender === 'female' ? (
          <div>
            <h2 className="text-4xl font-bold mb-4 text-pink-800">
              Happy Women's Day!
            </h2>
            <p className="text-gray-600 mb-8">{randomMessage}</p>
          </div>
        ) : gender === 'male' ? (
          <div>
            <h2 className="text-4xl font-bold mb-4 text-blue-800">
                I hope you wished the women in your life a!
            </h2>
          </div>
        ) : (
          <h2 className="text-2xl font-bold mb-4">
            Good Luck
          </h2>
        )}
      </div>
    </div>
  );
};

export default WomensDayPage;
