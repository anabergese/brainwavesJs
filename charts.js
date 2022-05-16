"use strict";
import { dataBase } from "./dataSet.js"; 
import { linspace } from "./linspace.js"



for (let i = 0; i <= dataBase.length; i++) {

    
    const xlabels = linspace(0, 2, dataBase[i].size);
    const ylabels = dataBase[i].data;
    const data = {
      labels: xlabels,
      datasets: [
        {
          label: `${dataBase[i].channel} Channel Data`,
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
    
    const myChart = new Chart(document.getElementById(`myChartId${dataBase[i].id}`), config);
   

}