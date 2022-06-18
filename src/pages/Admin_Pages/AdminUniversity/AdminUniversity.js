import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_University_Table from "src/components/Admin/Admin_University_Table/Admin_University_Table";

function AdminUniversity() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="adminuniversity"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="1rem"
        boxShadow="0px 4px 15px rgba(96, 119, 94, 0.09)"
        overflow="hidden"
        flex="1 1 200px"
        padding="1rem"
      >
        <Admin_University_Table />
      </Box>
    </AdminLayout>
  );
}
export default AdminUniversity;
