'use client';

import { useState, useEffect } from 'react';

export default function CarbonometerSection() {
  const [time, setTime] = useState(0);
  const [isRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const formatTime = (timeInSeconds: number) => {
    const totalNumber = (timeInSeconds * 1000).toString().padStart(9, '0');
    const withCommas = totalNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return withCommas;
  };

  return (
    <section className="container mx-auto p-4">
      <div className="bg-gradient-to-br from-green-500 to-purple-600 text-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Carbonômetro</h2>
        <div className="flex flex-col items-center gap-8">
          <div className="text-6xl font-mono font-bold tracking-wider">
            {formatTime(time)}
          </div>
        </div>
      </div>
    </section>
  );
}
