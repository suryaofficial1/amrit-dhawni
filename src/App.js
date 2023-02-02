import React from 'react';
import NewFooter from "./components/Footer/NewFooter";
import Header from "./components/header/Header.js";
import Router from './Router';

const App = () => {
  return (
    <>
      <Header style={{marginTop:-20}}/>
        <Router />
      <NewFooter />
    </>
  )
}
export default App;