import React from 'react'
import { Link } from 'react-router-dom';

// date
const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// year
const Year=new Date().getFullYear();

// style li
const LinkClass="nav-link px-2 text-muted"
// li
const liClass="nav-item";
const Footer = (props) => {
    return (
        <>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className={""}><Link to={""} className={LinkClass} >Home</Link></li>
                    <li className={''}><Link to={""} className={LinkClass} >{props.about}</Link></li>
                    <li className={""}><Link to={""} className={LinkClass} >Pricing</Link></li>
                    <li className={""}><Link to={""} className={LinkClass} >FAQs</Link></li>
                    <li className={""}><Link to={""} className={LinkClass} >About</Link></li>
                </ul>
                <p className="text-center text-muted">© {Year} Company, Inc Today - {event.toLocaleDateString(undefined, options)}</p>
            </footer>
        </>
    )
}

export default Footer
