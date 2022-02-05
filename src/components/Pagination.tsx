import useStyles from '../styles';

export const Pagination = ({pageDetails}: any) => {
    const classes = useStyles();
    return (
        <div>
            {pageDetails.currentPage > 1 ?
                <img 
                    className={classes.pgIconActive} 
                    src='../assets/back-active.svg' 
                    alt='prev'
                    onClick={() => pageDetails.paginate(pageDetails.currentPage - 1)} 
                    loading='lazy' 
                /> :
                <img 
                    className={classes.pgIconInactive} 
                    src='../assets/back-inactive.svg' 
                    alt='prev'
                    loading='lazy' 
                />
            }
            
            <span className={classes.paginationNumber}>
                
                { pageDetails.currentPage - 0 === 2 ?
                    <>
                        <span 
                            className={classes.inactivePage} 
                            onClick={() => pageDetails.paginate(pageDetails.currentPage - 1)}
                        >
                            { pageDetails.currentPage - 1}
                        </span>
                    </>
                    : ''
                }
                { pageDetails.currentPage - 0 >= 3 ?
                    <>
                        <span 
                            className={classes.inactivePage}
                            onClick={() => pageDetails.paginate(pageDetails.currentPage - 2)} 
                        >{ pageDetails.currentPage - 2}</span>
                        <span 
                            className={classes.inactivePage}
                            onClick={() => pageDetails.paginate(pageDetails.currentPage - 1)} 
                        >{ pageDetails.currentPage - 1}</span>
                    </>
                    : ''
                }

                <span 
                    className={classes.activePage}
                >{ pageDetails.currentPage }</span>

                { pageDetails.totalPages - pageDetails.currentPage === 1 ?
                    <>
                        <span 
                            className={classes.inactivePage}
                            onClick={() => pageDetails.paginate(pageDetails.currentPage + 1)} 
                        >{ pageDetails.currentPage + 1}</span>
                    </>
                    : ''
                }
                { pageDetails.totalPages - pageDetails.currentPage >= 2 ?
                    <>
                        <span 
                            className={classes.inactivePage}
                            onClick={() => pageDetails.paginate(pageDetails.currentPage + 1)} 
                        >{ pageDetails.currentPage + 1}</span>
                        <span 
                            className={classes.inactivePage}
                            onClick={() => pageDetails.paginate(pageDetails.currentPage + 2)} 
                        >{ pageDetails.currentPage + 2}</span>
                    </>
                    : ''
                }

            </span>
            { pageDetails.totalPages - pageDetails.currentPage === 1 || pageDetails.totalPages - pageDetails.currentPage >= 2 ?
                <img 
                    className={classes.pgIconActive} 
                    src='../assets/next-active.svg' 
                    onClick={() => pageDetails.paginate(pageDetails.currentPage + 1)} 
                    alt='next' 
                    loading='lazy' 
                /> : 
                <img 
                    className={classes.pgIconInactive} 
                    src='../assets/next-inactive.svg' 
                    alt='next' 
                    loading='lazy' 
                />
            }
        </div>
    )
}
