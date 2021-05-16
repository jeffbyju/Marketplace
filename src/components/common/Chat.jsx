import React,{Component} from 'react';
import './Chat.css'
import socketClient from 'socket.io-client'

const SERVER = 'http://127.0.0.1:8080';

const socket = socketClient(SERVER)

socket.on('connection',()=>{
    console.log('I am connected with the backend')
})

class Chat extends Component {
    state = {
        text:""
    }

    

    handleChange = e =>{
        const currentTarget = e.currentTarget
        this.setState({text:currentTarget.value})
        console.log(currentTarget.value)
    }

    render() { 
        return ( 
            <React.Fragment>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="chat-input-container">
                    <input id="chat-input" type="text" value={this.state.text} onChange={this.handleChange}/>
                    <button id="chat-button" className="btn btn-primary">Send</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Chat;