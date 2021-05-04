import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="bottom">
        <div className="social-div">
          <div className="soundcloud-icon">
            <iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fpulamusic&color=orange_white&size=48" style="width: 48px; height: 48px;"></iframe>
          </div>
        </div>
        <hr />
        <p>&copy; 2021 <a href="https://github.com/pulamusic" target="_blank" rel="noreferrer">pulamusic</a></p>
      </div>
    )
  }
}

export default Footer
