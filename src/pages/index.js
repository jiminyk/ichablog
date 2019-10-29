import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import "../styles/global.css"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiDigimon.edges.map(document => (
        <li key={document.node.id}>
          <Img fixed={document.node.digimon_image.childImageSharp.fixed} />
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.name}</Link>
          </h2>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiDigimon(
      sort: {
        fields: [id]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          name
          digimon_image {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`