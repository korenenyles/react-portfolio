import React, { Component } from 'react';




class Landing extends Component {
  render() {
    return(
      <div className = "landing-container" style={{ overflowY: 'scroll'}}>
        
          
        
          
          <div className="banner-container">
            <h1 className='heading' style={{padding: "5px",margin:'15px',color: "#d89b17",fontSize: "100px"}}>Koren Nyles</h1>
            <div className="banner-text" style={{ margin: '12px', padding: '12px'}}>
              <h1 style={{textAlign: 'center',fontFamily: "'Bungee', cursive"}}>Software Engineer</h1>

                  <hr/>

              <p style={{color: "rgb(141, 26, 80)"}}>HTML/CSS | Bootstrap | JavaScript | Semantic UI | React | Redux | Heroku | Django | Git | ReST | PostgreSQL 
              </p>

              <div className="social-links" >

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/koren-nyles/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/korenenyles" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* GitLab */}
                <a href="https://gitlab.com/korenenyles" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-gitlab" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/KnovaNyles" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
        
              </div>
            </div>
        </div>
          
      </div>
    )
  }
}

export default Landing;
