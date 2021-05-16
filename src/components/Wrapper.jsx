import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Signin from './Signin/Signin'
import Login from './Login/Login'
import Welcome from './Welcome/Welcome'
import ProfileNav from './ProfileNav/ProfileNav'
import ProfilePage from './ProfilePage/ProfilePage'
import {Route,Switch} from 'react-router-dom'

class Wrapper extends Component {
    state = {  }

    LOGIN_IMG_URLS = {
        customer:"https://www.kkolias.com/wp-content/uploads/2011/11/FRUITmarket.jpg",
        business:"https://cdn1.photostockeditor.com/t/1301/human-group-of-people-standing-beside-stall-person-person-image.jpg"
    }

    render() { 
        return ( 
            <Switch>
                <Route path="/home" component={Signin}/>
                <Route path="/login/customer" render={props => <Login {...props} type="customer" imgURL={this.LOGIN_IMG_URLS.customer}/>} />
                <Route path="/login/business" render={props => <Login {...props} type="business" imgURL={this.LOGIN_IMG_URLS.business}/>}/>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/profiles/:id" exact component={ProfilePage}/>
                <Route path="/profiles" exact component={ProfileNav}/>
            </Switch>
        );
    }
}
 
export default Wrapper;