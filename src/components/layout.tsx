import * as React from "react"
import { Link } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © 2022 {siteMetadata.author.name}. Built with
        {` `}
        <a href="https://www.gatsbyjs.com">
          Gatsby
        </a>. View history on <a href="https://github.com/YIsoda/yosuke-isoda.com">GitHub</a>
      </footer>
    </div>
  )
}

export default Layout
