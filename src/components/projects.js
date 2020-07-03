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
        <div className="projects-grid">
          {/* javascript */}
          {/* Maze */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `images/maze.png center / cover`}} >Maze </CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/maze'><Button colored>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/maze '><Button colored>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `images/marvel.png center / cover`}} >Responsive Photo Gallery</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/responsivephotogallery'><Button colored>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/responsivephotogallery'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `images/sokban.png center / cover`}} >Sokoban</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenzieprojects/sokoban'><Button colored>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/sokoban '><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* react */}
          {/* Maze */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `images/githubcard.png center / cover`}} >Github Card </CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/github-card'><Button colored>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/github-card'><Button colored>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/todo.png center / cover'}} >ToDo App</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/todo-app-part3'><Button colored>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/todo-app-part3'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/subtracker.png center / cover'}} >Subscription Tracker</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenziequartertwoprojects/subscription-tracker/'><Button colored>Gitlab</Button></a>
              
              <a href='https://coryt87.gitlab.io/subscription-tracker/'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          {/* django */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/twitterclone.png center / cover'}} >TwitterClone </CardTitle>
            <CardText>
              Used Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/twitterclone'><Button colored>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto' }} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/bugtracker.png center / cover'}} >BugTracker</CardTitle>
            <CardText>
            Used Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/whats-up-doc'><Button colored>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/shoestore.jpg center / cover'}} >ShoeStore </CardTitle>
            <CardText>
              Used Django, Python, React, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/drf_shoestore_frontend'><Button colored>Frontend</Button></a>
              <a href='https://github.com/korenenyles/drf_shoestore_backend'><Button colored>Backend</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
          
    }
    else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* ALL */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/maze.png center / cover'}} >Maze </CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/maze'><Button colored>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/maze '><Button colored>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/marvel.png center / cover'}} >Responsive Photo Gallery</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenzieprojects/responsivephotogallery'><Button colored>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/responsivephotogallery'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} >
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/sokoban.png center / cover'}} >Sokoban</CardTitle>
            <CardText>
              Used HTML, CSS, and Javascript! 
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenzieprojects/sokoban'><Button colored>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/sokoban '><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/githubcard.png center / cover'}} >Github Card </CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/github-card'><Button colored>Gitlab</Button></a>
              <a href='https://kenzieprojects.gitlab.io/github-card'><Button colored>Live Demo</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* responsive photo gallery */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/todo.png center / cover'}} >ToDo App</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI! 
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/kenziequartertwoprojects/todo-app-part3'><Button colored>Gitlab</Button></a>
              
              <a href='https://kenzieprojects.gitlab.io/todo-app-part3'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/subtracker.png center / cover'}} >Subscription Tracker</CardTitle>
            <CardText>
              Used React, Redux, and Semantic UI!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/kenziequartertwoprojects/subscription-tracker/'><Button colored>Gitlab</Button></a>
              
              <a href='https://coryt87.gitlab.io/subscription-tracker/'><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/twitterclone.png center / cover'}} >TwitterClone </CardTitle>
            <CardText>
              Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/twitterclone'><Button colored>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/bugtracker.png center / cover'}} >BugTracker</CardTitle>
            <CardText>
            Django, Python, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/whats-up-doc'><Button colored>Github</Button></a>
              
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginBottom: '15px'}} className= 'card'>
            <CardTitle style={{color: '#fff', height: '176px', background: 'images/shoestore.jpg center / cover'}} >ShoeStore </CardTitle>
            <CardText>
            Django, Python, React, HTML, and some static CSS! 
            </CardText>
            <CardActions border>
              <a href='https://github.com/korenenyles/drf_shoestore_frontend'><Button colored>Frontend</Button></a>
              <a href='https://github.com/korenenyles/drf_shoestore_backend'><Button colored>Backend</Button></a>
              
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    
      
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Javascript</Tab>
          <Tab>React</Tab>
          <Tab>Django</Tab>
          <Tab>All</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
