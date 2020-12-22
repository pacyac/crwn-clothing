import  React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth,signInwithGoogle} from "../../firebase/firebase.utilis";

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state ={email: "", password : ""}
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: "",password: ""});  
        } catch (error) {
            console.log(error.message);
        }

        
    }

    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name]: value})
    }

    render(){
        return (<div className="sign-in">
            <h2>i already have an account</h2>
            <span>Sigin with your email and password</span>

            <form action="" onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" label="email" handleChange={this.handleChange}  value={this.state.email}/>
                
                <FormInput type="password" name="password" label="password" handleChange={this.handleChange} value={this.state.password}/>  

                <div className="buttons">
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton isGoogleSignIn="true" onClick={signInwithGoogle}> Sign In with google</CustomButton>
                </div>
            </form>
        </div>)
    }
}

export default SignIn;