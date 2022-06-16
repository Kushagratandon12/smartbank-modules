import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/AppHeader.css";
import AppRoute from "../AppRoutes"

function AppHeader() {
  const cartCount = 0;
  const history = useHistory();

  const logoutUser = () => {
    /**
     * Write logic to route to login page on clicking logout button.
     */
    alert('Logout Successfully')
    history.push('/Login')
  };

  return (
    <div className="app-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="/">
          Smart Bank App
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <div class="navbar-nav">
          
            <Link class="nav-item nav-link" to="/">
              Home
            </Link>

            <Link class="nav-item nav-link" to="/Login">
              Login
            </Link>

            <Link class="nav-item nav-link" to="/cart">
              Cart
            </Link>

            <Link class="nav-item nav-link" to="/rewards">
              Rewards
            </Link>

            <div className="header-right">
              <button className="btn btn-dark" onClick={logoutUser}>
                <i className="fas fa-sign-out-alt" />
                &nbsp; Log Out
              </button>
            </div>

          </div>
        
        </div>
      </nav>
      <AppRoute />
    </div>
  );
}

export default AppHeader;
