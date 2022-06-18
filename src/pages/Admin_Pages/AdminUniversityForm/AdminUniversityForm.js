import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_University_Form from "src/components/Admin/Admin_University_Form/Admin_University_Form";

function AdminUniversityForm() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="adminuniversity"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box overflow="hidden" flex="1 1 200px">
        <Admin_University_Form />
      </Box>
    </AdminLayout>
  );
}
export default AdminUniversityForm;
