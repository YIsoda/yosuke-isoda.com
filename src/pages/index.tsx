import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

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

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={"Home"/*"All posts"*/} />
      <Bio />
      <li style={{ listStyle: `none` }}>
        <h2>Publications (Referred)</h2>
        <ol>
          <li>
            <span className="paperAuthor">Yosuke Isoda</span>, Daisuke Kan, Yumie Ogura, Takuya Majima, Takashi Tsuchiya, and Yuichi Shimakawa, &ldquo;Electrochemical control and protonation of the strontium iron oxide SrFeOy by using proton-conducting electrolyte&rdquo;, <i>Appl. Phys. Lett.</i> <b>120</b>, 091601 (2022) <a href="https://doi.org/10.1063/5.0083209">https://doi.org/10.1063/5.0083209</a> Published Online: 2022-03-01; freely available for 14 days after the online publication
          </li>
        </ol>
        <h2>Presentations </h2>
        <ol>
          <li><span className="paperAuthor">磯田 洋介</span>, 菅 大介, 島川 祐一, “プロトン伝導性電解質を利用したSrFeOxの電界制御 (Electric field control of SrFeOx by using proton conducting electrolyte)” <br />
            2021年第68回応⽤物理学会春季学術講演会，2021-03-16<br /><a href="https://confit.atlas.jp/guide/event/jsap2021s/subject/16p-Z33-9/advanced">https://confit.atlas.jp/guide/event/jsap2021s/subject/16p-Z33-9/advanced</a></li>
          
          <li>
            <span className="paperAuthor">磯田 洋介</span>, 菅 大介, 島川 祐一, “Nafionゲートを利用したSrFeOxの電界制御 (Electric field control of SrFeOx by Nafion gating)”<br></br>粉体粉末冶金協会2021年度春季大会（第127回講演大会） ，2021-06-01 &ndash; 2021-06-03<br />
            <a href="https://confit.atlas.jp/guide/event/jspm2021s/subject/1-VII-02/advanced">https://confit.atlas.jp/guide/event/jspm2021s/subject/1-VII-02/advanced</a>
          </li>
          <li>
            <span className="paperAuthor">磯田 洋介</span>, 菅 大介, 島川 祐一, “プロトン伝導性電解質を用いた遷移金属酸化物の電気化学的物性制御 (Electrochemical control of a transition metal oxide by using proton conducting electrolyte)”<br></br>
            2021年第82回応用物理学会秋季学術講演会，2021-09-11 <a href="https://confit.atlas.jp/guide/event/jsap2021a/subject/11a-N203-10/advanced">https://confit.atlas.jp/guide/event/jsap2021a/subject/11a-N203-10/advanced</a>
          </li>
        </ol>
        
      </li>
      <ol style={{ listStyle: `none` }}>
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
      </ol>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
