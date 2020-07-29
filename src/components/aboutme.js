import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className="container">
        <img src={process.env.PUBLIC_URL + '/images/headshot.jpg'}
          alt="avatar"
          style={{}}
          className="headshot"
        />
        <div className="content">
        
        <h1 style={{color: "white", fontFamily: "'Bungee', cursive"}}>About Me:</h1>
        <p className="aboutme-para"> I found Software Engineering as a saving grace. I had no clue what to really do with myself after discovering teaching was not in my niche. I knew that creativity was the one thing I enjoyed.
        I had previously dabbled in HTML, and some designing of blogs and websites, but I couldn't become a coder on my own -- so I thought. My husband found Kenzie Academy, and I have completed my certification in Full Stack Web Development,
        and I'm continuing my learning every single day. Gaining as much knowledge as I can along the way. I know that breaking into tech can be tough, but I am a determined, hard-working, and motivated. To get to know more please contact me,
        I am happy to design, create and help you any way I can. 
        <br/>
        - Koren Nyles

        </p>
        </div>
      </div>
    )
  }
}

export default About;
