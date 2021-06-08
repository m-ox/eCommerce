import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';
import Details from '../details'

import history from '../../history'

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
            {
                _id: 0,
                title: 'At least 6 characters'
            },
            {
                _id: 1,
                title: 'At least one number'
            },
            {
                _id: 2,
                title: 'At least one symbol'
            }
    ]

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>

                <Field className='sign-up-form__name'
                name='Name'
                type='Name'
                title='Name'
                placeholder='Name'
                component={FormInput}/>


                <Field className='sign-up-form__email'
                name='Email'
                type='Email'
                title='Email'
                placeholder='Email'
                component={FormInput}/>

                <Field className='sign-up-form__password'
                name='Password'
                type='Password'
                title='Password'
                placeholder='Password'
                component={FormInput}/>

                <Field className='sign-up-form__confirm'
                name='Confirm'
                type='Password'
                title='Confirm Password'
                placeholder='Confirm Password'
                component={FormInput}/>

                <div className='sign-up-form__line'></div>

                <Field className='sign-up-form__login'
                name='SignUp'
                onClick={() => history.push('/account')}
                type='submit'
                title='Create Account'
                placeholder='SignUp'
                component={FormButton}/>

                <Field className='sign-up-form__back'
                name='Back'
                onClick={() => history.push('/signin')}
                type='button'
                title='Back'
                short={true}
                placeholder='Back'
                component={FormButton}/>

                <Details className='sign-up-form__details' title='Password Requirements' info={info} />

            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
}) (SignUpForm);

export default SignUpForm;