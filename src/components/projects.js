import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-container">
        <div className="projects-grid">
          {/* javascript */}
          {/* Maze */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}}>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/maze.png") center / cover`}} >Maze </CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/maze' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/maze ' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}}>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/responsivephoto.png") center / cover`}} >Responsive Photo Gallery</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/responsivephotogallery' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/responsivephotogallery' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}}>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/sokoban.png") center / cover`}} >Sokoban</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenzieprojects/sokoban' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/sokoban' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-container">
        <div className="projects-grid">
          {/* react */}
          {/* Maze */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}}>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/githubcard.png") center / cover`}} >Github Card </CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/github-card' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/github-card' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}}>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/todo.png") center / cover`}} >ToDo App</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/todo-app-part3' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/todo-app-part3' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}}>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/subtracker.png") center / cover`}} >Subscription Tracker</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenziequartertwoprojects/subscription-tracker/' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://coryt87.gitlab.io/subscription-tracker/' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        </div>

        
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-container">
        <div className='projects-grid'>
          {/* django */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/twitterclone.png") center / cover`}} >TwitterClone </CardTitle>
            <CardText>
              Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/twitterclone' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px' }} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/bugtracker.png") center / cover`}} >BugTracker</CardTitle>
            <CardText>
            Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/whats-up-doc' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/shoestore.jpg") center / cover`}} >ShoeStore </CardTitle>
            <CardText>
              Django, Python, React, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/drf_shoestore_frontend' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Frontend</Button></a>
              <a href='https://github.com/korenenyles/drf_shoestore_backend' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Backend</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        </div>
      )
          
    }
    else if(this.state.activeTab === 3) {
      return (

        <div className="projects-grid">
          {/* ALL */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/maze.png") center / cover`}} >Maze </CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/maze' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/maze' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/responsivephoto.png") center / cover`}} >Responsive Photo Gallery</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/responsivephotogallery' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/responsivephotogallery' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} >
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/sokoban.png") center / cover`}} >Sokoban</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenzieprojects/sokoban' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/sokoban' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/githubcard.png") center / cover`}} >Github Card </CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/github-card' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/github-card' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/todo.png") center / cover`}} >ToDo App</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/todo-app-part3' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/todo-app-part3' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/subtracker.png") center / cover`}} >Subscription Tracker</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenziequartertwoprojects/subscription-tracker/' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Gitlab</Button></a>
              
              <a href='https://coryt87.gitlab.io/subscription-tracker/' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', background: `url("public/images/twitterclone.png") center / cover`}}  >TwitterClone </CardTitle>
            <CardText>
              Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/twitterclone' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#808080', height: '176px', backgroundImage: 'url(process.env.PUBLIC_URL +"/images/bugtracker.png") center / cover'}} >BugTracker</CardTitle>
            <CardText>
          Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/whats-up-doc' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{fontFamily: "'Bungee', cursive", color: '#808080', height: '176px', background: `url(process.env.PUBLIC_URL +"/images/shoestore.jpg") center / cover`}} >ShoeStore </CardTitle>
            <CardText style={{fontFamily: "'Bungee', cursive"}}>
            Django, Python, React, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/drf_shoestore_frontend' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Frontend</Button></a>
              <a href='https://github.com/korenenyles/drf_shoestore_backend' rel="noopener noreferrer" target="_blank"><Button colored style={{fontFamily: "'Bungee', cursive"}}>Backend</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#808080', fontFamily: "'Bungee', cursive"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    
      
    }

  }



  render() {
    return(
      <div style={{backgroundColor: "#7a1015"}}>
        <Tabs style={{backgroundColor: "#7a1015"}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{fontFamily: "'Bungee', cursive"}}>Javascript</Tab>
          <Tab style={{fontFamily: "'Bungee', cursive"}}>React</Tab>
          <Tab style={{fontFamily: "'Bungee', cursive"}}>Django</Tab>
          <Tab style={{fontFamily: "'Bungee', cursive"}}>All</Tab>
          
        </Tabs>


          <Grid style={{backgroundColor: "#7a1015", fontFamily: "'Bungee', cursive"}}>
            <Cell col={12} style={{backgroundColor: "#7a1015"}}>
              <div className="projects-container">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
