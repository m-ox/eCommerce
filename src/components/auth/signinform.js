import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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

                <Field className='sign-in-form__login'
                name='Login'
                onClick={() => console.log('tryna submit')}
                type='submit'
                title='Login'
                placeholder='Login'
                component={FormButton}/>

            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
}) (SignInForm);

export default SignInForm;