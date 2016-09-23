import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import ReactIconSVGSymbol from 'react-icon-svg-symbol'

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
        <div className="home-content home-projects">
          <div className="container home-projects-container">
            <div className="home-content-description">
              <h3>开源项目</h3>
              <h4>Golang Projects</h4>
              <p>优秀的 Go 开源项目。</p>
            </div>
            <div className="home-projects-list">
              <ul>
                <li className="home-project" onClick={this.handleExternalRedirect("http://beego.me/")}>
                  <p className="home-project-title">Beego</p>
                  <p className="home-project-description">A high-performance web framework.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>8184</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>2024</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/pingcap/tidb")}>
                  <p className="home-project-title">tidb</p>
                  <p className="home-project-description">A distributed NewSQL database.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>4713</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>597</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/flike/kingshard")}>
                  <p className="home-project-title">kingshard</p>
                  <p className="home-project-description">A high-performance MySQL proxy.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>2065</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>415</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/astaxie/bat")}>
                  <p className="home-project-title">bat</p>
                  <p className="home-project-description">Go implement CLI, cURL-like tool for humans.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>1371</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>127</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/Terry-Mao/goim")}>
                  <p className="home-project-title">goim</p>
                  <p className="home-project-description">A lightweight im server.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>1119</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>399</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/open-falcon/of-release")}>
                  <p className="home-project-title">Open-Falcon</p>
                  <p className="home-project-description">人性化的互联网企业级监控系统.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>623</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>178</span>
                  </p>
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
