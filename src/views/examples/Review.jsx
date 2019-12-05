import React from "react";

//import fire from "config/Fire.js";
import {withRouter, BrowserRouter } from 'react-router-dom';


class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        }
       
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    // getAction = action => {
    //     if(action === 'reg'){
    //         this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
    //     }else{
    //         this.setState({formTitle: 'Sign In', loginBtn: true, fireErrors: ''});
    //     }
    // }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/admin/user-profile');
      }

    render(){

       
        return(
            
            <div className="form_block">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                
                    <form onSubmit={ this.handleFormSubmit.bind( this )}>
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" /> 
                    </form>
                   
                    <button  className="loginBtn" type="submit" onClick={this.login} onClick={this.handleFormSubmit}> Login</button>
                </div>
            </div>
        )
    }
}

export default Review;