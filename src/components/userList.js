import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const User =(props)=>{
    return(
            <tr>
            <td>{props.users.firstname }</td>
            <td>{props.users.lastName }</td>
            <td>{ props.users.gender}</td>
            <td>{ props.users.hobbies }</td>
            <td>{ props.users.dob.substring(0,10) }</td>
            <td>
            <button style={{cursor:"pointer"}} className="btn btn-danger" onClick={()=>props.deleteExpense()}>Delete</button></td>
            </tr>
        )
}
class userList extends Component{
    constructor(props){
        super(props);

        this.state={
            users:[]
        }
    }
      //delete todo
  deleteUser =(id)=>{
    this.setState({
      users: [...this.state.users.filter(user =>
        user.id !== id)]
    })
  }
  addUser=(user)=>{ 
    let id = this.state.users.length + 1;
    const newUser={
      id,
      firstName:'',
      lastName:'',
      hobbies:'',
      age:'',
      gender:'',
      dob:new Date()
    }
    this.setState({users:[...this.state.users, newUser]});
}
    render(){
    return (
        <React.Fragment>
            <div className="container">
            <h1 className="text-center mt-40">List Of All Users</h1>
            <table className="table">
            <thead className="thead-light">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Age</th>
                        <th>Date Of Birth</th>
                        <th>Actions</th>
                    </tr>
            </thead>
                <tbody>
                {User}
                </tbody>
            </table>
            <Link to="/"><button type="button" className="btn btn-dark">Create new user +</button></Link>
        </div>
        </React.Fragment>
    )
    }
}

export default userList;