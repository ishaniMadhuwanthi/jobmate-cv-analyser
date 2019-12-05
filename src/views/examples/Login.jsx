import React from "react";
import {withRouter, BrowserRouter } from 'react-router-dom';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Sign In',
            loginBtn: true
        }
       
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false });
        }else{
            this.setState({formTitle: 'Sign In', loginBtn: true });
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/admin/index');
      }

    render(){


        let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" onClick={this.login} onClick={this.handleFormSubmit} value="Sign In" />) :  
            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')} onClick={this.handleFormSubmit}>Login</button>)

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

                        {submitBtn}
                    </form>
                    {login_register}
                </div>
            </div>
        )
    }
}

export default Login;