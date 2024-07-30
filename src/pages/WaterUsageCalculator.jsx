import React, { useState, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

const WaterUsageCalculator = () => {
  const [showerMinutes, setShowerMinutes] = useState('');
  const [toiletFlushes, setToiletFlushes] = useState('');
  const [washingLoads, setWashingLoads] = useState('');
  const [totalUsage, setTotalUsage] = useState(null);
  const [history, setHistory] = useState([]);
  const [customRates, setCustomRates] = useState({
    showerRate: 2.1,
    toiletRate: 3.5,
    washingRate: 30
  });

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('waterUsageHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const showerUsage = showerMinutes * customRates.showerRate;
    const toiletUsage = toiletFlushes * customRates.toiletRate;
    const washingUsage = washingLoads * customRates.washingRate;
    const total = showerUsage + toiletUsage + washingUsage;

    const newHistory = [...history, { showerMinutes, toiletFlushes, washingLoads, total }];
    setHistory(newHistory);
    localStorage.setItem('waterUsageHistory', JSON.stringify(newHistory));
    setTotalUsage(total.toFixed(2));
  };

  const chartData = {
    labels: ['Shower', 'Toilet', 'Washing Machine'],
    datasets: [{
      label: 'Water Usage',
      data: [
        showerMinutes * customRates.showerRate,
        toiletFlushes * customRates.toiletRate,
        washingLoads * customRates.washingRate
      ],
      backgroundColor: ['#4F9A94', '#81C784', '#FFB74D'],
      borderColor: ['#ffffff'],
      borderWidth: 1
    }]
  };

  const recommendedUsage = {
    shower: 50, // example recommended value
    toilet: 20, // example recommended value
    washing: 140 // example recommended value
  };

  const compareUsage = {
    shower: (showerMinutes * customRates.showerRate).toFixed(2),
    toilet: (toiletFlushes * customRates.toiletRate).toFixed(2),
    washing: (washingLoads * customRates.washingRate).toFixed(2)
  };

  const tips = [
    "Consider taking shorter showers to save water.",
    "Use a broom instead of a hose to clean driveways and sidewalks.",
    "Fix leaks and drips as soon as you notice them.",
    "Run your washing machine and dishwasher with full loads."
  ];

  return (
    <div className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">Water Usage Calculator</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="bg-teal-50 p-4 rounded-lg shadow-inner">
          <label className="block text-gray-700 mb-2 text-lg font-semibold">Minutes spent in the shower per day</label>
          <input
            type="number"
            value={showerMinutes}
            onChange={(e) => setShowerMinutes(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300 text-center"
            required
          />
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg shadow-inner">
          <label className="block text-gray-700 mb-2 text-lg font-semibold">Number of toilet flushes per day</label>
          <input
            type="number"
            value={toiletFlushes}
            onChange={(e) => setToiletFlushes(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300 text-center"
            required
          />
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg shadow-inner">
          <label className="block text-gray-700 mb-2 text-lg font-semibold">Number of washing machine loads per week</label>
          <input
            type="number"
            value={washingLoads}
            onChange={(e) => setWashingLoads(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-teal-300 text-center"
            required
          />
        </div>
        
        <button
          type="submit"
          className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition-colors col-span-1"
        >
          Calculate
        </button>
      </form>

      {totalUsage !== null && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-teal-600 text-center">Total Water Usage</h2>
          <p className="text-xl text-center">{totalUsage} gallons per day</p>
          <div className="mt-6 flex justify-center">
            <div className="w-80">
              <Pie data={chartData} />
            </div>
          </div>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">Usage Comparison</h2>
        <div className="bg-teal-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold">Shower Usage</h3>
          <p>Current: {compareUsage.shower} gallons</p>
          <p>Recommended: {recommendedUsage.shower} gallons</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg shadow-inner mt-4">
          <h3 className="text-lg font-semibold">Toilet Usage</h3>
          <p>Current: {compareUsage.toilet} gallons</p>
          <p>Recommended: {recommendedUsage.toilet} gallons</p>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg shadow-inner mt-4">
          <h3 className="text-lg font-semibold">Washing Machine Usage</h3>
          <p>Current: {compareUsage.washing} gallons</p>
          <p>Recommended: {recommendedUsage.washing} gallons</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">Water Saving Tips</h2>
        <ul className="list-disc pl-6">
          {tips.map((tip, index) => (
            <li key={index} className="mb-2">{tip}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">Usage History</h2>
        <ul className="list-disc pl-6">
          {history.map((entry, index) => (
            <li key={index} className="mb-2">
              Shower: {entry.showerMinutes} min, Toilet: {entry.toiletFlushes} flushes, Washing Machine: {entry.washingLoads} loads - Total: {entry.total} gallons
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WaterUsageCalculator;
