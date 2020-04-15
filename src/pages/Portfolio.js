import React from 'react';
import Header from '../components/Header'
import Project from '../components/Project'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>({
  root: {
    marginTop: 200
  },
//   buttons:{
//     //  justifyContent: 'center',
//      padding: "10px",
//      margin: "20px",
//   },
  paperContainer: {
             height: 200,
             width:'100%',
            backgroundImage: `url(${"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"})`
        }
}));


export default function Portfolio(){
  const classes = useStyles();

  return(
  <div className={classes.paperContainer}>
  <Header/>
  <div className={classes.root}>
  <Project />
  </div>
  </div>
  )
}