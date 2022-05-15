"use strict";
import { dataBase } from "./dataSet.js"; // or './module'
import { linspace } from "./linspace"

// Chart id978111:
const id978111 = dataBase[0];
const xlabels = linspace(0, 2, id978111.size)
const ylabels = id978111.data;
const data = {
  labels: xlabels,
  datasets: [
    {
      label: `${id978111.channel} Channel Data`,
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "rgb(255, 255, 255)",
      color: "rgb(255, 255, 255)",
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
        max: 10 + Math.max.apply(null, ylabels),
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
