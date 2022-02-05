import { useState } from "react";
import {useQuery} from "@apollo/client";
import {Typography, CircularProgress} from "@mui/material";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS} from "../api/queries";
import {Repository} from "./Repository";
import useStyles from "../styles";
import { Pagination } from "./Pagination";

export const RepositoryList = (props: any) => {
  const classes = useStyles();
  const searchTerm = props.searchTerm;
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const {data, loading, error, fetchMore} = useQuery(SEARCH_FOR_REPOS,
    {variables: {searchTerm: debouncedSearchTerm, after: null}}
  );

  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
        color={'error'}
      >
        An error occured!
      </Typography>
    )
  }

  if (!data.search.repositoryCount) {
    return (
      <Typography
        variant={'overline'}
        className={classes.note}
        component={'div'}
      >
        There are no such repositories!
      </Typography>
    )
  }

  // Add coma to repository count
  let repoCount = (Math.round( ( data.search.repositoryCount + Number.EPSILON ) * 100 ) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  setTimeout(() => { props.setRepoCount(repoCount) }, 200);
  const total = data.search.edges;

  const paginate = (page: number) => {
    setCurrentPage(page)
    if(page * 10 > total.length) {
      // use endCursor to fetch more data
      const {endCursor} = data.search.pageInfo
      fetchMore({
        variables: {after: endCursor},
        updateQuery:  (prevResult: any, {fetchMoreResult}: any) => {
          fetchMoreResult.search.edges = [
            ...prevResult.search.edges, ...fetchMoreResult.search.edges
          ];
          return fetchMoreResult;
        }
      })
    }
  }

  const pageDetails = {
    currentPage: currentPage,
    pageSize: 10,
    totalPages: (data.search.repositoryCount)/10,
    totalCount: data.search.repositoryCount,
    prev_page: currentPage - 1,
    next_page: currentPage + 1,
    paginate: paginate
  }

  const displayList = total.slice((currentPage -1) * 10, (currentPage * 10));
  
  return (
    <>
      <div>
        <Typography className={classes.qCount}>{repoCount} repository results</Typography>
        {displayList.map((repo: any, i: number) => (
          <Repository repo={repo} key={i} />
        ))}
      </div>
      <div className={classes.paginationDiv}>
        <Pagination pageDetails={ pageDetails } />
      </div>
    </>
  );

};
