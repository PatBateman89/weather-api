import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => (
  <div>
    { props.temperature && <p>Temperature: { props.temperature }</p> }
    <Bar
      height="400"
      width="400"
      options={{ maintainAspectRatio: false }}
    />
  </div>
)

export default Chart;
