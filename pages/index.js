import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"

export default class Index extends React.Component {
  render () {
    return (
      <div className="home">
        <div className="home-hero-section">
          <div className="home-hero-section-content">
            <h2 className="home-hero-section-slogan">About Golang Foundation</h2>
            <p className="home-hero-section-text">
              <Link to={prefixLink("/about/")}>了解更多 &raquo;</Link>
            </p>
          </div>
        </div>
        <div className="home-content">
          <p>近期活动 | 开源项目 | 赞助商</p>
        </div>
      </div>
    )
  }
}
