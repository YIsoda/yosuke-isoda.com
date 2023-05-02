import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SimpleUrlText } from "../components/simpleUrlText"
import { PublicationItem } from "../components/publicationItem"

import { PresentationItems } from "../components/publicationItem";
import "bootstrap-icons/font/bootstrap-icons.css"
import { Button, Card, CardContent, Chip } from "@mui/material"
import ButtonGroup from "@mui/material/ButtonGroup"
import { lineHeight } from "@mui/system"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title={"Home"} />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  const FiletypePdfIcon = () => <span className="bi bi-filetype-pdf" style={{ color: "red", lineHeight: "0.0" }} />;
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"Home"/*"All posts"*/} />
      <Bio />
      <li style={{ listStyle: `none` }}>
        <h2>Publications (Refereed)</h2>
        <ol>
          <li>
            <PublicationItem
              titleContent={<>Orientation-dependent electrochemical reduction and proton evolution in the oxygen-deficient perovskite SrFeO<sub>2.5+<i>y</i></sub></>}
              authorsInEnglish={["Yosuke Isoda", "Daisuke Kan", "Takuya Majima", "Yuichi Shimakawa"]}
              journalAbbreviation="Appl. Phys. Express"
              volume="16"
              page="015506"
              year="2023"
              doi="10.35848/1882-0786/acac60"
              additionalInfo={<>Published: 2023-01-04<br />
                Selected as <a href="https://iopscience.iop.org/journal/1882-0786/page/Spotlights" >APEX Spotlights</a><br />
                <ButtonGroup>
                  <Button variant="contained" size="small"
                    href="https://iopscience.iop.org/article/10.35848/1882-0786/acac60" startIcon={<OpenInNewIcon />}>
                    View Free Article on IOPscience
                  </Button>
                  <Button variant="outlined" size="small"
                    href="https://iopscience.iop.org/article/10.35848/1882-0786/acac60/pdf" startIcon={<FiletypePdfIcon />}>
                    PDF
                  </Button>
                </ButtonGroup>
              </>}
            />
          </li>
          <li>
            <PublicationItem
              titleContent={<>Electrochemical control and protonation of the strontium iron oxide SrFeO<sub><i>y</i></sub> by using proton-conducting electrolyte</>}
              authorsInEnglish={["Yosuke Isoda", "Daisuke Kan", "Yumie Ogura", "Takuya Majima", "Takashi Tsuchiya", "Yuichi Shimakawa"]}
              journalAbbreviation="Appl. Phys. Lett."
              volume={120}
              page="091601"
              year={2022}
              doi="10.1063/5.0083209"
              additionalInfo={
                <>Published Online: 2022-03-01<br />
                  <ButtonGroup>
                    <Button variant="contained" size="small"
                      href="https://pubs.aip.org/aip/apl/article/120/9/091601/2833026" startIcon={<OpenInNewIcon />} >
                      View on pubs.aip.org
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outlined" size="small"
                      href="http://hdl.handle.net/2433/269148" startIcon={<OpenInNewIcon />} >Self-archive</Button>
                    <Button variant="outlined" size="small"
                      href="https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/269148/1/5.0083209_AM.pdf" startIcon={<FiletypePdfIcon />} >
                      PDF
                    </Button>
                  </ButtonGroup>
                </>}
            />
          </li>
        </ol>
        <h2>Presentations </h2>

        <PresentationItems citations={[
          ["isodaJSAP2021Spring", "isodaJSAP2021SpringEn"],
          ["isodaJSPMSpring2021", "", { dateRange: ["2021-06-01", "2021-06-03"] }],
          ["isodaJSAP2021Autumn", "isodaJSAP2021AutumnEn"],
          ["isodaCeramics2022", "isodaCeramics2022En", { urlType: "topPageOnly" }],
          ["isodaJSAP2023Spring", "",{additionalElement:<Chip color="success" label="New!" size="small"/>}],
        ]} />
      </li>
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
      site {
      siteMetadata {
      title
    }
    }
  }
    `
