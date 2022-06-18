import React, { useEffect } from "react";
import AdminLayout, { VARIANTS } from "src/components/Admin/Admin_Layout";
import Box from "src/components/Box";
import Admin_Courses_Form from "src/components/Admin/Admin_Courses_Form/Admin_Courses_Form";

function AdminCoursesForm() {
  return (
    <AdminLayout
      loggedIn
      activeUrl="admincourses"
      variant={VARIANTS.ONLYTOPLAYOUT2}
    >
      <Box flex="1 1 200px">
        <Admin_Courses_Form />
      </Box>
    </AdminLayout>
  );
}
export default AdminCoursesForm;
