import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

const All = () => {
    return (
        <>
            {/* <nav>
                <Link to="Tt">profile</Link>
                <Link to="Ts">Account</Link>
                <Link to="side">Account</Link>
            </nav>
            <Outlet /> */}
            <div className="d-flex">
                <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
                    <Link href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <span className="fs-5 fw-semibold">Collapsible</span>
                    </Link>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                                Home
                            </button>
                            <div className="collapse" id="home-collapse" >
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="card" className="link-dark d-inline-flex text-decoration-none rounded">Card</Link></li>
                                    <li><Link to="info" className="link-dark d-inline-flex text-decoration-none rounded">Info</Link></li>
                                    <li><Link to="forum" className="link-dark d-inline-flex text-decoration-none rounded">Forum</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Dashboard
                            </button>
                            <div className="collapse" id="dashboard-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="Ts" className="link-dark d-inline-flex text-decoration-none rounded">One</Link></li>
                                    <li><Link to="about" className="link-dark d-inline-flex text-decoration-none rounded">two</Link></li>
                                    <li><Link to="payment" className="link-dark d-inline-flex text-decoration-none rounded">payment</Link></li>
                                    <li><Link to="contact" className="link-dark d-inline-flex text-decoration-none rounded">contact</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                Orders
                            </button>
                            <div className="collapse" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">New</Link></li>
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">Processed</Link></li>
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</Link></li>
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">Returned</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><Link to={"Tt"} className="link-dark d-inline-flex text-decoration-none rounded">KLKLK</Link></li>
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">Profile</Link></li>
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">Settings</Link></li>
                                    <li><Link to="" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default All
