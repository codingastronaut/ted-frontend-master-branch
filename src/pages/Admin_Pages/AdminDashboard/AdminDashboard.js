import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import styled from "styled-components";
import Typography from "../../../components/Typography/Typography";
import Box from "src/components/Box";
import { mediaQuery } from "src/utils/styles";
import Admin_Visit_Today from "src/components/Admin/Admin_Visit_Today/Admin_Visit_Today";
import Admin_Total_Applications from "src/components/Admin/Admin_Total_Applications/Admin_Total_Applications";
import Admin_Revenue_Breakdown from "src/components/Admin/Admin_Revenue_Breakdown/Admin_Revenue_Breakdown";
import Admin_Statistics_Overview from "src/components/Admin/Admin_Statistics_Overview";
import Admin_Revenue from "src/components/Admin/Admin_Revenue/Admin_Revenue";
import Admin_Activity from "src/components/Admin/Admin_Activity/Admin_Activity";
import { padding } from "styled-system";

function AdminDashboard() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="admindashboard"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box padding={{ mobile: "0 7px" }}>
        <Box display="flex" flexWrap="wrap" gridGap="1rem">
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="1rem"
            boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
            overflow="hidden"
            flex="1 1 200px"
            padding="1rem"
          >
            <Admin_Visit_Today />
          </Box>
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="1rem"
            boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
            overflow="hidden"
            flex="1 1 200px"
            padding="1rem"
          >
            <Admin_Total_Applications />
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" gridGap="1rem" mt="1rem">
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="1rem"
            boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
            overflow="hidden"
            flex="1 1 320px"
            padding="1rem"
          >
            <Admin_Revenue />
          </Box>
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="1rem"
            boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
            overflow="hidden"
            flex="1 1 320px"
            padding="1rem"
          >
            <Admin_Revenue_Breakdown />
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" gridGap="1rem" mt="1rem">
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="1rem"
            boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
            overflow="hidden"
            flex="4 1 320px"
            padding="1rem"
            minHeight="300px"
          >
            <Admin_Statistics_Overview />
          </Box>
          <Box
            backgroundColor="#FFFFFF"
            borderRadius="1rem"
            boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
            overflow="hidden"
            flex="1 1 320px"
            padding="1rem"
          >
            <Admin_Activity />
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
}
export default AdminDashboard;
