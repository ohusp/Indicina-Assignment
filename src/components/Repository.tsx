import {Card, CardContent, Typography} from '@mui/material';
import moment from 'moment';
import useStyles from '../styles';

export const Repository = ({repo}: any) => {
  const {node: {name, description, stargazers: {totalCount: totalStarCount}, primaryLanguage, licenseInfo, updatedAt}} = repo;
  
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContainer}>
          <div className={classes.titleDiv}>
            <Typography className={classes.title}>{name}</Typography>
          </div>
          <Typography className={classes.subTitle} color='textSecondary'>{description}</Typography>
          <Typography 
            color='textSecondary' 
            className={classes.description}
          >
            {totalStarCount} Stars | {primaryLanguage?.name} | {licenseInfo?.name} | Updated {moment(updatedAt).fromNow()}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
