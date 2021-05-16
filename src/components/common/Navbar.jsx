import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    useState(()=>{
        console.log(props.content)
    },[])

    const spanSpreader = ()=>{
       const arr =props.content.map(c => {
           if(c.type=="span"){
               return <span className="navbar-text">{c.text}</span>
           }
           else{
               return null
           }
       })
       return arr
    }

    const linkSpreader = ()=>{
        const arr = props.content.map(c => {
            if(c.type == "link"){
                return <li className="nav-item">
                            <a className="nav-link" href={c.url}>{c.text}</a>
                        </li>
            }
            else{
                return null;
            }
        })
        return arr;
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Marketplace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {linkSpreader()}
        </ul>
        {spanSpreader()}
    </div>
    </div>
</nav>
     );
}
 

export default Navbar;