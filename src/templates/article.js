import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 

const PostTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiPost.Title}</h1>
    <p>{data.strapiPost.Article}</p>
  </Layout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
        Title
        Article
    }
  }
`