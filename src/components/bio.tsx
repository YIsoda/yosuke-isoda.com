/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Divider } from "@mui/material";
import { OpenInNew, Twitter } from "@mui/icons-material";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">


      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
      {<>
        <p className="social-links">
          <Button href="https://orcid.org/0000-0003-4445-9908" target="_blank" rel="noopener noreferrer" startIcon={<OpenInNew />}>
            <img alt="ORCID logo" src="ORCIDiD_iconvector.svg" width="16" height="16" />0000-0003-4445-9908
          </Button>
          <Button href="https://scholar.google.com/citations?user=sdSMcuIAAAAJ" target="_blank" rel="noopener noreferrer" startIcon={<OpenInNew />}>
            Google Scholar
          </Button>
          <Button href="https://www.webofscience.com/wos/author/record/AGR-5721-2022" target="_blank" rel="noopener noreferrer" startIcon={<OpenInNew />}>
            ResearcherID
          </Button>
          <Button href="https://twitter.com/yosuke_isoda" sx={{ minWidth: "0" }}><Twitter sx={{ color: "#1DA1F2" }} href="https://twitter.com/yosuke_isoda" /></Button>

        </p>
        <p>Mail: isoda.yosuke.84z{"["}at]st.kyoto-u.ac.jp</p>
        <p>
          PhD student at <a href="https://www.scl.kyoto-u.ac.jp/~shimakgr/indexE.html">Advanced Solid State Chemistry Laboratory</a>, <a href="https://www.kuicr.kyoto-u.ac.jp/sites/icr/">Institute for Chemical Research</a>, Kyoto University.
        </p>
        <p>Master of Science in Kyoto University</p>
        <p>Interested in transition metal oxides and thin film.</p>
      </>}
    </div>
  )
}

export default Bio
