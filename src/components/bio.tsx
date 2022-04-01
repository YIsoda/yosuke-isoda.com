/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
          <a href="https://orcid.org/0000-0003-4445-9908">
            <img alt="ORCID logo" src="ORCIDiD_iconvector.svg" width="16" height="16" />
            0000-0003-4445-9908</a> | <a href="https://scholar.google.com/citations?user=sdSMcuIAAAAJ">Google Scholar</a>
        </p>
        <p>
          A PhD student at <a href="https://www.scl.kyoto-u.ac.jp/~shimakgr/indexE.html">Advanced Solid State Chemistry Laboratory</a>, <a href="https://www.kuicr.kyoto-u.ac.jp/sites/icr/">Institute for Chemical Research</a>, Kyoto University.
        </p>
        <p>Master of Science in Kyoto University</p>
        <p>Interested in transition metal oxides and thin film.</p>
      </>}
    </div>
  )
}

export default Bio
