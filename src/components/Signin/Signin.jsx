import React, { Component } from 'react';
import './Signin.css'
import Navbar from '../common/Navbar'
import {Link} from 'react-router-dom'

class Signin extends Component {
    state = {  }
    
    content = [
        {type:"span",text:"Search the market"}
    ]

    render() { 
        return ( 
            <React.Fragment>
                <Navbar content={this.content}/>
                <div class="buttons-container">
                    <Link to="/login/customer" className="btn btn-primary btn-lg">
                        Customer Login
                    </Link>
                    <Link to="/login/business" className="btn btn-danger btn-lg">
                        Business Owner Login
                    </Link>
                 </div>
            </React.Fragment>
            
         );
    }
}
 
export default Signin;