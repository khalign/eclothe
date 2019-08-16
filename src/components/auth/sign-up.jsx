import React from 'react';

import {auth, createUser} from '../../utils/firebase';

import Input from '../form/input';
import Button from '../form/button';

import './auth.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUser(user, { displayName });
            this.setState({displayName: '', email: '', password: '', confirmPassword: ''});

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        let {value, name} = event.target;

        this.setState({[name]: value});
    }


    render() {
        let {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign' >
                <h2 className='title' >I do not have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <Input  required 
                            type="text" name='displayName' label ='Display Name' 
                            value={displayName} onChange={this.handleChange}  
                    />

                    <Input  required 
                            type="email" name='email' label ='Email' 
                            value={email} onChange={this.handleChange}  
                    />

                    <Input required 
                            type="password" name='password' label='Password'
                            value={password} onChange={this.handleChange}
                    />

                    <Input required 
                            type="password" name='confirmPassword' label='Confirm Password'
                            value={confirmPassword} onChange={this.handleChange}
                    />

                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;