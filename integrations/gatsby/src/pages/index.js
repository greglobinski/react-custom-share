import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaGooglePlus from 'react-icons/lib/fa/google-plus'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaPinterest from 'react-icons/lib/fa/pinterest'
import FaLinkedin from 'react-icons/lib/fa/linkedin'

import { css } from 'emotion'

import { ShareButtonRectangle, ShareBlockStandard } from '../../../../src/'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    const customStyles = css`
      border-radius: 50% 0 50% 0;
      margin: 0 10px;
      flex-basis: 60px;
      height: 60px;
      flex-grow: 0;
    `

    const shareBlockProps = {
      url: 'https://mywebsite.com/page-to-share/',
      button: ShareButtonRectangle,
      buttons: [
        { network: 'Twitter', icon: FaTwitter },
        { network: 'Facebook', icon: FaFacebook },
        { network: 'GooglePlus', icon: FaGooglePlus },
        { network: 'Email', icon: FaEnvelope },
        {
          network: 'Pinterest',
          icon: FaPinterest,
          media: 'https://mywebsite.com/image-to-share.jpg',
        },
        { network: 'Linkedin', icon: FaLinkedin },
      ],
      text: `Give it a try - mywebsite.com `,
      longtext: `Take a look at this super website I have just found.`,
      buttonClassName: customStyles,
    }

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <ShareBlockStandard {...shareBlockProps} />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
