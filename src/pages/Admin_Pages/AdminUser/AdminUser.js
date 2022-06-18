import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_User_Table from "src/components/Admin/Admin_User_Table/Admin_User_Table";

function AdminUser() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="adminuser"
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
        <Admin_User_Table />
      </Box>
    </AdminLayout>
  );
}
export default AdminUser;
