import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { actionCreater } from './state/index';
import { bindActionCreators } from "redux";
const Search = () => {

    const Dispatch = useDispatch();
    const { Add, Less, Multi, Work, addTopping,addname } = bindActionCreators(actionCreater, Dispatch)
    const Balance = useSelector(state => state.amount);
    const ok = useSelector(state => state.inputs);


    const [val, setVal] = useState();
    const [fullName, setName] = useState();

    const setN = () => setName(val)


    return (
        <>
            <button className='btn btn-warning'
                onClick={() => Dispatch(actionCreater.Less(200))}>Less --
            </button>
            <span>Less 200 Add 500 and  multi 5 <b>{Balance}</b></span>
            <button className='btn btn-warning'
                onClick={() => Dispatch(actionCreater.Multi(5))}>Multi **
            </button>

            <button className='btn btn-warning'
                onClick={() => Dispatch(actionCreater.Add(500))}>Add ++
            </button>
            {/* <div className='text-info'>Type Global{ok}</div> */}

            <button className='btn btn-warning'
                onClick={() => Dispatch(actionCreater.addname(""))}>name
            </button>
            {/* <button className='btn btn-warning'
                onClick={() => Dispatch(actionCreater.addTopping('pepperoni'))}>addTopping
            </button>
            {ok}
            <button className='btn btn-warning'
                onClick={() => Dispatch(actionCreater.Work({ fullName }))}>form ++
            </button> */}
            {/* <p>Hello {fullName}</p> */}
            {/* <input type="text" onChange={(e)=>setVal(e.target.value)} value={val} /> */}
            {/* <input type="text" onChange={(e) => setVal(e.target.value)} value={val} /> */}
            {/* <button type='submit' onClick={() => setName(val)}>Submit</button> */}
            {/* <button type='submit' onClick={() => Dispatch(actionCreater.Work(setN()))}>Submit</button> */}
        </>
    )
}

export default Search;







