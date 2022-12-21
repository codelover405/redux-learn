import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import LinearProgress from "./LinearProgress";

const Layout = () => {
    const Balance = useSelector(state => state.amount);
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#F1F1F1" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">
                        <Link to="/" className='nav-link'>Web</Link>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about/:id" className='nav-link'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/payment" className='nav-link'>Payment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all" className='nav-link'>All</Link>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                <Link to="/list" className='nav-link dropdown-toggle'>List</Link>
                                {/* </a> */}
                                <ul className="dropdown-menu dropdown-content">
                                    {/* <li><a className="dropdown-item" href="#">Action</a></li> */}
                                    <li><Link to="list/img" className='dropdown-item'>Nested nav</Link></li>
                                    {/* <li><Link to="list/table" className='dropdown-item'>Table API</Link></li> */}
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="list/side" className='dropdown-item'>Side Bar</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" className='nav-link'>Redux Global </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            <button type="button" className="btn btn-primary btn-sm position-relative">
                                Users
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {Balance}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>  
            {/* <LinearProgress variant="determinate" /> */}
            <Outlet />
        </>
    )
}

export default Layout
