import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
// import React, { useState } from 'react'

const AboutItem = (props) => {
    return (
        <>
            <div>
                <div className="px-4 py-3" id="hanging-icons">
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-bg-{#F1F1F1} d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <i className={`bi ${props.icon} text-{${props.color}}`}></i>
                            </div>
                            <div>
                                <h3 className="fs-2">{props.title}</h3>
                                <p>{props.Paragraph}</p>
                                <Link to={""} className="btn btn-primary">
                                    {props.btn}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AboutItem
