import React from 'react';
import { Card, Button, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 250,
      marginTop: '5%',
      marginLeft: '5%',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    git: {
      color: "#333",
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
          <img src={process.env.PUBLIC_URL + 'logo192.png'} alt="react-project"/>
          <Typography variant="h5" component="h2">
            { props.title }
          </Typography>
          <Typography variant="body2" component="p">
            { props.content }
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.git} size="small" href="https://github.com/jacobjc2/react-web-app" target="blank">GITHUB</Button>
        </CardActions>
      </Card>
    );
  }