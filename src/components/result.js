import React from 'react';
import './Home.css';
import {db} from '../firebase/firebase';
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "result",
            uid: this.props.uid,
            level: this.props.level,
            destination: "",
            deadline:""
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.save = this.save.bind(this);
    }
    async save(e)
    {
        e.preventDefault();
        console.log("Clicked");
        const res = await db.collection(this.state.uid).doc('Information').set({
            CurrentLevel: this.state.level,
            deadline : this.state.deadline,
            DestinationLevel: this.state.destination
          });
    }
    onChangeInput(e)
    {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        console.log(this.state);
    }
    checkStatus() {
        if (this.state.status === "result") {
            if (this.state.level === "Going Good") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <h1 style={{ color: "green" }}>{this.state.level}</h1>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class="container">
                        <div style={{paddingTop:"2%"}}></div>
                        <h3>Congrats!! You have reached the green stage which indicates your discipline in life. Keep up the good work!!</h3>
                        <div style={{paddingTop:"2%"}}></div>
                    </div>
                </div>
            }
            if (this.state.level === "Medium Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <h1 style={{ color: "#EAC435" }}>{this.state.level}</h1>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "container" style={{background:"#f1f1f1"}}>
                        <div style={{paddingTop:"5%"}}></div>
                    <div class = "container">
                        <h1>Which level do you want to reach?</h1>
                        <p>Selected option: Light</p>
                    </div>
                    <div style={{paddingTop:"2%"}}></div>
                    <div class = "container">
                        <h1>Within? </h1>
                        <input type="date" name="deadline" onChange={(e)=>{this.onChangeInput(e)}}/>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                    <button class = "button1" onClick={(e)=>{this.setState({destination:"Light"});this.save(e)}}>Start!</button>
                    
                    </div>
                </div>
            }
            if (this.state.level === "High Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <h1 style={{ color: "red" }}>{this.state.level}</h1>
                    <div style={{paddingTop:"5%"}}></div>
                    <div class = "container" style={{background:"#f1f1f1"}}>
                        <div style={{paddingTop:"5%"}}></div>
                    <div class = "container">
                        <h1>Which level do you want to reach?</h1>
                        <button style={{width:"100px", height:"100px", borderRadius:"50%", background:"#EAC435", color:"white", border:"5px solid white"}} onClick = {(e)=>{e.preventDefault(); this.setState({destination:"Medium"})}}>Medium</button>{"    "}
                        <button style={{width:"100px", height:"100px", borderRadius:"50%", background:"green", color:"white", border:"5px solid white"}} onClick = {(e)=>{e.preventDefault(); this.setState({destination:"Light"})}}>Light</button>
                        <p>Selected option: {this.state.destination}</p>
                    </div>
                    <div style={{paddingTop:"2%"}}></div>
                    <div class = "container">
                        <h1>Within? </h1>
                        <input type="date" name="deadline" onChange={(e)=>{this.onChangeInput(e)}}/>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                    <button class = "button1" onClick={(e)=>{this.save(e)}}>Start!</button>
                    
                    </div>
                </div>
            }
        }
    }
    render() {
        return this.checkStatus();
    }
}
export default Result;