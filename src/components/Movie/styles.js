import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    movie: {
        padding: '10px',
        },
    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '230px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
        },
        links: {
        textDecoration: 'none',
        alignItems: 'center',
        fontWeight: 'bolder',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '&:hover': {
            cursor: 'pointer',
        },
        },
        image: {
           height: '300px',
           borderRadius: '20px',
           marginBottom: '10px',
           '&:hover': {
           transform: 'scale(1.05)',
           },
        },
}));
