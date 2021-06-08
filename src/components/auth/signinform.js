import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';
import Details from '../details'

import history from '../../history'

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot email/password?',
                onClick: () => console.log('forgot credentials')
            }
    ]

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
                <div className='sign-in-form__line'></div>

                <Field className='sign-in-form__login'
                name='Login'
                onClick={() => console.log('tryna submit')}
                type='submit'
                title='Login'
                placeholder='Login'
                component={FormButton}/>

                <Details className='sign-in-form__details' title='QuickLinks' links={links} />

            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
}) (SignInForm);

export default SignInForm;