import React from 'react';
import './Home.css';
import Log from './images/register.png';
import {auth} from '../firebase/firebase';
import Login from './login';
import First from './questions';
import Home from './Home';
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "register",
            email:"",
            password:"",
            uid: ""
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.register = this.register.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    changeLogin(e)
    {
        e.preventDefault();
        this.setState({status: "login"})
    }
    register(e)
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            this.setState({uid: userCredential.user.uid});
            this.setState({status: "assess"});
        })
        .catch((err) => {
            ////console.log(err);
            switch (err.code) {
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                window.alert("Please try again! Invalid email id or email already in use")
                break;
              case "auth/weak-password":
                window.alert("Please enter a stronger password");
                break;
              default: ////console.log("Hello");
            }
          });
    }
    goBack(e)
    {
        e.preventDefault();
        this.setState({status: "home"});
    }
    onChangeInput(e)
    {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }
    checkStatus() {
        if (this.state.status === "register") {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
          <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
        </nav>
        <div style={{paddingTop:"4%"}}></div>
                <div class = "container">
                    <div class = "row">
                        <div class = "col-lg-6 col-md-12">
                            <img src = {Log} style={{borderRadius:"50%"}}/>
                        </div>
                        <div class = "col-lg-6 col-md-12">
                        <main class="form-signin">
                    <form onChange = {(e) => {this.onChangeInput(e)}}>
                        <h1 class="h3 mb-3 fw-normal">Give us a chance to help you!</h1>

                        <div class="form-floating">
                            <input name = "email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label >Email address</label>
                        </div>
                        <div class="form-floating">
                            <input name = "password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label >Password</label>
                        </div>
                        <p class="mt-5 mb-3 ">Already have an account?<a href="#" onClick = {(e) => {this.changeLogin(e)}}>Click here!</a></p>
                        <button class="button1" type="submit" onClick = {(e)=>{this.register(e)}}>Sign up</button>{ "  "}
                        <button class="button1" type="submit" onClick = {(e)=>{this.goBack(e)}}>Go Back</button>
                    </form>
                </main>
                        </div>
                    </div>
                </div>
            </div>
        }
        if(this.state.status === "login")
        {
            return <Login/>;
        }
        if(this.state.status === "assess")
        {
            return <First uid = {this.state.uid}/>
        }
        if(this.state.status === "home")
        {
            return <Home/>
        }
    }
    render() {
        return this.checkStatus();
    }
}
export default Register;