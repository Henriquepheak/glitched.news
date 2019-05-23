import React from "react"

export default class extends React.Component {
  render() {
    const { topics } = this.props

    if (!topics)
      return null
      
    return (
      <>
        <hr/>
        <h3>Topics</h3>
        <p>
          Identified <strong>{topics.topics.length} topics</strong> and <strong>{topics.keywords.length} keywords</strong> that may be referenced in this article.
        </p>
        <ul>
        {topics.topics.map((topic, i) => (
          <li key={`topic-${i}`}>
            <p>
              <strong>{topic.name}</strong> {topic.count && (<> – <strong>{topic.count}</strong> possible references</>)}
              {topic.url && (
                <>
                  {' '}<br/><a target="_blank" href={topic.url}>⧉ Read about {topic.name} on Wikipedia</a>
                </>
              )}
            </p>
          </li>
        ))}
        </ul>
        <ul>
        {topics.keywords.map((keyword, i) => (
          <li key={`keyword-${i}`}>
            <p>
              <strong>{keyword.name}</strong> {keyword.count && (<>mentioned <strong>{keyword.count}</strong> times</>)}
              {keyword.url && (
                <>
                  {' '}<br/><a target="_blank" href={keyword.url}>⧉ Read about {keyword.name} on Wikipedia</a>
                </>
              )}
            </p>
          </li>
        ))}
        </ul>
      </>
    )
  }
}