import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Photo from '../components/Photo/ZhaoyangXia.jpg'
import Header from '../components/Header'


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  marginLeft:650,
  marginTop:200,
  },
  media: {
    height: 500,
  },
  paperContainer: {
    height: 200,
    width:'100%',
   backgroundImage: `url(${"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"})`
}
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.paperContainer}>
    <Header/>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Zhaoyang Xia
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone Number: 8485658272<br/>
            Email: zx70@scarletmail.rutgers.edu
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </div>
  );
}