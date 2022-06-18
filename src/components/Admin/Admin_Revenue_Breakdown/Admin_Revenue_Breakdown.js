import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import ArrowIconRight from "src/components/atoms/icons/Arrowright";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const piedata = [
  { name: "Direct", value: 15 },
  { name: "Agent", value: 35 },
  { name: "Ad", value: 50 },
];
const COLORS = ["#576ACA", "#FB852F", "#19B690"];
const Admin_Revenue_Breakdown = () => {
  return (
    <>
      <Box>
        <Typography
          color="black.highDark"
          variant={{ _: "h3", tabletL: "h3", mobile: "subheader1" }}
        >
          Revenue Breakdown
        </Typography>
      </Box>
      <Box>
        <Typography
          color="black.highDark"
          variant={{
            tablet: "caption2",
            _: "caption2",
            mobile: "caption2",
          }}
        >
          Details
          <Typography as="span" ml="0.5rem">
            <ArrowIconRight />
          </Typography>
        </Typography>
      </Box>
      <ResponsiveContainer aspect={1.4} className="piechart-custom">
        <PieChart height={180}>
          <Legend verticalAlign="top" />
          <Tooltip />
          <Pie
            data={piedata}
            cx={180}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {piedata.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default Admin_Revenue_Breakdown;
