import React from 'react';

import {auth, signInWithGoogle} from '../../utils/firebase';

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

    handleSubmit = async event => {
        event.preventDefault();
        let {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log('error signing in' + error)
        }
    }

    handleChange = event => {
        let {value, name} = event.target;

        this.setState({[name]: value});
    }


    render() {
        let {email, password} = this.state;

        return (
            <div className='sign' >
                <h2 className='title' >I already have an account</h2>
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

                    <div className='buttons' >
                        <Button type="submit">Sign in</Button>

                        <Button google onClick={signInWithGoogle}>
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;