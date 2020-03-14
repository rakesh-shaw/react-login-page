import React, { Component } from 'react';
import './login.css';
class Login extends Component{
 
    constructor(props){
        super(props);
        this.state={
            username:'',// Username of login    
            password:''//Password of login
        }
    }
  
    changeUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    changePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    Submit=(event)=>{
        const {username,password}=this.state;
        if(username==='' || password===''){
            alert("Invalid Credentials");
        }else{
            alert("Success");
        }
    }
    
    render(){
    
        return(
            <div className="container">
                <h2>Welcome</h2>
                <form onSubmit={this.Submit}>
                    Username:<input type="text" value={this.state.username} onChange={this.changeUsername}/><br/><br/>
                    Password:<input type="password" value={this.state.password}  onChange={this.changePassword} /><br/><br/>
                    <button  variant="primary" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;