import React, { PureComponent } from "react";
import "../Assets/Styles/Chart.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    Mois: "Jan",
    Y: 4000,
  },
  {
    Mois: "Feb",
    Y: 3000,
  },
  {
    Mois: "Mar",
    Y: 2000,
  },
  {
    Mois: "Apr",
    Y: 2780,
  },
  {
    Mois: "May",
    Y: 1890,
  },
  {
    Mois: "Jun",
    Y: 2390,
  },
  {
    Mois: "Jul",
    Y: 3490,
  },
  {
    Mois: "Aug",
    Y: 2390,
  },
  {
    Mois: "Sep",
    Y: 2390,
  },
  {
    Mois: "Oct",
    Y: 2390,
  },
  {
    Mois: "Dec",
    Y: 2390,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
       
        
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Mois" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Y"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
   
      
    );
  }
}
