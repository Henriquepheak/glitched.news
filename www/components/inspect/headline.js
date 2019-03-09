import React, { Fragment } from "react"

export default class extends React.Component {
  render() {
    const { content } = this.props
    return (
      <Fragment>
        <h1 style={{fontWeight: 600, fontSize: 24}}>
          <a target="_blank" href={content.url}>{content.title}</a>
        </h1>
        { content.image && <a target="_blank" href={content.url}><img src={content.image}/></a> }
        <p>
          <a target="_blank" href={content.url}>⧉ {content.url}</a>
        </p>
      </Fragment>
    )
  }
}