import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
      backgroundColor:'#f44336',
    margin:30,
    minWidth: 275,
    padding:30
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
            DonorSpot
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          {/* well meaning and kindly.
          <br />
          {'"a benevolent smile"'} */}
          This full-stack web application will allow users to find charities that they wish to donate to. In addition, users can create an account and create a charity/raise funds for a particuluar cause.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://mighty-stream-41185.herokuapp.com/" size="small">Try it</Button>
      </CardActions>
    </Card>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
            ECommerce
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          {/* well meaning and kindly.
          <br />
          {'"a benevolent smile"'} */}
          Project 3
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="https://ecommerce-bootcamp.herokuapp.com/" size="small">Try it</Button>
      </CardActions>
    </Card>
    </div>
  );
}




// function Projects() {
//     return (
//         <div className="projects">
//             <Card className="text-center" style={{ width: '40rem' }}>
//                 <div class="card-body">
//                     <Card.Title>Personal-dashboard</Card.Title>
//                     <Card.Body>Personal Dashboard is a user specific home page designed to simplify and condense all relevant information for the day onto one page. With news, weather, stock market data, live traffic maps, a scheduler and links to facebook, twitter, github, linkedIn and google plus. this is a one stop HUD for your browser.</Card.Body>
//                     <Card.Link href="https://github.com/ZhaoyangXia0204/personal-dashboard">Github Link</Card.Link>
//                 </div>
//             </Card>
//             <Card className="text-center" style={{ width: '40rem' }}>
//                 <div class="card-body">
//                     <Card.Title>DonorSpot</Card.Title>
//                     <Card.Body>This full-stack web application will allow users to find charities that they wish to donate to. In addition, users can create an account and create a charity/raise funds for a particuluar cause.</Card.Body>
//                     <Card.Link href="https://github.com/ZhaoyangXia0204/DonorSpot">Github Link</Card.Link>
//                     <Card.Link href="https://mighty-stream-41185.herokuapp.com/">Heroku App</Card.Link>
//                 </div>
//             </Card>
//             <Card className="text-center" style={{ width: '40rem' }}>
//                 <div class="card-body">
//                     <Card.Title>ECommerce</Card.Title>
//                     <Card.Body>project3</Card.Body>
//                     <Card.Link href="https://github.com/Anierva95/ECommerce_WebApp">Github Link</Card.Link>
//                     <Card.Link href="https://ecommerce-bootcamp.herokuapp.com/">Heroku App</Card.Link>
//                 </div>
//             </Card>
//         </div>
//     )
// }



