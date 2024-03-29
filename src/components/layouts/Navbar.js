import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <h4 className="navbar-brand">Enye Developer Challenge</h4>
  <button className="btn btn-sm align-middle btn-primary ml-3 order-lg-last" type="button"><Link to="/" className="text-white">Create User</Link></button>
  <button className="btn btn-sm align-middle btn-primary ml-3 order-lg-last" type="button"><Link to="/users" className="text-white">Users Table</Link></button>
</nav>
        </div>
    )
}
