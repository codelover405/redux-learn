import React from 'react'
import Side from "./Side";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import {useSelector } from 'react-redux';

const Orders = (props) => {
  // redux
  const Balance = useSelector(state => state.amount);
  
  const Txt1="Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.";
  const Txt2="Read more detailed instructions and documentation on using or contributing to Bootstrap.";
  const Orders=
    {
      guide1:`Quick start guide 1  ${Balance}`,
      guide2:"Quick start guide 2",
      guide3:"Quick start guide 3",
      guide4:"Quick start guide 4",
      guide5:"Quick start guide 5"
    }
  const Style={
    LiStyle:"d-flex align-items-start mb-1 page-link",
    linkStyle:"page-link",
  }

  return (
    <>
      <div classname="row g-2">
        <div classname="col-md-6">
          <h2>{props.title}</h2>
          <p>{Txt1}</p>
          <ul classname="icon-list ps-0">
            <li classname="d-flex align-items-start mb-1"><Link to="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" target="_blank">Bootstrap npm starter</Link></li>
            <li classname="text-muted d-flex align-items-start mb-1">Bootstrap Parcel starter (coming soon!)</li>
          </ul>
        </div>

        <div classname="col-md-6">
          <h2>{props.ReadTitle}</h2>
          <p>{Txt2}</p>
          <ul classname="icon-list ps-0">
            <li classname={Style.LiStyle}><Link to={"id-1"} className={Style.linkStyle}>{Orders.guide1} </Link></li>
            <li classname={Style.LiStyle}><Link to={"id-2"} className={Style.linkStyle}>{Orders.guide2}</Link></li>
            <li classname={Style.LiStyle}><Link to={"id-3"} className={Style.linkStyle}>{Orders.guide3}</Link></li>
            <li classname={Style.LiStyle}><Link to={"id-4"} className={Style.linkStyle}>{Orders.guide3}</Link></li>
            <li classname={Style.LiStyle}><Link to={"id-5"} className={Style.linkStyle}>{Orders.guide5}</Link></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Orders
