/* eslint-disable */
import React, { FC, useContext, useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import Jumbotron from "./Jumbotron";
import { AuthContext } from "../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import "./Header.css";

const Header: FC = () => {
  const { t, i18n } = useTranslation();

  const [isNavigate, setIsNavigate] = useState(false);
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext.state;

  const handleLogout = () => {
    authContext.authDispatch({
      type: authContext.ActionTypes.LOGOUT,
      payload: {},
    });

    setIsNavigate(true);
  };

  const getFullName = () => {
    return `${user?.name?.first} ${user?.name?.last}`;
  };
  console.log("🚀 ~ file: Header.tsx:30 ~ isNavigate:", isNavigate);
  useEffect(() => {
    if (isNavigate) {
      setIsNavigate(false); // Reset the state to prevent infinite loop
    }
  }, [isNavigate]);

  if (isNavigate) {
    // console.log("🚀 ~ file: Header.tsx:30 ~ isNavigate:", isNavigate);
    return <Navigate to="/" />;
  }

  return (
    <header id="home" className="hero-area">
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light scrolling-navbar">
        <div className="container">
          <div className="theme-header clearfix">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
                {/* <span className="lni-menu" />
                <span className="lni-menu" />
                <span className="lni-menu" /> */}
              </button>
              <NavLink
                className="navbar-brand"
                style={{ fontWeight: "bold" }}
                to="/"
              >
                <img
                  style={{ width: "45px", height: "57px" }}
                  src={require("../assets/img/pro1.jpeg")}
                />
              </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end margin-auto-to-all-child">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>

                {!isAuthenticated && (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">
                        Register
                      </NavLink>
                    </li>
                  </React.Fragment>
                )}
                {isAuthenticated && user.role === "applicant" && (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/jobs">
                        Jobs
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Candidates
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="/applied-jobs">
                            Applied jobs
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {getFullName()}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="/edit-profile">
                            Edit Profile
                          </NavLink>
                        </li>
                        <li
                          onClick={handleLogout}
                          style={{ cursor: "pointer" }}
                        >
                          <a className="dropdown-item">Logout</a>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                {isAuthenticated && user.role === "recruiter" && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Recruiters
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/employer/dashboard/"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/employer/applicants/"
                        >
                          Applicants
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/employer/post-job"
                        >
                          Post a Job
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                )}
                {isAuthenticated && user.role === "recruiter" && (
                  <li
                    className="nav-item"
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    <a className="nav-link">Logout</a>
                  </li>
                )}
                <li className="button-group">
                  <NavLink
                    className="button btn btn-common"
                    //
                    to={
                      isAuthenticated && user.role === "recruiter"
                        ? "/employer/post-job/"
                        : "/login"
                    }
                  >
                    Post a Job
                  </NavLink>
                </li>

                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                        Language
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li style={{cursor: 'pointer'}}>
                                            <a className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>English</a>
                                        </li>
                                        <li style={{cursor: 'pointer'}}>
                                            <a className="dropdown-item" onClick={() => i18n.changeLanguage("bn")}>Bengali</a>
                                        </li>
                                    </ul>
                                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu" data-logo="assets/img/logo-mobile.png" />
      </nav>
      {["/"].includes(window.location.pathname) ? <Jumbotron /> : ""}
    </header>
  );
};

export default Header;
