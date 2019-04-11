import React, { Component } from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(wordpress_id: {eq:4}){
          items {
            wordpress_id
            order
            wordpress_parent
            title
            url
            attr
            target
            classes
            xfn
            description
            object_id
            object
            object_slug
            type
            type_label
          }
        }
      }
    `
    }
    render={data => (
      <nav>
        <ul>
          {data.wordpressWpApiMenusMenusItems.items.map((item, i) => {
            return <Link to={item.object_slug}>{item.title}</Link>
          })}
        </ul>
      </nav>
    )}
  />
)