import React from "react";
import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = () => {
  // state = {
  //     dailyData: {}
  // }
  // same with hooks:

  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = dailyData[0] ? (
    <Line data={{ labels: "", datasets: [{}, {}] }} />
  ) : null;

  return <h1>Cards</h1>;
};

export default Chart;
