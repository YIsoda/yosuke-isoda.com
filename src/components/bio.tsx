/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, IconButton } from "@mui/material";
import { Twitter } from "@mui/icons-material";

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
        <p>博士（理学） / Ph. D. in Science</p>
        <p className="social-links">
          <Button href="https://orcid.org/0000-0003-4445-9908" target="_blank" rel="noopener noreferrer" startIcon={<img alt="ORCID logo" src="ORCIDiD_iconvector.svg" width="16" height="16" />}>
            0000-0003-4445-9908
          </Button>
          <Button href="https://scholar.google.com/citations?user=sdSMcuIAAAAJ" target="_blank" rel="noopener noreferrer" startIcon={<img src="Google_Scholar_logo.svg" alt="Google Scholar icon" width={16} />}>
            Google Scholar
          </Button>
          <Button href="https://www.webofscience.com/wos/author/record/AGR-5721-2022" target="_blank" rel="noopener noreferrer" startIcon={<img src="WoS.svg" alt="Web of Science ResearcherID Icon" width={16} />}>
            ResearcherID
          </Button>
          <Button href="https://researchmap.jp/yosuke-isoda" target="_blank" rel="noopener noreferrer">
            <img title='researchmap' alt='researchmap' src='https://researchmap.jp/outline/img/researchmap220.gif' height={24} />
          </Button>
          <IconButton href="https://twitter.com/yosuke_isoda" sx={{ minWidth: "0" }} target="_blank" rel="noopener noreferrer">
            <Twitter sx={{ color: "#1DA1F2" }} href="https://twitter.com/yosuke_isoda" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/yosuke-isoda" target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn Icon" src="In-Blue-Logo.png" height={24} />
          </IconButton>
        </p>
        <p>Mail: isoda.yosuke.84z@kyoto-u.jp</p>
        <p>
          (2022/04/01 - 2025/03/31) Ph. D. student at <a href="https://www.scl.kyoto-u.ac.jp/~shimakgr/indexE.html">Advanced Solid State Chemistry Laboratory</a>, <a href="https://www.kuicr.kyoto-u.ac.jp/sites/icr/">Institute for Chemical Research</a>, Kyoto University.
        </p>
        <p>日本学術振興会 特別研究員DC2 / JSPS Doctoral Course Research Fellowship (DC2) (2024/04/01-2025/03/31)</p>
        <p>Master of Science in Kyoto University</p>
        <p>Interested in transition metal oxides and thin film.</p>
      </>}
    </div>
  )
}

export default Bio
