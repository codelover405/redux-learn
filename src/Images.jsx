import React from 'react'
import { useState } from 'react';

import {User} from "./data/TableAPI";
const Images = () => {
    const [query,setQuery]=useState("");
    // console.log(query);
    console.log(User.filter(user=>user.first_name.toLowerCase().includes("Jodee")));
    return (
        <>
        <input type="text" placeholder='Search...'
        onChange={(e)=>setQuery(e.target.value)}
        />
        <ol>
                {
                    User.filter((user)=>
                    user.first_name.toLowerCase().includes(query)
                    ).map((user)=>(
                        <li className='listItem' key={user.id}>{user.first_name}</li>
                    ))
                }
        </ol>
        </>
    )
}

export default Images
