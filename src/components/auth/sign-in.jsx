import React from 'react';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import Input from '../form/input';
import Button from '../form/button';

import './auth.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        let {value, name} = event.target;

        this.setState({[name]: value});
    }


    render() {
        let {email, password} = this.state;

        return (
            <div className='sign-in' >
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <Input  required 
                            type="email" name='email' label ='Email' 
                            value={email} onChange={this.handleChange}  
                    />

                    <Input required 
                            type="password" name='password' label='Password'
                            value={password} onChange={this.handleChange}
                    />

                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;