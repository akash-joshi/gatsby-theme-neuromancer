import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <span>
          <h1>
            {data.site.siteMetadata.title}
          </h1>
        </span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  )
}

export default Layout
