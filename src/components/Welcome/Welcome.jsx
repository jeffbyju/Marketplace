import React from 'react';
import Navbar from '../common/Navbar'
import './Welcome.css'

const Welcome = () => {

    const content = [
        
    ]

    return ( 
        <React.Fragment>
        <Navbar content={content}/>
        <div class="buttons-container">
            <a href="" className="btn btn-primary btn-lg">
                Take an AR tour of the market
            </a>
            <a href="/profiles" className="btn btn-danger btn-lg">
                Search the market
            </a>
         </div>
        </React.Fragment>
     );
}
 
export default Welcome;