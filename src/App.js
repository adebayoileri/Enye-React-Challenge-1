import React ,{Component}from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Form from './components/userForm';
import userList from './components/userList';
import { BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component{
  render(){
  return (
    <React.Fragment>
    <Router>
    <Navbar />
    <Route exact path="/" component={Form}></Route>
    <Route path="/users" component={userList}></Route>
    </Router>
    </React.Fragment>
  );
}
}

export default App;
