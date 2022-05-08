"use strict";
import { dataBase } from "./dataSet.js"; // or './module'

// Chart id978111:
const id978111 = dataBase[0];
const xlabels = Array.from({ length: id978111.size }, (v, k) => k + 1);
const ylabels = id978111.data;
const data = {
  labels: xlabels,
  datasets: [
    {
      label: `<h1>${id978111.channel} Channel Data</h1>`,
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgb(255, 255, 255)",
      data: ylabels,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    borderWidth: 0.9,
    pointBorderWidth: 0,
    pointRadius: 0,
    tension: 1,
    layout: {
      padding: 50,
    },
    scales: {
      y: {
        min: Math.min.apply(null, ylabels),
        max: Math.max.apply(null, ylabels),
        ticks: {
          // Include a Hz sign in the ticks. I need to review the mesure. Should be: return value + " Hz";
          callback: function (value, index, ticks) {
            return `${value} µV`;
          },
        },
      },
      x: {
        beginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChartId978111"), config);
