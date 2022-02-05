import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    loginBtn: {
        background: '#5C5C5C',
        borderRadius: '5px',
        color: '#ffffff',
        width: '179px',
        height: '50px',
        textTransform: 'none',
        fontWeight: 700,
        justifyContent: 'center',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',

        "&:hover": {
            background: "#e0e0e0"
        }
    },
    loginDiv: {
        justifyContent: 'center',
        marginTop: '25% !important'
    },
    container: {
        backgroundColor: '#f5f5f591',
        paddingTop: '100px'
    },
    categoryList: {
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'background.paper'
    },
    categoryItem: {
        background: '#F7F7F8'
    },
    categoryGrid: {
        marginTop: '1rem'
    },
    count: {
        padding: '2px 5px',
        background: '#DCDCDF',
        borderRadius: '10px',
        fontSize: '11px'
    },
    item: {
        cursor: 'pointer'
    },
    searchContainer: {
        marginTop: '12%',
        textAlign: 'center'
    },
    searchBtn: {
        background: '#5C5C5C !important',
        borderRadius: '5px',
        color: '#ffffff !important',
        width: '179px',
        height: '40px',
        textTransform: 'none !important' as 'none',
        fontWeight: 700,
        justifyContent: 'center',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',

        "&:hover": {
            background: "#e0e0e0 !important"
        }
    },
    searchBtnDiv: {
        marginTop: '35px'
    },
    root: {
        marginTop: '1rem'
    },
    cardContainer: {
        flexDirection: 'column',
    },
    titleDiv: {
        marginBottom: '5px'
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '21px',
        color: '#000000',
        marginBottom: '0.5rem',
        marginRight: '5px'
    },
    subTitle: {
        marginBottom: '1rem',
        fontSize: '14px',
        color: '#91929E'
    },
    description: {
        fontSize: '12px',
        color: '#91929E'
    },
    note: {
        marginTop: '1rem',
        textAlign: 'center',
    },
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '1rem'
    },
    qCount: {
        fontSize: '20px !important',
        fontWeight: 'bold !important' as 'bold',
        lineHeight: '30px',
        marginTop: '1rem'
    },
    input: {
        width: '100%',
        [`& fieldset`]: {
          borderRadius: '100px',
        },
    },
    icon: {
        color: '#5C5C5C',
        fontSize: '30px'
    },
    displayNone: {
        display: 'none'
    },
    displayBlock: {
        display: 'block'
    },
    appBar: {
        position: 'relative',
        height: '70px',
        top: '0px',
        background: '#FFFFFF !important',
        boxShadow: '0px 0px 5px rgba(196, 203, 214, 0.7)'
    },
    toolBar: {
        justifyContent: 'space-between'
    },
    logo: {
        height: '50px',
        width: 'auto'
    },
    appBarSearchInput: {
        width: '380px',
        [`& fieldset`]: {
          borderRadius: '100px'
        },
    },
    appBarSearchIcon: {
        cursor: 'pointer'
    },
    headerProfile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    vector: {
        height: '5px',
        width: 'auto'
    },
    headerUsername: {
        margin: '0px 10px !important',
        color: '#000000'
    },
    paginationDiv: {
        float: 'right',
        margin: '50px 0px 100px 0px'
    },
    pgIconActive: {
        verticalAlign: 'middle',
        cursor: 'pointer',
        height: '40px',
        width: '40px'
    },
    pgIconInactive: {
        verticalAlign: 'middle',
        height: '40px',
        width: '40px'
    },
    paginationNumber: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '26px',
        letterSpacing: '0.0115em',
        color: '#B0B7C3',
        marginLeft: '20px'
    },
    inactivePage: {
        marginRight: '15px',
        cursor: 'pointer'
    },
    activePage: {
        color: '#000000',
        marginRight: '15px'
    },
    loader: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export default useStyles;