import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import {
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const linedata = [
  {
    name: "Page A",
    Total_Revenue: 40,
    registration: 60,
    amt: 2400,
  },
  {
    name: "Page B",
    Total_Revenue: 55,
    registration: 66,
    amt: 2210,
  },
  {
    name: "Page C",
    Total_Revenue: 120,
    registration: 98,
    amt: 2290,
  },
  {
    name: "Page D",
    Total_Revenue: 42,
    registration: 76,
    amt: 2000,
  },
  {
    name: "Page E",
    Total_Revenue: 88,
    registration: 140,
    amt: 2181,
  },
  {
    name: "Page F",
    Total_Revenue: 123,
    registration: 110,
    amt: 2500,
  },
  {
    name: "Page G",
    Total_Revenue: 125,
    registration: 42,
    amt: 2100,
  },
];

const Admin_Statistics_Overview = () => {
  return (
    <>
      <Box>
        <Typography
          color="black.highDark"
          variant={{ _: "h3", tabletL: "h3", mobile: "subheader1" }}
        >
          Statistics Overview
        </Typography>
      </Box>
      <ResponsiveContainer aspect={1.4} className="linechart">
        <LineChart
          width="100%"
          height={250}
          data={linedata}
          margin={{
            top: 22,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          padding={{
            bottom: 50,
          }}
        >
          <CartesianGrid />
          <YAxis interval={"preserveStartEnd"} />
          <Tooltip />
          <Legend verticalAlign="bottom" height={30} />

          <Line dataKey="registration" stroke="#82ca9d" />
          <Line dataKey="Total_Revenue" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default Admin_Statistics_Overview;
