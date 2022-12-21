import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { actionCreater } from './state/index'
import Footer from "./Footer";


const Contact = (props) => {
    const Dispatch = useDispatch();
    const [fullName, setFullname] = useState({
        name: "",
        email: "",
        message: ""

    });
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
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





    // const onsubmit = (event) => {
    //     event.preventDefault()
    //     // alert("form submited")
    // }
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-evenly" style={{ backgroundColor: "#F1F1F1" }}>
                    <div className="col-md-5">
                        <h1>Contact  Me</h1>
                        {/* <h3 className="mb-4 mt-5">{props.form}</h3> */}
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                message: '',
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string()
                                    .required('Name is required'),
                                message: Yup.string()
                                    .required('message is required'),
                                email: Yup.string()
                                    .email('Please enter a valid email address')
                                    .required('Email is required')
                            })}
                            export onSubmit={fields => {
                                console.log(fields,"onsubmit");
                                // console.log(fields.name,"name");
                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className='form-label'> Name</label>
                                        <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                        <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className='form-label'>Email</label>
                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className='form-label'>Message</label>
                                        <Field name="message" type="text" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} component="textarea" rows={10} placeholder="I would like to ask...." />
                                        <ErrorMessage name="message" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="mb-3 d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary mx-2"
                                            onClick={() => Dispatch(actionCreater.Add(1))}>Register</button>
                                        <button type="reset" className="btn btn-secondary"
                                            onClick={() => Dispatch(actionCreater.Less(1))}>Reset</button>
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                    <div className="col-md-5">
                        <h3 className="mb-4  mt-5">{props.Address}</h3>
                        <address>
                            302, Platinum Point
                            Sudama chok, opp. CNG Pump,
                            Mota Varachha, Surat, Gujarat  394101 <br />
                            <i className="bi bi-telemessage-fill"></i> :+91 8789065674
                        </address>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.888535733839!2d72.87319051364064!3d21.236268185886285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0ad816fdb9%3A0x84e99efa8bc514bb!2sWRT%20infotech!5e0!3m2!1sen!2sin!4v1665749183400!5m2!1sen!2sin" width="480" height="450" style={{ border: 0, width: "-webkit-fill-available" }} loading="lazy" 
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact
