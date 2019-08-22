import React from "react"

export default class extends React.Component {
  render() {
    const { testResults } = this.props
    //console.log('testResults', testResults)
    if (!testResults)
     return null

    return (
      <>
        <hr/>
        <h3>Structured Data</h3>
        <ol style={{listStyle: 'none'}}>
          <li>Checks Passed: { testResults.passed }</li>
          <li>Checks Failed: { testResults.failed }</li>
          <li>Warnings: { testResults.warnings }</li>
        </ol>
        {Object.keys(testResults.groups).map(group => {
          if (group === 'Metatags')
            return

          return (<>
            <h6>{group}</h6>
            <ul style={{listStyle: 'none'}}>
            { testResults.groups[group].passed.map(test => <TestResult key={JSON.stringify(test)} {...test} />) }
            { /* testResults.groups[group].info.map(test => <TestResult key={JSON.stringify(test)} {...test} />) */ }
            { testResults.groups[group].warnings.map(test => <TestResult key={JSON.stringify(test)} {...test} />) }
            { testResults.groups[group].failed.map(test => <TestResult key={JSON.stringify(test)} {...test} />) }
            </ul>
          </>)
        })}
      </>
    )
  }
}

class TestResult extends React.Component {
  render() {
    const { test, description, value, passed, warning, info } = this.props
    let icon = '✕'
    let className = 'test-fail'
    if (passed) {
      if (info) {
        icon = 'ⓘ'
        className = 'test-info'
      } else {
        icon = '✓'
        className = 'test-pass'
      }
    } else if (warning) {
      icon = '⚠'
      className = 'test-warn'
    }
    return(
      <li className={className}>
        <span className='test-summary'>
          <span className='icon'>{icon} </span>
          <span className='test-description'>{description || test}</span><br/>
        </span>
      </li>
    )
  }
}