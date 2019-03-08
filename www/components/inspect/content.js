import React, { Fragment } from "react"

export default class extends React.Component {
  render() {
    const { content } = this.props
    return (
      <Fragment>
        <hr/>
        <h3>About article</h3>
        <ul>
        { content.publisher && (
          <li>
            Published by <strong>{content.publisher}</strong>
          </li>
        ) }
        { content.author && content.author != '' && content.author != 0 && (
          <li>
            Byline is credited to <strong>{content.author}</strong>
          </li>
        ) }
        { content.date && (
          <li>
            Published on <strong>{content.date}</strong>
          </li>
        ) }
        { content.copyright && (
          <li>
            Copyright <strong>{content.copyright}</strong>
          </li>
        ) }
        </ul>
      </Fragment>
    )
  }
}