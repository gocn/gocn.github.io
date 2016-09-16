import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"

export default class Index extends React.Component {
  render () {
    return (
      <div className="home-content">
        <p>近期活动 | 开源项目 | 赞助商</p>
      </div>
    )
  }
}
