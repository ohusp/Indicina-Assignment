import {useState} from "react";
import {Header, Loader, RepositoryList, UserList} from "../components";
import {useLocation} from "react-router-dom";
import {Card, CardContent, Container, Grid, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import useStyles from '../styles';

export const Results = () => {
  
  const search      = useLocation().search;
  const searchTerm  = new URLSearchParams(search).get('q');
  const [category, setCategory] = useState('')
  const [totalRepo, setTotalRepo] = useState(0)
  const [totalUser, setTotalUser] = useState(0)
  const [loading, setLoading] = useState(true)
  const classes = useStyles();
  const [display, setDisplay] = useState(classes.displayNone)

  

  const setRepoCount = (repoCount: number) => {
    setTotalRepo(repoCount);
    setCategory('repositories')
    setDisplay(classes.displayBlock)
    setLoading(false)
  }

  const setUserCount = (userCount: number) => {
    setTotalUser(userCount);
  }

  return (
    <>
      <Header />
      <main>
        <div className={classes.container}>
          {loading ?
            <Loader /> :
            ""
          }
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={4} className={classes.categoryGrid}>
                <Card>
                  <CardContent>
                    <List className={classes.category_list}>
                      <ListItem 
                        className={`${classes.item} ${category === 'repositories' ? classes.category_item : ''}`}  
                        onClick={() => setCategory('repositories')}
                      >
                        <ListItemText primary="Repositories" />
                        <Typography className={classes.count}>{totalRepo}</Typography>
                      </ListItem>
                      <ListItem
                        className={`${classes.item} ${category === 'users' ? classes.category_item : ''}`}  
                        onClick={() => setCategory('users')}
                      >
                        <ListItemText primary="Users" />
                        <Typography className={classes.count}>{totalUser}</Typography>
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <div className={display}>
                  {
                    category === 'repositories' || category === '' ?
                      <RepositoryList searchTerm={searchTerm} setRepoCount={setRepoCount}/> :
                    ""
                  }
                  {
                    category === 'users' || category === '' ?
                      <UserList searchTerm={searchTerm} setUserCount={setUserCount} /> :
                    ""
                  } 
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  )
}
