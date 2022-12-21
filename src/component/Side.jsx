import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Side = () => {
    const linkclass="dropdown-item"
    return (
        <>
            <div className="d-flex">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "280px" }} >
                        <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                        <span className="fs-4">Sidebar</span>
                        </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto ">
                        <li className="nav-item">
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                            <Link className="nav-link active" to={'/list/side'}> Home</Link>
                        </li>
                        <li>
                            {/* <a href="#" className="nav-link link-dark"> */}
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
                            <Link className="nav-link " to="booklist"> BookList</Link>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
                            <Link className="nav-link" to='Orders'> Orders</Link>
                        </li>
                        <li>
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
                            <Link className="nav-link" to={'Products'}> Products</Link>
                        </li>
                        <li>
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                            <Link className="nav-link" to={'Customers'}> Customers</Link>
                        </li>
                        <li>
                            {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                            <Link className="nav-link" to={'basic'}> Basic</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <Link to="" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"> */}
                            <strong>mdo</strong>
                        </Link>
                        <ul className="dropdown-menu text-small shadow">
                            <li><Link className={""} to={""}>New project...</Link></li>
                            <li><Link className={""} to={""}>Settings</Link></li>
                            <li><Link className={""} to={""}>Profile</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className={""} to={""}>Sign out</Link></li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Side
