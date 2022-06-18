import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_Roles_Form from "src/components/Admin/Admin_Roles_Form/Admin_Roles_Form";

function AdminRolesForm() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="adminroles"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box overflow="hidden" flex="1 1 200px">
        <Admin_Roles_Form />
      </Box>
    </AdminLayout>
  );
}
export default AdminRolesForm;
