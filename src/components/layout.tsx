import * as React from "react"
import { Link } from "gatsby"
import { siteMetadata } from "../../gatsby-config"
import { LogoGithubIcon } from "@primer/octicons-react";
import { createTheme, Theme, ThemeProvider } from "@mui/material";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">Yosuke Isoda （磯田 洋介）</Link>
        {/* <Link to="/">{title}</Link> */}
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }
  const theme: Theme = createTheme({
    typography: {
      fontFamily: "inherit",
      button: {
        textTransform: "none",
        userSelect:"inherit"
      },
    },
    palette:{
      primary:{
        main:"#005b99",
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          <p>This work was partly supported by JST, the establishment of university fellowships towards
the creation of science technology innovation, Grant Number JPMJFS2123.</p>
          © 2022 {siteMetadata.author.name}. Built with
          {` `}
          <a href="https://www.gatsbyjs.com">
            Gatsby
          </a>. View history on <a href="https://github.com/YIsoda/yosuke-isoda.com">
            <LogoGithubIcon verticalAlign="text-bottom" size={22} />
          </a>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
