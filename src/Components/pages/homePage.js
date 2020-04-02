import React, { Component } from 'react';


class HomePage extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="home-container">
          <div className="row">
            <div className="banner-img">
                <img src="https://csssaints.com/images/logos/msoe.png" alt="msoe-raiders"/>
            </div>
          </div>
          <div className="row">
            <div className="banner-text">
              <h1>
                Software Engineer
              </h1>
              <hr/>
              <p>
                HTML | C/C++ | Python | React | SQL | Agile 
              </p>
              <div className="social-links">
                {/* Github Icon  */}
                <a href="https://github.com/jacobjc2" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* LinkedIn Icon  */}
                <a href="https://www.linkedin.com/in/jacob-christensen-23a8b5134/" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* Facebook Icon  */}
                <a href="https://www.facebook.com/jacob.christensen.501?ref=bookmarks" rel="noopener noreferrer" target="_blank">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default HomePage;
