import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Form from './components/userForm';
import { BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar />
    <Route exact path="/">
    <h1 className="primary mb-30" style={{textAlign:"center"}}>Create a User</h1>
    <Form />
    </Route>
    <Route path="/users">

    </Route>
    </Router>
    </React.Fragment>
  );
}

export default App;
