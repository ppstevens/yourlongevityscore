'use client';

import { useState } from 'react';

export default function VO2Estimator() {
  const [distance, setDistance] = useState(3.0); // miles
  const [timeMinutes, setTimeMinutes] = useState(25);
  const [useMiles, setUseMiles] = useState(true);
  const [vo2Result, setVo2Result] = useState<number | null>(null);

  const calculateVO2 = () => {
    let distanceInMeters = distance;

    if (useMiles) {
      distanceInMeters = distance * 1609.34; // miles to meters
    }

    // More accurate Cooper Test approximation
    const timeInSeconds = timeMinutes * 60;
    const speedMPS = distanceInMeters / timeInSeconds;
    
    // VO2 Max estimate (ml/kg/min) - simplified Cooper formula
    const vo2 = (distanceInMeters / 1000) * 18.4 + 3.5; // Adjusted for better realism

    setVo2Result(Math.round(Math.max(15, vo2)));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tighter text-center mb-2">Cooper 12-Minute Run Test</h1>
        <p className="text-center text-gray-600 mb-12">Estimate your VO2 Max (Cardiovascular Fitness)</p>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => setUseMiles(true)} className={`px-6 py-2 rounded-xl ${useMiles ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>
              Miles
            </button>
            <button onClick={() => setUseMiles(false)} className={`px-6 py-2 rounded-xl ${!useMiles ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>
              Meters
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-lg font-medium mb-3">
                Distance {useMiles ? "(miles)" : "(meters)"}
              </label>
              <input 
                type="number" 
                value={distance} 
                onChange={(e) => setDistance(parseFloat(e.target.value) || 0)} 
                className="w-full text-6xl font-light text-center py-8 border border-gray-200 rounded-3xl"
                step={useMiles ? "0.1" : "10"}
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-3">Time (minutes)</label>
              <input 
                type="number" 
                value={timeMinutes} 
                onChange={(e) => setTimeMinutes(parseFloat(e.target.value) || 0)} 
                className="w-full text-6xl font-light text-center py-8 border border-gray-200 rounded-3xl"
              />
            </div>

            <button 
              onClick={calculateVO2}
              className="w-full py-8 text-2xl font-semibold bg-green-600 text-white rounded-3xl hover:brightness-110 transition"
            >
              Calculate VO2 Max
            </button>

            {vo2Result && (
              <div className="text-center mt-8 p-8 bg-green-50 rounded-3xl">
                <div className="text-6xl font-bold text-green-600">{vo2Result}</div>
                <p className="text-xl text-gray-600">mL/kg/min</p>
                <p className="text-sm text-gray-500 mt-4">Your estimated VO2 Max</p>
              </div>
            )}
          </div>
        </div>
              {/* Back to Dashboard Button */}
        <div className="mt-16 text-center">
          <a 
            href="/" 
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-green-700 transition"
          >
            ← Back to Longevity Score Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}