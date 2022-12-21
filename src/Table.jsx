import React from 'react'

fetch("https://jsonplaceholder.typicode.com/posts").then(
    res => {
        res.json().then(
            data => {
                // console.log(data);
                if (data.length > 0) {

                    var temp = "";
                    data.forEach((itemData) => {
                        temp += "<tr>";
                        temp += "<td>" + itemData.userId + "</td>";
                        temp += "<td>" + itemData.id + "</td>";
                        temp += "<td>" + itemData.title + "</td>";
                        temp += "<td>" + itemData.body + "</td>";
                    });
                    // document.getElementById('data').dangerouslySetInnerHTML = temp;
                }
            }
        )
    }
)
const Table = () => {
    return (
        <>
            <div class="container">
                <table class="table" border={1}>
                <caption className='text-center h3' style={{captionSide:"top"}}>Data</caption>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody id="data">
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
