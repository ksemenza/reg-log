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
/** Start of Form */

            <form onSubmit={handleSubmit(onSubmit)}>
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <div className="form-group">
/**FNAME LABEL */
                    <label for="fname">First Name</label>
/**FNAME INPUT */
                    <input name="fname" type="text" placeholder='First Name' {...register('fname')}
                    className={`form-control ${error.fname ? 'is-invalid' : ''}`}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    />
/**FNAME Error feedback */ 
                    <div className='invalid-feedback'>{error.fname.message}</div>
                </div>


            </form>
            

        </div>
    )
}

export default Form