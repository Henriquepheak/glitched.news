import React from "react"

export default class extends React.Component {
  render() {
    const { indicators } = this.props
    return (
      <>
        <hr/>
        <h2>Trust indicators</h2>
        { indicators.positive.length > 0 && (
          <>
            <h4>Positive</h4>
            <ul>
            { indicators.positive.map((indicator, i) => (
              <li key={`positive-indicator-${indicator.text}`}>{indicator.text}</li>
            )) }
            </ul>
          </>
        )}
        { indicators.negative.length > 0 && (
          <>
            <h4>Negative</h4>
            <ul>
            { indicators.negative.map((indicator, i) => (
              <li key={`negative-indicator-${indicator.text}`}>{indicator.text}</li>
            )) }
            </ul>
          </>
          )}
      </>
    )
  }
}