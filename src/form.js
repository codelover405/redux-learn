import React, { useState } from 'react'

// video 38

export default function Form() {
    const [fullName, setFullname] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        txt:""

    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // console.log(event.target.placeholder);
        // setName(event.target.value)

        // const value = event.target.value;
        // const name = event.target.name;
        const { value, name } = event.target;

        setFullname((preValue) => {

            console.log(preValue);


            // new
            return {
                ...preValue,
                [name]: value
            }
        })
    }


    const onsubmit = (event) => {
        event.preventDefault()
        alert("form submited")
    }





    return (
        <div>
            <form onSubmit={onsubmit}>
                <h4>Form</h4>
                <p>Hello {fullName.fname} {fullName.lname}</p>
                <p>Email {fullName.email}</p>
                <p>Phone {fullName.phone}</p>
                <p>Text {fullName.txt}</p>
                {/* <input type="text" onChange={(e)=>Chanag(e)}  /> */}
                <input type="text"
                    placeholder='Enter last name'
                    onChange={inputEvent}
                    name="fname"
                    value={fullName.fname}
                />
                <br />
                <input type="text"
                    placeholder='Enter name'
                    onChange={inputEvent}
                    name="lname"
                    value={fullName.lname}
                />
                <br />
                <input type="text"
                    placeholder='Enter Email'
                    onChange={inputEvent}
                    name="email"
                    value={fullName.email}
                    autoComplete='off'
                />
                <br />
                <input type="text"
                    placeholder='Enter phone Number'
                    onChange={inputEvent}
                    name="phone"
                    value={fullName.phone}
                />
                <input type="text"
                    placeholder='Enter Text'
                    onChange={inputEvent}
                    name="txt"
                    value={fullName.txt}
                />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}



// name="" and value=""


// this video change name="Lname" == name="lname"
//                   name="Fname"  == name="fname"