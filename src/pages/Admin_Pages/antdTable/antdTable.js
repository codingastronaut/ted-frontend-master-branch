import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import AntdTable from "src/components/Admin/AntdTable/AntdTable";

const data_attributes_table = [
  {
    id: 1,
    key: 1,
    name: "faraz zaidi",
    datatype: "int",
  },
  {
    id: 2,
    key: 2,
    name: "farhan 2",
    datatype: "float",
  },
  {
    id: 3,
    key: 3,
    name: "asad 3",
    datatype: "int",
  },
  {
    id: 4,
    key: 4,
    name: "faisal 4",
    datatype: "string",
  },
  {
    id: 5,
    key: 5,
    name: "noshad 5",
    datatype: "int",
  },
  {
    id: 6,
    key: 6,
    name: "ALi",
    datatype: "float",
  },
  {
    id: 7,
    key: 7,
    name: "ali zaidi 7",
    datatype: "string",
  },
  {
    id: 8,
    key: 8,
    name: "faraz abbas 8",
    datatype: "int",
  },
  {
    id: 9,
    key: 9,
    name: "farhan ahmed 9",
    datatype: "int",
  },
  {
    id: 10,
    key: 10,
    name: "sardar ali 10",
    datatype: "float",
  },
  {
    id: 11,
    key: 11,
    name: "tanveer",
    datatype: "int",
  },
  {
    id: 12,
    key: 12,
    name: "adil 2",
    datatype: "string",
  },
  {
    id: 13,
    key: 13,
    name: "hasnain 13",
    datatype: "int",
  },
  {
    id: 14,
    key: 14,
    name: "rehman 4",
    datatype: "int",
  },
  {
    id: 15,
    key: 15,
    name: "waleed 5",
    datatype: "int",
  },
];

function AntdTables() {
  return (
    <AdminLayout variant={VARIANTS.ONLYTOPLAYOUT2}>
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="1rem"
        boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
        overflow="hidden"
        flex="1 1 200px"
        padding="1rem"
      >
        <AntdTable phulu={data_attributes_table} />
      </Box>
    </AdminLayout>
  );
}
export default AntdTables;
