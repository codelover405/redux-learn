import { useState } from 'react';

import { User } from "./data/TableAPI";

const Tables = () => {
    const table={
        "width":"100%",
        "backgroundColor":"lightskyblue",
        "fontSize":"20px"
    }
    const Input={
        "width":"100%",
        "margin":"10 0px  10px 0",
        "fontSize":"20px"
    }
    const [query, setQuery] = useState("");
    return (
        <>
            <input type="text" 
            style={Input} 
            placeholder='Search...'
            onChange={(e) => setQuery(e.target.value)} 
            />

            {/* <table border={1} style={{width:"100%",backgroundColor:"lightskyblue",fontSize:"20px"}}> */}
            <table border={1} style={table}>
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Gmail</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {
                    User.filter((u) => (
                        u.first_name.toLowerCase().includes(query) ||
                        u.last_name.toLowerCase().includes(query) ||
                        u.email.toLowerCase().includes(query) 
                    )
                    ).map((e) => (
                            <tr>
                                <td kay={e.id}></td>
                                <td>{e.first_name} {e.last_name}</td>
                                <td>{e.email}</td>
                                <td>{e.gender}</td>
                            </tr>
                    ))}
                    </tbody>
            </table>
        </>
    )
}

export default Tables
