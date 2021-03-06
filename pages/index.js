import React from "react"
import { Link } from "react-router"
import "whatwg-fetch"
import { Promise } from "es6-promise"
import { prefixLink } from "gatsby-helpers"
import ReactIconSVGSymbol from 'react-icon-svg-symbol'

export default class Index extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      repos: {
        beego: {
          id: "astaxie/beego"
        },
        tidb: {
          id: "pingcap/tidb"
        },
        kingshard: {
          id: "flike/kingshard"
        },
        harbor: {
          id: "vmware/harbor"
        },
        goim: {
          id: "Terry-Mao/goim"
        },
        open_falcon: {
          id: "open-falcon/falcon-plus"
        }
      }
    };
  }

  componentDidMount() {
    const { repos } = this.state;
    const repoArr = Object.keys(repos);

    Promise.all(repoArr.map(
      (repo) => (
        fetch(`https://api.github.com/repos/${repos[repo].id}`)
        .then((response) => (response.json()))
      )
    ))
    .then((results) => {
      const updatedRepos = {
        ...repos
      };
      results.map((res, index) => {
        let { stargazers_count, forks_count } = res;
        let repo = repoArr[index];
        updatedRepos[repo] = {
          ...repos[repo],
          stargazers_count,
          forks_count
        };
      });
      this.setState({
        repos: {
          ...updatedRepos
        }
      })
    })
    .catch((error) => console.log(error));
  }

  render () {
    const { repos } = this.state || {};
    return (
      <div className="home">
        <div className="home-hero-section">
          <div className="home-hero-section-content">
            <h2 className="home-hero-section-slogan">企业 · 高校 · 社区 · 开源，构建互动的 Go 生态链。</h2>
            <p className="home-hero-section-text">
              <Link to={prefixLink("/about/")}>了解更多 &raquo;</Link>
            </p>
          </div>
        </div>
        <div className="home-content home-meetups">
          <div className="container home-meetups-container">
            <div className="home-content-description">
              <div className="home-content-title">
                <h3>近期活动</h3>
                <h4>Golang Meetups</h4>
              </div>
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
              <div className="home-content-title">
                <h3>开源项目</h3>
                <h4>Golang Projects</h4>
              </div>
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
                    <span>{repos.beego.stargazers_count || "A lot"}</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.beego.forks_count || "A lot"}</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/pingcap/tidb")}>
                  <p className="home-project-title">tidb</p>
                  <p className="home-project-description">A distributed NewSQL database.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.tidb.stargazers_count || "A lot"}</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.tidb.forks_count || "A lot"}</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/flike/kingshard")}>
                  <p className="home-project-title">kingshard</p>
                  <p className="home-project-description">A high-performance MySQL proxy.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.kingshard.stargazers_count || "A lot"}</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.kingshard.forks_count || "A lot"}</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/vmware/harbor")}>
                  <p className="home-project-title">harbor</p>
                  <p className="home-project-description">An enterprise-class container registry server based on Docker Distribution.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.harbor.stargazers_count || "A lot"}</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.harbor.forks_count || "A lot"}</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/Terry-Mao/goim")}>
                  <p className="home-project-title">goim</p>
                  <p className="home-project-description">A lightweight im server.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.goim.stargazers_count || "A lot"}</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.goim.forks_count || "A lot"}</span>
                  </p>
                </li>
                <li className="home-project" onClick={this.handleExternalRedirect("https://github.com/open-falcon/falcon-plus")}>
                  <p className="home-project-title">Open-Falcon</p>
                  <p className="home-project-description">人性化的互联网企业级监控系统.</p>
                  <p className="home-project-meta">
                    <span className="icon icon-star">
                      <ReactIconSVGSymbol symbolId="icon-star" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.open_falcon.stargazers_count || "A lot"}</span>
                    <span className="icon icon-fork">
                      <ReactIconSVGSymbol symbolId="icon-fork" fileURL="/images/icons.svg" />
                    </span>
                    <span>{repos.open_falcon.forks_count || "A lot"}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-content home-sponsors">
          <div className="container home-sponsors-container">
            <div className="home-content-description">
              <div className="home-content-title">
                <h3>企业会员</h3>
                <h4>Enterprise Members</h4>
              </div>
            </div>
            <div className="home-sponsors-list">
              <ul>
                <li className="home-sponsor" onClick={this.handleExternalRedirect("http://www.hebzs.com/")}>
                  <img src="/images/pingcap.png" />
                </li>
                <li className="home-sponsor" onClick={this.handleExternalRedirect("https://www.daocloud.io/")}>
                  <img src="/images/daocloud.png" />
                </li>
                <li className="home-sponsor" onClick={this.handleExternalRedirect("http://www.primeton.com/")}>
                  <img src="/images/primeton.png" />
                </li>
                <li className="home-sponsor" onClick={this.handleExternalRedirect("http://www.qiniu.com/")}>
                  <img src="/images/qiniu.png" />
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
