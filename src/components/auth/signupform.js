import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';
import Details from '../details'

import history from '../../history'

class SignUpForm extends Component {
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

                <Field className='sign-up-form__confirm-password'
                name='Confirm'
                type='Password'
                title='Confirm Password'
                placeholder='Confirm Password'
                component={FormInput}/>

                
                <div className='sign-up-form__line'></div>

                <Field className='sign-up-form__login'
                name='Login'
                onClick={() => console.log('tryna submit')}
                type='submit'
                title='Login'
                placeholder='Login'
                component={FormButton}/>

                <Field className='sign-up-form__back'
                name='Back'
                onClick={() => console.log('tryna go back')}
                type='button'
                title='Back'
                short={true}
                placeholder='Back'
                component={FormButton}/>

                <Details className='sign-up-form__details' title='QuickLinks' links={links} />

            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
}) (SignUpForm);

export default SignUpForm;