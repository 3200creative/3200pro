/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import { SEO, Layout } from "c32-gatsby-theme-core"
import GraphQLErrorList from 'c32-gatsby-theme-core/src/components/graphql-error-lists'
import Container from 'c32-gatsby-theme-core/src/components/container'
import BlockContent from './block-content'
const ServiceTemplate = props => {
    // const { data, errors } = props
    // const service = data && data.service
    // console.log('data:');
    // console.log(data);
    
    return (
      <Layout>
        {/* {errors && <SEO title='GraphQL Error' />}
        {service && <SEO title={service.title} />}
        <Container>
            {errors && (
                <GraphQLErrorList errors={errors} />
            )}
        </Container>
            {service && <Styled.h1>{service.title}</Styled.h1>}
        {service._rawBlockContent && <BlockContent blocks={service._rawBlockContent} />} */}
        </Layout>
  )
}

export default ServiceTemplate

// export const query = graphql`
//   query serviceQuery($id: String!) {    
//     service: sanityServices(id: { eq: $id }) {
//         id
//         title
//         slug {
//             current
//         }
//         _rawBlockContent
//   }
//   }
// `