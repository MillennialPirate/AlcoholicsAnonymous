import React from 'react';
import './Home.css';
import { db } from '../firebase/firebase';
import Info from './Info';
import Risk from './images/high risk.svg';
import Medium from './images/medium.svg';
import Congrats from './images/congrats.svg';
import Dash from './dashboard';
import Profile from './profile';
import Home from './Home';
class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "result",
            uid: this.props.uid,
            level: this.props.level,
            destination: this.props.destination,
            deadline: this.props.deadline,
            pace: this.props.pace,
            tasks: [],
            task: "",
            cntr: 0,
            rate: 0,
            completedTask: 0,
            totalTasks: 0,
            count: 0,
        };
        this.proceed = this.proceed.bind(this);
        this.view = this.view.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.goBack = this.goBack.bind(this);
        this.proceed1 = this.proceed1.bind(this);
    }
    proceed1(e)
    {
        e.preventDefault();
        this.setState({status: "dashboard"});
    }
    async deleteTask(e, id) {
        e.preventDefault();

        
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        var today = new Date();
        var docId = String(monthNames[today.getMonth()] +  " " + today.getDate());
        const ref = db.collection(this.state.uid).doc("Dashboard").collection('Dates');
        const snapshot1 = await ref.get();
        snapshot1.forEach((doc) => {
            if(doc.id === docId)
            {
                this.setState({count : doc.data().count});
            }
        })
        var x = this.state.count;
        this.setState({count: x+1});
        const res1 = await db.collection(this.state.uid).doc('Dashboard').collection('Dates').doc(String(docId)).set({count: x+1});
  
        for (var i = 0; i < this.state.tasks.length; i++) {
            if (this.state.tasks[i].id === id) {
                this.state.tasks.splice(i, 1);
                i--;
            }
        }
        //delete from the databse
        const res = await db.collection(this.state.uid).doc('Activities').collection('activities').doc(String(id)).delete();
        var x = this.state.completedTask;
        this.setState({ completedTask: x - 1 });
        var rate1 = parseInt((this.state.completedTask) / (this.state.totalTasks) * 100);
       
        this.setState({ rate: 100 - rate1 });
        this.setState({ status: "deleted" });
    }
    view(e, task) {
        e.preventDefault();
        this.setState({ task: task });
        this.setState({ status: "view more" });
    }
    proceed(e) {
        e.preventDefault();
        this.setState({ status: "view" });
    }
    async componentDidMount() {
        
        var total = 0;
        if (this.state.pace === "Slow") {
            total = 7;
        }
        else if (this.state.pace === "Medium") {
            total = 5;
        }
        else {
            total = 3;
        }
        this.setState({ totalTasks: total });
        const citiesRef = db.collection(this.state.uid).doc('Activities').collection('activities');
        const snapshot = await citiesRef.get();
        var count = snapshot.size;
        this.setState({ completedTask: count });
        var rate1 = parseInt(((count) / (total)) * 100);
        this.setState({ rate: 100 - rate1 });
        snapshot.forEach(doc => {
            var pace = "Slow";
            if (doc.id === '1') {
                var data = {
                    id: 1,
                    task: doc.data().Task1
                }
                this.state.tasks.push(data);
            }
            if (doc.id === '2') {
                var data = {
                    id: 2,
                    task: doc.data().Task2
                }
                this.state.tasks.push(data);
            }
            if (doc.id === '3') {
                var data = {
                    id: 3,
                    task: doc.data().Task3
                }
                this.state.tasks.push(data);
            }
            if (doc.id === '4') {
                var data = {
                    id: 4,
                    task: doc.data().Task4
                }
                this.state.tasks.push(data);
            }
            if (doc.id === '5') {
                var data = {
                    id: 5,
                    task: doc.data().Task5
                }
                this.state.tasks.push(data);
            }
            if (doc.id === '6') {
                var data = {
                    id: 6,
                    task: doc.data().Task6
                }
                this.state.tasks.push(data);
            }
            if (doc.id === '7') {
                var data = {
                    id: 7,
                    task: doc.data().Task7
                }
                this.state.tasks.push(data);
            }
        });
    }
    goBack(e)
    {
        e.preventDefault();
        this.setState({status: "back"});
    }
    logout(e)
    {
        e.preventDefault();
        this.setState({status: "logout"});
    }

    checkStatus() {
        if (this.state.status === "result") {
            if (this.state.level === "Going Good") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class=  "button1" onClick = {(e) => {this.logout(e)}}>Logout</button>
                    </nav>
                    <h1 style={{ color: "green" }}>{this.state.level}</h1>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div class="container">
                        <div style={{ paddingTop: "2%" }}></div>
                        <h3>Congrats!! You are safe from alcohol addiction. Have a nice day!!</h3>
                        <button class="button1" onClick={(e) => { this.proceed(e) }}>Proceed</button>
                        <div style={{ paddingTop: "2%" }}></div>
                    </div>
                </div>

            }
            if (this.state.level === "Medium Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class=  "button1" onClick = {(e) => {this.logout(e)}}>Logout</button>
                    </nav>
                    <div class = "row">
                        <div class = "col-lg-6 col-md-12">
                        <img src={Medium} style={{ width: "500px", height: "500px" }} />
                    <h1 style={{ color: "#EAC435" }}>{this.state.level}</h1>
                    <button class="button1" onClick={(e) => { this.proceed(e) }}>Proceed</button>
                        </div>
                        <div class = "col-lg-6 col-md-12">
                        
                    <div style={{paddingTop:"2%"}}></div>
                    <h3>View your rate:</h3>
                    <div style={{width:"500px", margin:"auto", paddingTop:"2%"}}>
                        <Dash uid = {this.state.uid}/>
                    </div>
                        </div>
                    </div>

                </div>
            }
            if (this.state.level === "High Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class=  "button1" onClick = {(e) => {this.logout(e)}}>Logout</button>
                    </nav>
                    <div class = "row">
                        <div class = "col-lg-6">
                        <img src={Risk} style={{ width: "500px", height: "500px" }} />
                    <h1 >You are at <span style={{ color: "red" }}>{this.state.level}</span></h1>
                    <p>Please click the button to see the steps you need to follow</p>
                    <button class="button1" onClick={(e) => { this.proceed(e) }}>Proceed</button>
                        </div>
                        <div class = "col-lg-6">
                        <div style={{paddingTop:"2%"}}></div>
                    <h3>View your rate:</h3>
                    <div style={{width:"500px", margin:"auto", paddingTop:"2%", textAlign:"center"}}>
                        <Dash uid = {this.state.uid}/>
                    </div>
                    {
                        this.state.tasks && this.state.tasks.map(task => {
                            return <h1>{task}</h1>
                        })
                    }
                    <div style={{ paddingTop: "5%" }}></div>
                        </div>
                    </div>
                    

                </div>
            }
        }
        if (this.state.status === "view") {
            if (this.state.level === "Going Good") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class = "button1" onClick = {(e) => {e.preventDefault(); this.setState({status: "back"})}}>Go Back</button>
                    </nav>
                    
                    {
                        this.state.rate == 100? <div class ="row"><div class = "col-lg-6 col-md-12"><img src = {Congrats} style={{width:"500px", height:"500px"}}/></div><div class = "col-lg-6 col-md-12"><div style={{paddingTop:"15%"}}><h1 style={{color:"green"}}>Congrats for finishing all the tasks</h1><h5>For further updates subscribe to our mail letter!</h5><button class = "button1">subscribe</button></div></div></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}%</h2></div>
                    }

