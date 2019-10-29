import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import "../styles/global.css"

const DigimonTemplate = ({ data }) => (
  <Layout>
    <Img fixed={data.strapiDigimon.digimon_image.childImageSharp.fixed} />
    <h1>{data.strapiDigimon.name}</h1>
  </Layout>
)

export default DigimonTemplate

export const query = graphql`
  query DigimonTemplate($id: String!) {
    strapiDigimon(id: {eq: $id}) {
      name
      digimon_image {
        childImageSharp {
          fixed(width: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`