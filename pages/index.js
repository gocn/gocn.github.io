import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"

export default class Index extends React.Component {
  render () {
    return (
      <div className="home">
        <div className="home-hero-section">
          <div className="home-hero-section-content">
            <h2 className="home-hero-section-slogan">企业、高校、社区、开源，构建互动的 Go 生态链</h2>
            <p className="home-hero-section-text">
              <Link to={prefixLink("/about/")}>了解更多 &raquo;</Link>
            </p>
          </div>
        </div>
        <div className="home-content home-meetups">
          <div className="container home-meetups-container">
            <div className="home-content-description">
              <h3>近期活动</h3>
              <h4>Golang Meetups</h4>
              <p>Go 语言线下活动。</p>
            </div>
            <div className="home-meetups-gallery">
              <ul>
                <li className="home-meetup-shanghai" onClick={this.handleExternalRedirect("http://www.bagevent.com/event/161638")}>
                  <p>上海</p>
                  <time>2016-08-21</time>
                </li>
                <li className="home-meetup-shenzhen" onClick={this.handleExternalRedirect("http://www.bagevent.com/event/165514")}>
                  <p>深圳</p>
                  <time>2016-08-28</time>
                </li>
                <li className="home-meetup-beijing" onClick={this.handleExternalRedirect("http://www.bagevent.com/event/168370")}>
                  <p>北京</p>
                  <time>2016-09-24</time>
                </li>
                <li className="home-meetup-hangzhou" onClick={this.handleExternalRedirect("http://www.bagevent.com/event/191766")}>
                  <p>杭州</p>
                  <time>2016-10-15</time>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleExternalRedirect(link) {
    return (e) => {
      window.open(link);
    }
  }
}
