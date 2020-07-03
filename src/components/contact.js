import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import logo from './images/logo.png';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            
            <img
              src={logo}
              alt="avatar"
              style={{height: '350px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am Soon to be Full Stack Developer in July 2020. I have been Front End Certified, and I absolutely love it. I am a determined, self starter, and independent worker. I will accomplish whatever I can, even if the skill is not in my wheel house, I will try to find the solution and if I can't find the solution myself, I will find someone to assist with the project who can! I didn't know that my creativity could be translated into code until I found Kenzie Academy and now I'm so thankful I did. Please contact me with any questions that you may have or any opportunities that might be available.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (765) 513-8108
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a href= 'https://www.linkedin.com/in/koren-nyles/'>Here</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    korenenyles@gmail.com
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
