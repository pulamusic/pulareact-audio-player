import React, { Component } from 'react'

import SectionDiv from './SectionDiv'

class Main extends Component {
  render() {
    return (
      <div className="Main" id="main">
        <div className="Main-hero">
          <SectionDiv url={"#sections"} />

        </div>
      </div>
    )
  }
}

export default Main
