import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './images/logo.png';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', }}>
        <Grid className="landing-grid" style={{overflowY: 'scroll'}}>
          <Cell col={12}>
            <div className='container-logo'>
            <img 
              src={logo}
              alt="avatar"
              style={{width: '400px', height: '260px', marginBottom: '2px', margin: 'auto',}}
              className= "logo-img"
              />
              </div>

            <div className="banner-text" style={{marginTop: '2px'}}>
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | Semantic UI | React | Redux | Heroku | Django | Git | ReST | PostgreSQL 
          </p>

        <div className="social-links">

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
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
