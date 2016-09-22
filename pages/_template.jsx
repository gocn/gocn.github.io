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
                className={(pathname === "/about/") ? "active" : ""}
                to={prefixLink("/about/")}
              >
                关于
              </Link>
            </nav>
          </div>
        </header>
        {this.props.children}
        <footer className="app-footer">
          <p>@ 2016 Powered by <a target="_blank" href="https://github.com/gocn/gocn.github.io">GitHub Pages</a>. All Rights Reserved.</p>
        </footer>
      </div>
    )
  },
})
