import React from 'react';
import './Home.css';
import {db} from '../firebase/firebase';
import Home from './Home';
import Happy from './happy.svg';
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "result",
            uid: this.props.uid,
            level: this.props.level,
            destination: "",
            deadline:"",
            pace: "",
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.save = this.save.bind(this);
        this.return = this.return.bind(this);
    }
    return(e)
    {
        e.preventDefault();
        this.setState({status:"Home"});
    }
    async save(e)
    {
        e.preventDefault();
        console.log("Clicked");
        
        const today = new Date();
        const dead = new Date(this.state.deadline);
        const dif1 = dead.getTime() - today.getTime();
        const dif = Math.round(dif1/(1000*3600*24));
        console.log(dif);
        console.log(this.state);
        var x = "Slow";
        if(this.state.level === "Going good")
        {
            this.setState({status: "Home"});
        }
        else if(this.state.level === "Medium Risk")
        {
            
            if(dif > 50)
            {
                x = "Slow";
            }
            else if(dif > 30)
            {
                x = "Medium";
            }
            else if(dif > 21)
            {
                x = "Fast";
            }
            else 
            {
                window.alert("Please select a gap of 21 days");

                return;
            }
        }
        else if(this.state.level === "High Risk")
        {
            if(this.state.destination === "Light")
            {
                x = "Fast";
            }
            else 
            {
                console.log("Hello");
                if(dif > 50)
                {
                    x = "Slow";
                }
                else if(dif > 30)
                {
                    x = "Medium";
                }
                else if(dif > 21)
                {
                    x = "Fast";
                }
                else 
                {
                    window.alert("Please select a gap of 21 days");
                    return;
                }
            }
        }
        console.log(x);
        this.setState({pace: x});
        this.state.pace = x;
        console.log(this.state.pace);
        if(this.state.pace === "Slow")
        {
            console.log("Slow");
            const res1 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('1').set({
                Task1: "Go for morning walks everyday",
              });
            const res2 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('2').set({
            Task2: "Try out yoga",
            });
            const res3 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('3').set({
            Task3: "Find a community",
            });
            const res4 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('4').set({
            Task4: "Find a new favourite non alcoholic drink",
            });
            const res5 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('5').set({
            Task5: "Rediscover hobies",
            });
            const res6 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('6').set({
            Task6: "Try taking gaps between alcohol intake",
            });
            const res7 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('7').set({
            Task7: "Maintain a log book or a journal"
            });

              
        }
        else if(this.state.pace === "Medium")
        {
            console.log("Medium");
            const res1 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('1').set({
                Task1: "Go for morning walks everyday",
              });
            const res2 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('2').set({
            Task2: "Try out yoga",
            });
            const res3 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('3').set({
            Task3: "Find a community",
            });
            const res4 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('4').set({
            Task4: "Find a new favourite non alcoholic drink",
            });
            const res5 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('5').set({
            Task5: "Rediscover hobies",
            });
        }
        else 
        {
            console.log("Fast");
            const res1 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('1').set({
                Task1: "Go for morning walks everyday",
              });
            const res2 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('2').set({
            Task2: "Try out yoga",
            });
            const res3 = await db.collection(this.state.uid).doc('Activities').collection('activities').doc('3').set({
            Task3: "Find a community",
            });
        }
        const res = await db.collection(this.state.uid).doc('Information').set({
            CurrentLevel: this.state.level,
            deadline : this.state.deadline,
            DestinationLevel: this.state.destination,
            Pace: this.state.pace
          });
        window.alert("Account created! Please login again to follow the next steps");
        this.setState({status: "Home"});
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
                    <img src = {Happy} style={{width:"400px", height:"400px"}}/>
                    <div style={{paddingTop:"2%"}}></div>
                    <div class="container" style={{background:"#f1f1f1"}}>
                        <div style={{paddingTop:"2%"}}></div>
                        <h3>Congrats!! You have reached the green stage which indicates your discipline in life. Keep up the good work!! You need not take any of our plans.</h3>
                        <button class = "button1" onClick ={(e) => {this.return(e)}}>Return</button>
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
                        <p>Selected option: Light (Default)</p>
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
        if(this.state.status === "Home")
        {
            return <Home/>
        }
    }
    render() {
        return this.checkStatus();
    }
}
export default Result;