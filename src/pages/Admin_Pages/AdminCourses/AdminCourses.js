import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_Courses_Table from "src/components/Admin/Admin_Courses_Table/Admin_Courses_Table";

function AdminCourses() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="admincourses"
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
        <Admin_Courses_Table />
      </Box>
    </AdminLayout>
  );
}
export default AdminCourses;
