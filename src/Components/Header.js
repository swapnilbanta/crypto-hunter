import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
const navigate  = useNavigate();

const {currency,setCurrency} =  CryptoState();
console.log(currency);
  return (
    <ThemeProvider  theme={darkTheme}>
   <AppBar color='transparent'  position='static'>
<Container>

  <Toolbar>
    <Typography  variant='h5' onClick={()=>  navigate('/')}  className={classes.title}>
      Crypto Hunter
    </Typography>

    <Select variant='outlined'  style={{
      width:100,
      height:49,
      marginRight:15,
    }}
    value={currency}
    onChange={(e)=>setCurrency(e.target.value)}
    
    >
      <MenuItem  value={'USD'}>USD</MenuItem>
      <MenuItem  value={'INR'}>INR</MenuItem>
    </Select>
  </Toolbar>
</Container>

   </AppBar>
   </ThemeProvider>
  )
}

export default Header