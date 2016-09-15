import React from "react"
import Helmet from "react-helmet"
import { Container } from "react-responsive-grid"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import Headroom from "react-headroom"
import { config } from "config"
import "../css/global"
import "../css/markdown-styles"

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": config.siteDescription},
            {"name": "keywords", "content": config.siteKeywords},
          ]}
        />
        <Headroom
          wrapperStyle={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 4,
            marginBottom: 40,
          }}
        >
          <Container
            style={{
              maxWidth: 1140,
              paddingTop: 0,
            }}
          >
            <Link
              to={prefixLink("/")}
              style={{
                color: "#1A2B34",
                opacity: 0.6,
                textDecoration: "none",
              }}
            >
              Golang Foundation
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 1140,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
