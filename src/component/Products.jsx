import React from 'react';
import { Formik } from 'formik';
import { color, style } from '@mui/system';

const Products = () => (
  <div style={{ width: "100%" }}>
    <h1>Add Products</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        var errors = {};
        if (!values.email || !values.password) {
          errors.email = 'Required';
          errors.password = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        else if (
          !(values.password).length >6
        ) {
          errors.email = 'Invalid  password';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log((values));
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div class="row m-0">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name"
                aria-label="First name"
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className='text-danger'>
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div class="col">
              <input type="password" class="form-control" placeholder="Last name"
                aria-label="Last name"
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className='text-danger'>
                {errors.password && touched.password && errors.password}
              </span>
            </div>
          </div>
          <button type="submit" className='btn btn-info' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Products;