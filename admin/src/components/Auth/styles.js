import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: '64px',//theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',//theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: '8px',//theme.spacing(1),
    },
  },
  avatar: {
    margin: '8px',//theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '24px',//theme.spacing(3),
  },
  submit: {
    margin: '24px 0px 16px',//theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: '16px',//theme.spacing(2),
  },
}));
