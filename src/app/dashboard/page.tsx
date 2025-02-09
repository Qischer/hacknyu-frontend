import React from 'react';

import Link from "next/link"
import { TrendingUp, Activity, LineChart, Brain, PlayCircle, Sliders, AppWindowMacIcon } from 'lucide-react';

const GreetingDashboard = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Overlap Studies",
      description: "Explore moving averages, Bollinger Bands, and other overlap indicators to identify trends"
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-500" />,
      title: "Momentum Indicators",
      description: "Learn about RSI, MACD, and other momentum-based trading strategies"
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-500" />,
      title: "Pattern Recognition",
      description: "Discover chart patterns and their significance in trading decisions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ByOnePercent
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Interactive Algorithmic Trading Playground
        </p>
        
        {/* Main CTA Section */}

        <Link href="/dashboard/playground">
          <div className="mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to Start Trading?</h2>
            <p className="text-gray-100 mb-6">
              Select indicators, customize variables, and watch your algorithm in action
            </p>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-6 h-6" />
                <span>Learn by Doing</span>
              </div>
              <div className="flex items-center gap-2">
                <Sliders className="w-6 h-6" />
                <span>Full Control</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Getting Started Section */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Start Your Trading Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Choose from our selection of trading indicators and experiment with different variables 
            to understand how each parameter affects trading performance.
          </p>
          <Link href="/dashboard/playground">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Explore Indicators
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreetingDashboard;
