import { useEffect, useState } from "react"
import Axios from "axios";

import React from 'react'

const Post = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log("Getting form...", res.data);
            }).catch(err => console.log(err))
    }, [])

    const postData = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body,
        }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
    }


    const arr = data.map((data, index) => {
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
            </tr>
        )
    })

    return (
        <>
            <form action="">
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" onChange={(e) => setBody(e.target.value)} />
                {/* <input type="text" onChange={(e)=>setData(e.target.value)} /> */}
                <hr />
                <button onClick={postData}>Post</button>
            </form>

            <table>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Data</th>
                </tr>

                <tr>
                    <td>{body}</td>
                    <td>{title}</td>
                    <td>{data}</td>
                </tr>
            </table>
        </>
    )
}

export default Post


