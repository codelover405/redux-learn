import React from 'react'
import { Link } from "react-router-dom";

import Contact from "./Contact";

const Dashboards = () => {
    return (
        <>
              {/* <Side/> */}
      Dashboard
      <Contact/>
            <div>
                <h2>Services</h2>
                <ul>
                    <li>
                        <Link to="/services/1">Service 1</Link>
                    </li>
                    <li>
                        <Link to="/services/3">Service 3</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboards
