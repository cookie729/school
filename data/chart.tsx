import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarData() {
  const graphData = {
    labels: [
      ['VueTechAcademy', '30,000円'],
      ['A社', '60,000円'],
      ['B社', '88,000円'],
      ['C社', '90,000円'],
    ],
    datasets: [
      {
        data: [30000, 60000, 88000, 90000],
        label: 'VueTechAcademyの費用',
        backgroundColor: [
          '#3FB27F',
          'rgba(30, 144, 255, 1)',
          'rgba(30, 144, 255, 1)',
          'rgba(30, 144, 255, 1)',
        ],
        borderWidth: [0],
      },
    ],
  };
  return (
    <Box w={{ base: '100%' }} mx={{ base: 'auto', lg: 8 }} >
      <Bar data={graphData} />
    </Box>
  );
}
