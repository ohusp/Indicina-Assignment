import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import useStyles from '../styles';

export const User = ({user}: any) => {

  const {node: {name, company, bio}} = user;
  
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContainer}>
          <div className={classes.titleDiv}>
            <Typography>
              <span className={classes.title}> {name}</span>
              <span className={classes.subTitle}> {company}</span>
            </Typography>
          </div>
          <Typography className={classes.description}>{bio}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
