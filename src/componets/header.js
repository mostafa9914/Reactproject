import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
            <div>
                <div className="container-fluid">
  <div className="row align-items-center bg-light px-lg-5">
    <div className="col-12 col-md-8">
      <div className="d-flex justify-content-between">
        <div
          className="bg-primary text-white text-center py-2"
          style={{ width: 100 }}
        >
          Tranding
        </div>
        <div
          className="owl-carousel owl-carousel-1 tranding-carousel position-relative d-inline-flex align-items-center ml-3"
          style={{ width: "calc(100% - 100px)", paddingLeft: 90 }}
        >
          <div className="text-truncate">
            <a className="text-secondary" href="">
              Labore sit justo amet eos sed, et sanctus dolor diam eos
            </a>
          </div>
          <div className="text-truncate">
            <a className="text-secondary" href="">
              Gubergren elitr amet eirmod et lorem diam elitr, ut est erat
              Gubergren elitr amet eirmod et lorem diam elitr, ut est erat
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4 text-right d-none d-md-block">
      Monday, January 01, 2045
    </div>
  </div>
  <div className="row align-items-center py-2 px-lg-5">
    <div className="col-lg-4">
      <a href="" className="navbar-brand d-none d-lg-block">
        <h1 className="m-0 display-5 text-uppercase">
          <span className="text-primary">News</span>Room
        </h1>
      </a>
    </div>
    <div className="col-lg-8 text-center text-lg-right">
      <img className="img-fluid" src="img/ads-700x70.jpg" alt="" />
    </div>
  </div>
</div>
<div className="container-fluid p-0 mb-3">
  <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
    <a href="" className="navbar-brand d-block d-lg-none">
      <h1 className="m-0 display-5 text-uppercase">
        <span className="text-primary">News</span>Room
      </h1>
    </a>
    <button
      type="button"
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
      id="navbarCollapse"
    >
      <div className="navbar-nav mr-auto py-0">
        <NavLink to="/" className="nav-item nav-link ">
          Home
        </NavLink>
        <NavLink to='/categories' className="nav-item nav-link">
          Categories
        </NavLink>
        <NavLink to="/singleNews" className="nav-item nav-link">
          Single News
        </NavLink>
        
        <NavLink to="/contact" className="nav-item nav-link">
          Contact
        </NavLink>
  
    
      </div>
      <div
        className="input-group ml-auto"
        style={{ width: "100%", maxWidth: 300 }}
      >
        <input type="text" className="form-control" placeholder="Keyword" />
        <div className="input-group-append">
          <button className="input-group-text text-secondary">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <Link to='/login' className="nav-item nav-link">
          Login
        </Link>
    </div>
  </nav>
</div>

            </div>
        );
    }
}

export default Header;
