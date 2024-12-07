'use client';

import { useState, useEffect } from 'react';

export default function CarbonometerSection() {
  const [carbonAmount, setCarbonAmount] = useState(0);

  useEffect(() => {
    // Start date of the current year
    const startDate = new Date(new Date().getFullYear(), 0, 1);
    
    // Approximate yearly CO2e emissions in metric tons (based on global average)
    const yearlyEmissions = 36500000000; // 36.5 billion metric tons per year
    
    const calculateCurrentEmissions = () => {
      const now = new Date();
      const secondsInYear = (now.getTime() - startDate.getTime()) / 1000;
      const emissionsPerSecond = yearlyEmissions / (365 * 24 * 60 * 60);
      const currentEmissions = emissionsPerSecond * secondsInYear;
      setCarbonAmount(currentEmissions);
    };

    // Initial calculation
    calculateCurrentEmissions();

    // Update every second
    const intervalId = setInterval(calculateCurrentEmissions, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatCarbon = (value: number) => {
    const formattedNumber = value.toLocaleString('en-US', {
      maximumFractionDigits: 0,
    });
    return `${formattedNumber} CO₂e`;
  };

  return (
    <section className="container mx-auto p-4">
      <div className="bg-gradient-to-br from-green-500 to-purple-600 text-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Carbonometro</h2>
        <div className="flex flex-col items-center gap-8">
          <div className="text-5xl md:text-6xl font-mono font-bold tracking-wider">
            {formatCarbon(carbonAmount)}
          </div>
          <p className="text-sm text-center opacity-75">
            *Emissões globais de CO₂ estimadas para 2024
          </p>
        </div>
      </div>
    </section>
  );
}
