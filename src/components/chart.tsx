'use client'

import React, { useEffect, useRef } from 'react';
import { createChart, LineSeries } from 'lightweight-charts';

interface ChartData {
  time: string,
  value: number,
}

interface ChartComponentProps {
  data: ChartData[]
}

function ChartComponent({data}: ChartComponentProps){
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      // Create the chart
      const chart = createChart(chartContainerRef.current, {
        height: 400,
        layout: {
          background: { color: '#ffffff' },
          textColor: '#333',
        },
        grid: {
          vertLines: { color: '#f0f0f0' },
          horzLines: { color: '#f0f0f0' },
        },
      });
      
      // Create the line series
      const lineSeries = chart.addSeries( LineSeries, {
        color: '#2962FF',
        lineWidth: 2,
      });

      // Add sample data

      lineSeries.setData(data);

      // Fit content to container
      chart.timeScale().fitContent();

      // Store chart reference for cleanup
      chartRef.current = chart;
    }

    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div ref={chartContainerRef} className="w-full h-[400px]" />
    </div>
  );
};

export default ChartComponent;
