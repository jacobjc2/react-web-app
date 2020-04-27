import React from 'react';
import { Card, Button, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 250,
      height: 330,
      marginTop: '5%',
      marginLeft: '5%',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      maxHeight: 30,
    },
    pic: {

    },
    git: {
      alignSelf: "end",
      '&:hover': {
        backgroundColor: "#e6e6e6",
        color: "#333",
      },
    },
  });
  
  export default function ProjectCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <img className={classes.pic} src={process.env.PUBLIC_URL + props.img} alt="project-img"/>
          <Typography variant="h5" component="h2">
            { props.title }
          </Typography>
          <Typography className={classes.pos} variant="body2" component="p">
            { props.content }
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.git} size="small" href={props.link} target="blank">GITHUB</Button>
        </CardActions>
      </Card>
    );
  }