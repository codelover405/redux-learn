import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreater } from '../state/index';

import Side from "./Side";
const Customers = () => {
  const Dispatch = useDispatch();
  const Balance = useSelector(state => state.amount);
  return (
    <>
      {/* <Side/> */}
      <div className="container">
        <button className='btn btn-primary' onClick={() => Dispatch(actionCreater.Add(800))}>Add 800</button>
        <p>{Balance}</p>
      </div>
    </>
  )
}

export default Customers
