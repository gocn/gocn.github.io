import React from "react"
import Helmet from "react-helmet"
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
          <div className="container">
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
          </div>
        </header>
        {(pathname === "/") && (
          <div className="home">
            <div className="home-hero-section">
              <div className="home-hero-section-content">
                <h2 className="home-hero-section-slogan">About Golang Foundation</h2>
                <p className="home-hero-section-text">
                  <Link to={prefixLink("/about/")}>了解更多 &raquo;</Link>
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="container">
          {this.props.children}
        </div>
        <footer className="app-footer">
          <p>@ 2016 All Rights Reserved.</p>
        </footer>
      </div>
    )
  },
})
