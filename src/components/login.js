import React from 'react';
import './Home.css';
import Log from './login.png';
import {auth} from '../firebase/firebase';
import {db} from '../firebase/firebase';
import Register from './register';
import Profile from './profile';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "login",
            email:"",
            password:"",
            uid:"",
            level:"",
            success: false
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.changeRegister = this.changeRegister.bind(this);
        this.login = this.login.bind(this);
    }
    async login(e)
    {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user.uid;
            // ...
            this.setState({success: true});
            this.setState({uid: user});
            
           
        })
        .catch((error) => {
            if (
                error.code === "auth/invalid-email" ||
                error.code === "auth/user-not-found"
              ) {
                window.alert("User not found");
              } else if (error.code === "auth/wrong-password") {
                window.alert("Wrong password");
              }
        });

        if(this.state.success === true)
        {
            const cityRef = db.collection(this.state.uid).doc('Information');
            const doc = await cityRef.get();
            console.log(doc.data().CurrentLevel);
            this.setState({level: doc.data().CurrentLevel});
            this.setState({status: "profile"});
        }
    }
    
    onChangeInput(e)
    {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        console.log(this.state);
    }
    changeRegister(e)
    {
        e.preventDefault();
        this.setState({status:"register"});
        
    }
    checkStatus() {
        if (this.state.status === "login") {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
          <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
        </nav>
        <div style={{paddingTop:"4%"}}></div>
                <div class = "container">
                    <div class = "row">
                        <div class = "col-lg-6 col-md-12">
                            <img src = {Log}/>
                        </div>
                        <div class = "col-lg-6 col-md-12">
                        <main class="form-signin">
                    <form onChange = {(e) => {this.onChangeInput(e)}}>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating">
                            <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <p class="mt-5 mb-3 ">Don't have an account yet?<a href="#" onClick = {(e) => {this.changeRegister(e)}}>Click here!</a></p>
                        <button class="button1" type="submit" onClick = {(e)=>{this.login(e)}}>Sign in</button>
                       
                    </form>
                </main>
                        </div>
                    </div>
                </div>
            </div>
        }
        if(this.state.status === "register")
        {
            return <Register/>
        }
        if(this.state.status === "profile")
        {
            return <Profile uid={this.state.uid} level ={this.state.level} />
        }
    }
    render() {
        return this.checkStatus();
    }
}
export default Login;