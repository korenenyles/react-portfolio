import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from './images/logo.png';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={logo}
                alt="avatar"
                style={{width: '500px',height: '300px', margin: 'auto'}}
                 />
            </div>

            <h2 style={{margin: 'auto',paddingTop: '2'}}>Koren Nyles</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #581845'}}/>
            <p>Full Stack Developer passionate about creating cutting-edge products that will make a difference. Strong work ethic and dedicated to quality assurance. Adept at working with teams or independently in fast-paced and remote settings. </p>
            <hr style={{borderTop: '3px solid #581845'}}/>
            <h5>Address</h5>
            <p>Upon Request</p>
            <h5>Phone</h5>
            <p>Upon Request</p>
            <h5>Email</h5>
            <p>korenenyles@gmail.com</p>
            <h5>Web</h5>
            <p>korennyles.com</p>
            <hr style={{borderTop: '3px solid #581845'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Kenzie Academy"
              schoolDegree="Full Stack Certificate"
               />

            <Education
              startYear={2017}
              endYear={2017}
              schoolName="Indiana University Kokomo"
              
              />

            <Education
              startYear={2013}
              endYear={2014}
              schoolName="Indiana University Purdue University Fort Wayne"
              
              />

            <Education
              startYear={2000}
              endYear={2013}
              schoolName="Emmanuel Christian School"
              schoolDegree="High School Degree"
              />



                
                <hr style={{borderTop: '3px solid #581845'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"September 2019"}
              endYear={"Current"}
              jobName="Independent Contractor for Kenzie Academy"
              jobDescription="Software Engineering Coach - Assisting students with assessments, and technical issues. Grading assessments and assisting facilitators with what they might need."
              />

              <Experience
                startYear={"May 2019"}
                endYear={"September 2019"}
                jobName="Kelly Connect - Apple Project"
                jobDescription="Customer service representative - assisting customers with all issues their IOS devices. Also pointing customers in the right direction if unable to mee their needs."
                />
              <hr style={{borderTop: '3px solid #581845'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS/Javascript"
                progress={85}
                />
                <Skills
                  skill="Python/Django/ReST"
                  progress={95}
                  />
                  <Skills
                    skill="React/Redux/Heroku"
                    progress={65}
                    />
                    <Skills
                      skill="Semantic UI/Bootstrap"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
