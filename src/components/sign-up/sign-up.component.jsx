import React from 'react'

import "./sign-up.styles.scss";

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfile } from '../../firebase/firebase.utilis';

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email,displayName,password,confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("sorry password don't match try again");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfile(user,{displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            
        } catch (error) {
            console.log("error register user",error.message);   
        }

    }

    handleChange = e => {
        const {name,value} = e.target;

        this.setState({[name]: value});
    }

    render() {
        const {email,displayName,password,confirmPassword} = this.state;

        return (
            <div className="sign-in">
                <h1 className="title">I don not have an account</h1>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value = {displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />


                    <FormInput 
                        type="email"
                        name="email"
                        value = {email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput 
                        type="password"
                        name="password"
                        value = {password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />

                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton type='submit'>Sign Up Now</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;