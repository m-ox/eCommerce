import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formfields';

class SignInForm extends Component {
    render() {
        const { className } = this.props;

        return (
            <form className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email'
                name='Email'
                type='Email'
                title='Email'
                placeholder='Email'
                component={FormInput}/>

                <Field className='sign-in-form__password'
                name='Password'
                type='Password'
                title='Password'
                placeholder='Password'
                component={FormInput}/>

            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
}) (SignInForm);

export default SignInForm;