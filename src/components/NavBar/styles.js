import { makeStyles } from '@mui/styles';

const drawerwidth = 240;
export default makeStyles((theme) => ({
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            flexwrap: 'wrap',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerwidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerwidth,
    },
    linkButton: {
        '&:hover': {
            textDecoration: 'none',
            color: 'white !important',
        },
    },
}));
