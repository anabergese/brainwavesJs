"use strict";
import { dataBase } from "./dataSet.js"; // or './module'
import { linspace } from "./linspace"

// Chart id978113:
const id978113 = dataBase[2];
const xlabels = linspace(0, 2, id978113.size)
const ylabels = id978113.data;
const data = {
  labels: xlabels,
  datasets: [
    {
      label: `${id978113.channel} Channel Data from ${id978113.device} device`,
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

const myChart = new Chart(document.getElementById("myChartId978113"), config);
