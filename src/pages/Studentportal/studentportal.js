import React from "react";
import Table from "src/components/Studentportal_Table";
import Box from "src/components/Box";
import Layout, { VARIANTS } from "src/components/layout";

function studentportal() {
  return (
    <Layout variant={VARIANTS.ONLYTOPLAYOUT2}>
      <Table />
    </Layout>
  );
}

export default studentportal;
