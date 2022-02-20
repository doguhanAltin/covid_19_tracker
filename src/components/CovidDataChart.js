import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CovidDataChart() {
  const labels = ["Infected", "Recovered", "Deaths", "Active"];

  const datas = useSelector((state) => state.covidData.items);
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [datas.confirmed, datas.recovered, datas.deaths, datas.active],
        backgroundColor: ["lightskyblue", "lawngreen", "red", "khaki"],
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default CovidDataChart;
