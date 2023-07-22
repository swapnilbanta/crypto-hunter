import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import "./App.css";
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));
const App = () => {
  const classes = useStyles();

  return (
   <BrowserRouter>
   
   <div className={classes.App}>
    <Header/>
  <Routes>

  <Route path='/' Component={HomePage} exact></Route>
  <Route path='/coins/:id' Component={CoinPage}></Route>
  </Routes>
   
   
   </div>
   </BrowserRouter>
  )
}

export default App
