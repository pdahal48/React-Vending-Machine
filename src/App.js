import React from 'react'
import VendingMachine from './VendingMachine'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Snacks from './Snacks'
import Button from '@material-ui/core/Button';
import Soda from './Soda';
import Cafe from './Cafe'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppBar >
        <ToolBar >
          <Link to = '/'><Button variant="contained" color="primary">Home</Button></Link>
          <Link to = '/snacks'><Button variant="contained" color="primary">Snacks</Button></Link>
          <Link to = '/coffee'><Button variant="contained" color="primary">Coffee</Button></Link>
          <Link to = '/Soda'><Button variant="contained" color="primary">Soda</Button></Link>
        </ToolBar>
        </AppBar>

        <Route exact path = '/'>
          <VendingMachine />
        </Route>
        <Route exact path = '/snacks'>
          <Snacks />
        </Route>
        <Route exact path = '/coffee'>
          <Cafe />
        </Route>
        <Route exact path = '/soda'>
          <Soda />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
