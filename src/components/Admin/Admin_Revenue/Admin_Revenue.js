import Box from "src/components/Box";
import Typography from "src/components/Typography";
import React, { useState } from "react";
import Admin_Tables from "../Admin_Tables/Admin_Tables";
import Admin_Tabs from "../Admin_Tabs/Admin_Tabs";

const Admin_Revenue = () => {
  return (
    <>
      <Box>
        <Admin_Tabs
          tabMenus={["by state", "by school"]}
          tabContents={[<Admin_Tables />, <Admin_Tables />]}
        />
      </Box>
    </>
  );
};
export default Admin_Revenue;
