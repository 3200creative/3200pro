import React from "react";
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import { Layout } from "c32-gatsby-theme-core"

const Errors = ({ errors }) => (
  <Layout>
    <GraphQLErrorList errors={errors} />
  </Layout>
);

export default Errors;
