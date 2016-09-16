import React from "react"
import Helmet from "react-helmet"
import { Container } from "react-responsive-grid"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
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
    const { location } = this.props;
    const { pathname } = location;
    console.log(pathname);
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": config.siteDescription},
            {"name": "keywords", "content": config.siteKeywords},
          ]}
        />
        <header className="app-header">
          <Container
            style={{
              maxWidth: 1140
            }}
          >
            <h1>
              <Link to={prefixLink("/")}>Golang Foundation</Link>
            </h1>
            <nav>
              <Link
                className={(pathname === "/") ? "active" : ""}
                to={prefixLink("/")}
              >
                首页
              </Link>
              <Link
                className={(pathname === "/events/") ? "active" : ""}
                to={prefixLink("/events/")}
              >
                活动
              </Link>
              <Link
                className={(pathname === "/opensource/") ? "active" : ""}
                to={prefixLink("/opensource/")}
              >
                开源项目
              </Link>
              <Link
                className={(pathname === "/about/") ? "active" : ""}
                to={prefixLink("/about/")}
              >
                关于
              </Link>
            </nav>
          </Container>
        </header>
        {(pathname === "/") && (
          <div className="home">
            <div className="home-hero-section">
              <p className="home-hero-section-text">Todo About Golang Foundation</p>
            </div>
          </div>
        )}
        <Container
          style={{
            maxWidth: 1140,
            paddingTop: 0,
            minHeight: "100%"
          }}
        >
          {this.props.children}
        </Container>
        <footer className="app-footer">
          <p>@ 2016 All Rights Reserved.</p>
        </footer>
      </div>
    )
  },
})
