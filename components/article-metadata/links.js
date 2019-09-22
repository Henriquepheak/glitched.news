import React from "react"
import Link from 'next/link'

export default class extends React.Component {
  render() {
    const { links } = this.props

    if (!links)
      return null

    return (
      <>
        <hr/>
        <h3>Links from this article</h3>
        <p>
          Found <strong>{links.length || 0}</strong> links from this page.
        </p>
        <ul>
        {links.links.map((link, i) => (
          <li key={`${link.url}`}>
            <Link
              href={{
                pathname: '/inspect',
                query: { url: link.url }
              }}
              as={`/inspect?url=${link.url}`}
            ><a rel='noreferrer'>{link.title || link.url}</a></Link>
            { link.domain && <small> – {' '}{link.domain}</small> }
          </li>
        ))}
        </ul>
      </>
    )
  }
}