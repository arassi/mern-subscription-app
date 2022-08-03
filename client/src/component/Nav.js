import React, {Fragment, useContext } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context";

const Nav = () => {

  const [state, setState] = useContext(UserContext);
  // we need to use this hook because Nav is not part of the Routes in App.js 
  const history = useHistory();

  const logout = () => {
    setState({user: {}, token: ''})
    localStorage.removeItem("auth");
    history.push("/login");
  }

  console.log("STATE => ", state);

  return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">


    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>

    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
      </ul>

      {state && state.token ? (
        <div className="nav-item dropdown">
          <li className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{state.user.email}</li>
          <ul className="dropdown-menu">
            <li className="nav-item dropdown-item">
              <Link className="nav-link" to="Account">
                Account
              </Link>
            </li>
            <li className="nav-item dropdown-item">
              <Link className="nav-link" onClick={logout} to="#">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Fragment>
          <div className="d-flex align-items-center">

            <Link type="button" className="btn btn-light px-3 me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary me-3" to="/register">
              Sign up for free
            </Link>

          </div>
        </Fragment>
      )}


    </div>
  </div>
</nav>

    )
}

export default Nav;