<div style={{ textAlign: "center" }}>
                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1" style={{width:"50%", margin: "auto"}}>
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>
                                })
                            }
                        </ul>
                    </div>
                </div>

            }
            if (this.state.level === "Medium Risk") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class = "button1" onClick = {(e) => {e.preventDefault(); this.setState({status: "back"})}}>Go Back</button>
                    </nav>
                    
                    {
                        this.state.rate == 100? <div class ="row"><div class = "col-lg-6 col-md-12"><img src = {Congrats} style={{width:"500px", height:"500px"}}/></div><div class = "col-lg-6 col-md-12"><div style={{paddingTop:"15%"}}><h1 style={{color:"green"}}>Congrats for finishing all the tasks</h1><h5>For further updates subscribe to our mail letter!</h5><button class = "button1">subscribe</button></div></div></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}%</h2></div>
                    }
                    <div style={{ textAlign: "center" }}>
                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1" style={{width:"50%", margin: "auto"}}>
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
            if (this.state.level === "High Risk") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class = "button1" onClick = {(e) => {e.preventDefault(); this.setState({status: "back"})}}>Go Back</button>
                    </nav>
                    {
                        this.state.rate == 100? <div class ="row"><div class = "col-lg-6 col-md-12"><img src = {Congrats} style={{width:"500px", height:"500px"}}/></div><div class = "col-lg-6 col-md-12"><div style={{paddingTop:"15%"}}><h1 style={{color:"green"}}>Congrats for finishing all the tasks</h1><h5>For further updates subscribe to our mail letter!</h5><button class = "button1">subscribe</button></div></div></div>:  <div><h1 style={{ color: "red" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}%</h2></div>
                    }
                    <div style={{ textAlign: "center" }}>
                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1" style={{width:"50%", margin: "auto"}}>
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>
                                })
                            }
                        </ul>
                    </div>
                    <div style={{paddingTop:"5%"}}></div>
                </div>
            }
        }
        if (this.state.status === "deleted") {
            if (this.state.level === "Going Good") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class = "button1" onClick = {(e) => {e.preventDefault(); this.setState({status: "back"})}}>Go Back</button>
                    </nav>
                    {
                        this.state.rate == 100? <div class ="row"><div class = "col-lg-6 col-md-12"><img src = {Congrats} style={{width:"500px", height:"500px"}}/></div><div class = "col-lg-6 col-md-12"><div style={{paddingTop:"15%"}}><h1 style={{color:"green"}}>Congrats for finishing all the tasks</h1><h5>For further updates subscribe to our mail letter!</h5><button class = "button1">subscribe</button></div></div></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}%</h2></div>
                    }
                    <div style={{ textAlign: "center" }}>
                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1" style={{width:"50%", margin: "auto"}}>
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>
                                })
                            }
                        </ul>
                    </div>
                </div>

            }
            if (this.state.level === "Medium Risk") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class = "button1" onClick = {(e) => {e.preventDefault(); this.setState({status: "back"})}}>Go Back</button>
                    </nav>
                    {
                        this.state.rate == 100? <div class ="row"><div class = "col-lg-6 col-md-12"><img src = {Congrats} style={{width:"500px", height:"500px"}}/></div><div class = "col-lg-6 col-md-12"><div style={{paddingTop:"15%"}}><h1 style={{color:"green"}}>Congrats for finishing all the tasks</h1><h5>For further updates subscribe to our mail letter!</h5><button class = "button1">subscribe</button></div></div></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}%</h2></div>
                    }
                    <div style={{ textAlign: "center" }}>
                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1" style={{width:"50%", margin: "auto"}}>
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
            if (this.state.level === "High Risk") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div><button class = "button1" onClick = {(e) => {e.preventDefault(); this.setState({status: "back"})}}>Go Back</button>
                    </nav>
                    {
                        this.state.rate == 100? <div class ="row"><div class = "col-lg-6 col-md-12"><img src = {Congrats} style={{width:"500px", height:"500px"}}/></div><div class = "col-lg-6 col-md-12"><div style={{paddingTop:"15%"}}><h1 style={{color:"green"}}>Congrats for finishing all the tasks</h1><h5>For further updates subscribe to our mail letter!</h5><button class = "button1">subscribe</button></div></div></div>:  <div><h1 style={{ color: "red" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}%</h2></div>
                    }
                    <div style={{ textAlign: "center" }}>
                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1" style={{width:"50%", margin: "auto"}}>
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>
                                })
                            }
                        </ul>
                    </div>
                    <div style={{paddingBottom:'5%'}}></div>
                </div>
            }
        }
        if (this.state.status === "view more") {
            return <Info task={this.state.task} uid={this.state.uid} deadline={this.state.deadline} pace={this.state.pace} level={this.state.level} />
        }
        if(this.state.status === "dashboard")
        {
            return <Dash uid = {this.state.uid}/>
        }
        if(this.state.status === "back")
        {
            return <Profile status = "result" uid={this.state.uid} level ={this.state.level} destination = {this.state.destination} pace= {this.state.pace} deadline={this.state.deadline}/>
        }
        if(this.state.status === "done")
        {
            return <h1>Done!!</h1>
        }
        if(this.state.status === "logout")
        return <Home/>
    }
    render() {
        return this.checkStatus();
    }
}
export default Result;