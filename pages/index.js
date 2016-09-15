import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import "./index.css"

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <h1>首页</h1>
        <h2>Todo</h2>
        <p>活动 | 开源项目 | 教育 | 社区</p>
        <p><Link to={prefixLink("/about/")}>关于</Link></p>
      </div>
    )
  }
}
