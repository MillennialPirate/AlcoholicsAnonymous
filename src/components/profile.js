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
            destination: this.props.destination,
            deadline:this.props.deadline, 
            pace: this.props.pace,
            tasks: []
        };
        this.proceed = this.proceed.bind(this);
    }
    proceed(e)
    {
        e.preventDefault();
        this.setState({status: "view"});
    }
    async componentDidMount()
    {
        console.log(this.state);
        if(this.state.pace === "Slow")
        {
            console.log("Slow");
        }
        else if(this.state.pace === "Medium")
        {
            console.log("Medium");
        }
        else if(this.state.pace === "Fast")
        {
            console.log("Fast");
        }
        const citiesRef = db.collection(this.state.uid);
        const snapshot = await citiesRef.get();
        snapshot.forEach(doc => {
            var pace = "Slow";
            if(doc.id === "Activities")
            {
                console.log(doc.id, '=>', doc.data());
                if(this.state.pace === "Slow")
                {
                    this.state.tasks.push(doc.data().Task1);
                    this.state.tasks.push(doc.data().Task2);
                    this.state.tasks.push(doc.data().Task3);
                    this.state.tasks.push(doc.data().Task4);
                    this.state.tasks.push(doc.data().Task5);
                    this.state.tasks.push(doc.data().Task6);
                    this.state.tasks.push(doc.data().Task7);
                }
                else if(this.state.pace === "Medium")
                {
                    this.state.tasks.push(doc.data().Task1);
                    this.state.tasks.push(doc.data().Task2);
                    this.state.tasks.push(doc.data().Task3);
                    this.state.tasks.push(doc.data().Task4);
                    this.state.tasks.push(doc.data().Task5);
                }
                else 
                {
                    this.state.tasks.push(doc.data().Task1);
                    this.state.tasks.push(doc.data().Task2);
                    this.state.tasks.push(doc.data().Task3);
                    this.state.tasks.push(doc.data().Task4);
                }
            }
        });
        console.log(this.state.tasks);
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
                        <h3>Congrats!! You have reached the green stage which indicates your discipline in life. Keep up the good work!! You need not take any of our recommendations!</h3>
                        <button class = "button1" onClick = {(e) => {this.proceed(e)}}>Proceed</button>
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
                    <button class = "button1" onClick = {(e) => {this.proceed(e)}}>Proceed</button>
                    
                </div>
            }
            if (this.state.level === "High Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <h1 style={{ color: "red" }}>{this.state.level}</h1>
                    <button class = "button1" onClick = {(e) => {this.proceed(e)}}>Proceed</button>
                    {
                        this.state.tasks && this.state.tasks.map(task => {
                            return <h1>{task}</h1>
                        })
                    }
                    <div style={{paddingTop:"5%"}}></div>
                    
                </div>
            }
        }
        if(this.state.status === "view")
        {
            if (this.state.level === "Going Good") {
                return <div class = "container" style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <h1 style={{ color: "green" }}>{this.state.level}</h1>
                <h2 style={{textAlign:"left"}}>Practice this for next few days till {this.state.deadline}!!</h2>
                <div style={{textAlign:"left"}}>
                
                
                <ul>
                {
                    this.state.tasks && this.state.tasks.map(task => {
                        return <div>
                            <div style={{paddingTop:"2%"}}></div>
                        <div class="card1 card-1">
                        <h3>{task}</h3>
                        <button class="button1">View more</button>{"    "}<button class="button1">Completed</button>
                    </div></div>
                    })
                }
                </ul>
                </div>
            </div>

            }
            if (this.state.level === "Medium Risk") {
                return <div class = "container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <h1 style={{ color: "#EAC435" }}>{this.state.level}</h1>
                    <h2 style={{textAlign:"left"}}>Practice this for next few days till {this.state.deadline}!!</h2>
                    <div style={{textAlign:"left"}}>
                    
                    
                    <ul>
                    {
                        this.state.tasks && this.state.tasks.map(task => {
                            return <div>
                                <div style={{paddingTop:"2%"}}></div>
                            <div class="card1 card-1">
                            <h3>{task}</h3>
                            <button class="button1">View more</button>{"    "}<button class="button1">Completed</button>
                        </div></div>
                        })
                    }
                    </ul>
                    </div>
                </div>
            }
            if (this.state.level === "High Risk") {
                return <div class = "container" style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <h1 style={{ color: "red" }}>{this.state.level}</h1>
                <h2 style={{textAlign:"left"}}>Practice this for next few days till {this.state.deadline}!!</h2>
                <div style={{textAlign:"left"}}>
                
                
                <ul>
                {
                    this.state.tasks && this.state.tasks.map(task => {
                        return <div>
                            <div style={{paddingTop:"2%"}}></div>
                        <div class="card1 card-1">
                        <h3>{task}</h3>
                        <button class="button1">View more</button>{"    "}<button class="button1">Completed</button>
                    </div></div>
                    })
                }
                </ul>
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