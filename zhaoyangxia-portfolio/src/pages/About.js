import React from 'react';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from '../components/Header'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import resume from '../components/Resume/ZhaoyangXiaResume.pdf'



const useStyles = makeStyles(theme=>({
  root: {
    textAlign:"center",
    marginTop: 200
  },
  resume:{
    textAlign:"center",

  },
  paperContainer: {
             height: 1000,
             width:'100%',
            backgroundImage: `url(${"https://apod.nasa.gov/apod/image/1112/IMG_1552ribeiro.jpg"})`
        }
}));
export default function About() {
    const classes = useStyles();

  return (
      
          <div className={classes.paperContainer}>
          <Header></Header>
          <div className={classes.root}>
          <Typography variant="h2" gutterBottom>
            I am Zhaoyang Xia
          </Typography>
          {/* <Avatar style={{justifyContent: 'center'}}> */}
          {/* <Link href="https://github.com/ZhaoyangXia0204" style={{ "textDecoration": "inherit", "color": "#FFF" }}> */}
          <GitHubIcon onClick={event =>  window.location.href='https://github.com/ZhaoyangXia0204'}/>
          {/* </Link> */}
{/* </Avatar> */}
{/* <Avatar style={{justifyContent: 'center'}}> */}
{/* <Link href="https://github.com/ZhaoyangXia0204" style={{ "textDecoration": "inherit", "color": "#FFF" }}> */}

  <LinkedInIcon onClick={event =>  window.location.href='https://github.com/ZhaoyangXia0204'}/>
  {/* </Link> */}
{/* </Avatar> */}
          

          </div>
          <div className={classes.resume}>
          <a href={resume} style={{ "textDecoration": "inherit" }}>Click here for my resume</a>

          </div>
      </div>
      
  )
}

