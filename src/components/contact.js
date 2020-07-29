import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <div className="logo-img">
            <img
              src={process.env.PUBLIC_URL + "images/logo.png"}
              alt="avatar"
              style={{height: "300px"}}
               /> 
               </div>
            

          </Cell>
          <Cell col={6}>
            <h2 style={{textAlign: "center",color: 'white',fontFamily: "'Bungee', cursive"}}>Contact Me:</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', color: 'white',fontFamily: "'Bungee', cursive"}}>
                    <i style={{color: "white"}}className="fa fa-phone-square" aria-hidden="true"/>
                    <br/>
                    (765) 513-8108
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', color: 'white',fontFamily: "'Bungee', cursive"}}>
                    <i style={{color: "white"}}className="fa fa-linkedin-square" aria-hidden="true"/>
                    <br/>
                    <a href= 'https://www.linkedin.com/in/koren-nyles/'>Here</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '18px', color: 'white',fontFamily: "'Bungee', cursive"}}>
                    <i style={{color: "white"}} className="fa fa-envelope" aria-hidden="true"/>
                    <br/>
                    <a href="mailto:korenenyles@gmail.com">Email Me</a>
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
