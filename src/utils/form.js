/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import "bootstrap/dist/js/bootstrap.min.css";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

function Form() {

// VALIDATION SCHEMA
const validationSchema =


 Yup.object().shape({
    fname: Yup.string().required('First Name Required'),
    lname:Yup.string().required('Last Name Required'),
    email: Yup.string().required('Email Required').email('Email is Invalid'),
    password: Yup.string().required('Password Required').min(6, 'Password must have at least 6 characters').max(40, 'Password cannot exceed 40 characters'),
    confirmPassword: Yup.string().required('Confirm Password Required').oneOf([Yup.ref('password'),null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
})

const {
    register,
    handleSubmit,
    reset,
    formState:{error}
} = useForm({
    resolver: yupResolver(validationSchema)
})

//ON SUBMIT
const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
}



    return(
        <div className="register-form">
//* Start of FORM
            <form onSubmit={handleSubmit(onSubmit)}>
                // eslint-disable-next-line react/jsx-no-comment-textnodes
//* Start FNAME Form Group
                <div className="form-group">
/**FNAME LABEL */
                    <label for="fname">First Name</label>
/**FNAME INPUT */
                    <input name="fname" type="text" placeholder='First Name' {...register('fname')}
                    className={`form-control ${error.fname ? 'is-invalid' : ''}`}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    />
/**FNAME Error feedback*/ 
                    <div className='invalid-feedback'>{error.fname.message}</div>
                </div>
//* End FNAME Form Group

//* Start LNAME Form Group
                <div className="form-group">
/**LNAME LABEL */
                    <label for="lname">Last Name</label>
/**LNAME INPUT */
                    <input name="lname" type="text" placeholder='Last Name' {...register('lname')}
                    className={`form-control ${error.lname ? 'is-invalid' : ''}`}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    />
/**LNAME Error feedback*/ 
                    <div className='invalid-feedback'>{error.lname.message}</div>
                </div>
//* End LNAME Form Group

//* Start EMAIL Form Group
                <div className="form-group">
/**EMAIL LABEL */
                    <label for="email">Email</label>
/**EMAIL INPUT */
                    <input name="email" type="text" placeholder='Email' {...register('email')}
                    className={`form-control ${error.email ? 'is-invalid' : ''}`}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    />
/**EMAIL Error feedback*/ 
                    <div className='invalid-feedback'>{error.email.message}</div>
                </div>
//* End EMAIL Form Group

//* Start PASSWORD Form Group
                <div className="form-group">
/**PASSWORD LABEL */
                    <label for="password">Password</label>
/**PASSWORD INPUT */
                    <input name="password" type="text" placeholder='Password' {...register('password')}
                    className={`form-control ${error.password ? 'is-invalid' : ''}`}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    />
/**PASSWORD Error feedback*/ 
                    <div className='invalid-feedback'>{error.password.message}</div>
                </div>
//* End PASSWORD Form Group

//* Start CONFIRM PASSWORD Form Group
                <div className="form-group">
/**CONFIRM PASSWORD LABEL */
                    <label for="confirmPassword">Confirm Password</label>
/**CONFIRM PASSWORD INPUT */
                    <input name="confirmPassword" type="text" placeholder='Confirm Password' {...register('confirmPassword')}
                    className={`form-control ${error.confirmPassword ? 'is-invalid' : ''}`}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    />
/**CONFIRM PASSWORD Error feedback*/ 
                    <div className='invalid-feedback'>{error.confirmPassword.message}</div>
                </div>
//* End CONFIRM PASSWORD Form Group

//*TODO Update comments and framing for deconstruction formatting

<div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              error.acceptTerms ? 'is-invalid' : ''
            }`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{error.acceptTerms?.message}</div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={reset}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>

            </form>
            

        </div>
    )
}

export default Form