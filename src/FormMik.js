import React from 'react'
import { Formik, Field, Form } from "formik";


const FormMik = () => {
    return (
        <>
            <div className="App">
                <h1>Contact Us</h1>
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={async (values) => {
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        console.log(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Field name="name" type="text" />
                        <Field name="email" type="email" />
                        <Field name="password" type="password" placeholder="password" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default FormMik
