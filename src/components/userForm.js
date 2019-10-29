import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'

export class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'',
      firstName:'',
      lastName:'',
      hobbies:'',
      age:'',
      gender:'',
      dob:new Date()
    }
  }
    onChange=(e)=>{
      this.setState({
        [e.target.id]: e.target.value
      });
    }

    onChangeDate=(date)=>{ 
      this.setState({
          dob: date
      });
  }
    onSubmit=(e)=>{
      e.preventDefault();
        const user={
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          hobbies:this.state.hobbies,
          age:this.state.age,
          gender:this.state.gender,
          dob:this.state.dob
        }
        console.log(user);
    }
    render() {
        return (
          <React.Fragment>
          <h1 className="primary mb-30" style={{textAlign:"center"}}>Create a User</h1>
            <div className="container user-board">
    <form onSubmit={this.onSubmit}>
    <div className="form-group">
    <label htmlFor="Firstname">First Name:</label>
    <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.onChange}  placeholder="Enter Firstname" required/>
    </div>

    <div className="form-group">
    <label htmlFor="Lastname">Last Name:</label>
    <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.onChange}  placeholder="Enter Lastname" required/>
    </div>

    <div className="form-group">
    <label htmlFor="Hobby">Hobbies:</label>
    <input type="text" className="form-control" id="hobbies" value={this.state.hobbies} onChange={this.onChange}  placeholder="Enter Hobbies" required/>
    </div>

    <div className="form-group">
    <label htmlFor="Age">Age:</label>
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">Yr(s)</span>
    </div>
    <input type="number" className="form-control" id="age" value={this.state.age} onChange={this.onChange}  placeholder="Enter Age" required/>
    </div>
    </div>


    <div className="form-group">
    <label htmlFor="gender">Gender:</label>
    <select className="form-control" id="gender"  value={this.state.gender} onChange={this.onChange}>
      <option>Male</option>
      <option>Female</option>
    </select>
     </div>

         <label htmlFor="date">Date Of Birth:</label>
         <div className="form-group">
        <DatePicker selected={this.state.dob} onChange={this.onChangeDate}/>
        </div>
            <div className="form-group">
     <input type="submit" value="Add User" className="btn btn-primary"/>
     </div>
    </form>
        </div>
        </React.Fragment>
        )
    }
}

export default Form
