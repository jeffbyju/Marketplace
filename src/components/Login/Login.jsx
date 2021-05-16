import React, { Component } from 'react';
import "./Login.css"
import LoginForm from '../common/LoginForm'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div class="card login-container">
                    <div class="two-container">
                        <img id="login-image" src={this.props.imgURL} className="card-img-left" alt=""/>
                        <LoginForm history={this.props.history} type={this.props.type}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;