import React from 'react';
import "bootstrap/dist/js/bootstrap.min.css";
import {useForm} from 'react-hook-form';
import{yupResover} from '@hookform/resolvers'
import * as Yup from 'yup'

function Form() {

// VALIDATION SCHEMA
const validationSchema = Yup.object().shape({
    fname: Yup.string().required('First Name Required'),
    lname:Yup.string().required('Last Name Required'),
    email: Yup.string().required('Email Required').email('Email is Invalid'),
    password: Yup.string().required('Password Required').min(6, 'Password must have at least 6 characters').max(40, 'Password cannot exceed 40 characters'),
    confirmPassword: Yup.string().required('Confirm Password Required').oneOf([Yup.ref('password'),null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
})

//ON SUBMIT
const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
}


    return(
        <div>

        </div>
    )
}

export default Form