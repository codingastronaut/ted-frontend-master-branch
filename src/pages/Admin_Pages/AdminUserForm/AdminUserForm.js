import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_User_Form from "src/components/Admin/Admin_User_Form/Admin_User_Form";

function AdminUserForm() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="adminuser"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box overflow="hidden" flex="1 1 200px">
        <Admin_User_Form />
      </Box>
    </AdminLayout>
  );
}
export default AdminUserForm;
