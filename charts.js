"use strict";
import { dataBase } from "./dataSet.js";
import { linspace } from "./linspace.js";

for (let i = 0; i <= dataBase.length; i++) {
  const xlabels = linspace(0, 2000, dataBase[i].size);
  const ylabels = dataBase[i].data;
  const data = {
    labels: xlabels,
    datasets: [
      {
        label: `${dataBase[i].channel} Channel Data`,
        backgroundColor: "#00B2B4",
        borderColor: "#00B2B4",
        data: ylabels,
        borderWidth: 1.2,
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
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(255, 255, 255)",
            font: {
              size: 20,
            },
          },
        },
      },
      layout: {
        padding: 50,
      },
      scales: {
        y: {
          min: Math.min.apply(null, ylabels),
          max: 10 + Math.max.apply(null, ylabels),
          title: {
            display: true,
            text: "Amplitud (µV)",
            color: "#FFFFFF",
          },
          ticks: {
            color: "#FFFFFF80",
            // Include a Hz sign in the ticks. I need to review the mesure. Should be: return value + " Hz";
            // callback: function (value, index, ticks) {
            //   return `${value} µV`;
            // },
          },
        },
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Time (ms)",
            color: "#FFFFFF",
          },
          ticks: {
            color: "#FFFFFF80",
          },
        },
      },
    },
  };

  const myChart = new Chart(
    document.getElementById(`myChartId${dataBase[i].id}`),
    config
  );
}
