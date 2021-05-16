import React,{Component} from 'react';

class LoginForm extends Component {
    state = { 
        username:"",
        password:""
     }

    handleSubmit = e => {
        e.preventDefault()
        this.props.history.replace("/welcome")
    }

    handleChange = e => {
        const currentTarget = e.currentTarget
        const account = {...this.state}
        account[currentTarget.name] = currentTarget.value
        this.setState({username:account.username,password:account.password})
    }

    render() { 
        return ( 
            <div class="card-body login-body">
                <div id="login-title">
                    <h5 class="card-title">Login as a {this.props.type}</h5>
                    <img id="logo" src="https://api.freelogodesign.org/assets/thumb/logo/24146791_400.png?t=637479826540000000" alt=""/>
                </div>
                <form id="login-form" onSubmit={this.handleSubmit} action={`/login/${this.props.type}`} method="POST">
                    <input type="text" onChange={this.handleChange} id="username" name="username" className="form-control" placeholder="Enter your username"/>
                    <input type="password" onChange={this.handleChange} id="password" name="password" className="form-control" placeholder="Enter your password"/>
                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                </form>
                <span>OR</span><br/>
                <a href={`/register/${this.props.type}`} className="btn btn-success btn-lg">Register</a><br/>
                <a href={`/login/${this.props.type}`} className="btn btn-secondary btn-lg">Not a {this.props.type}? Click Here</a>
            </div>
         );
    }
}
 
export default LoginForm;