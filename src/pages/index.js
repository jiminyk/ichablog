import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import "../styles/global.css"

const IndexPage = ({ data }) => (
  <Layout>
    <ul className="container" >
      {data.allStrapiDigimon.edges.map(document => (
        <li key={document.node.id} className="item">
          <Img fixed={document.node.digimon_image.childImageSharp.fixed} />
          <h4>
            <Link to={`/${document.node.id}`}>{document.node.name}</Link>
          </h4>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiDigimon {
      edges {
        node {
          id
          name
          digimon_image {
            childImageSharp {
              fixed(width: 75, height: 75) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`