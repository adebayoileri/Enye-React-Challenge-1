import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../App.css'

export class Form extends Component {
    render() {
        return (
            <div className="container user-board">
    <form>
    <div className="form-group">
    <label htmlFor="Firstname">First Name:</label>
    <input type="text" className="form-control" id="firstName" value={this.state}  placeholder="Enter Firstname" required/>
    </div>

    <div className="form-group">
    <label htmlFor="Lastname">Last Name:</label>
    <input type="text" className="form-control" id="lastName" value={this.state}  placeholder="Enter Lastname" required/>
    </div>

    <div className="form-group">
    <label htmlFor="Age">Age:</label>
    <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">₦</span>
    </div>
    <input type="number" className="form-control" id="age" placeholder="Enter Age" required/>
    </div>
    </div>


    <div className="form-group">
    <label htmlFor="category">Gender:</label>
    <select className="form-control" id="gender">
      <option>Male</option>
      <option>Female</option>
    </select>
     </div>

         <label htmlFor="date">Date Of Birth:</label>
         <div className="form-group">
        <DatePicker/>
        </div>
            <div className="form-group">
     <input type="submit" value="Add User" className="btn btn-primary"/>
     </div>
    </form>
        </div>
        )
    }
}

export default Form
