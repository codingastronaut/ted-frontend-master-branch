import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_Finance_Form from "src/components/Admin/Admin_Finance_Form/Admin_Finance_Form";

function AdminFinanceForm() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="adminfinance"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box overflow="hidden" flex="1 1 200px">
        <Admin_Finance_Form />
      </Box>
    </AdminLayout>
  );
}
export default AdminFinanceForm;
