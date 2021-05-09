import React from 'react';
import './Home.css';
import { db } from '../firebase/firebase';
import Info from './Info';
import Risk from './high risk.svg';
import Medium from './medium.svg';
import Congrats from './congrats.svg';
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

        };
        this.proceed = this.proceed.bind(this);
        this.view = this.view.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    async deleteTask(e, id) {
        e.preventDefault();
        console.log(id);
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
        console.log(task);

        this.setState({ task: task });
        this.setState({ status: "view more" });
    }
    proceed(e) {
        e.preventDefault();
        console.log(this.state.rate);
        this.setState({ status: "view" });
    }
    async componentDidMount() {
        console.log(this.state);
        if (this.state.pace === "Slow") {
            console.log("Slow");
        }
        else if (this.state.pace === "Medium") {
            console.log("Medium");
        }
        else if (this.state.pace === "Fast") {
            console.log("Fast");
        }
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
        console.log(total);
        this.setState({ totalTasks: total });

        console.log(this.state.totalTasks);
        const citiesRef = db.collection(this.state.uid).doc('Activities').collection('activities');
        const snapshot = await citiesRef.get();
        var count = snapshot.size;
        console.log(count);
        this.setState({ completedTask: count });
        var rate1 = parseInt(((count) / (total)) * 100);
        this.setState({ rate: 100 - rate1 });
        snapshot.forEach(doc => {
            var pace = "Slow";
            console.log(doc.id, '=>', doc.data());
            // if(this.state.pace === "Slow")
            // {
            //     this.state.tasks.push(doc.data().Task1);
            //     this.state.tasks.push(doc.data().Task2);
            //     this.state.tasks.push(doc.data().Task3);
            //     this.state.tasks.push(doc.data().Task4);
            //     this.state.tasks.push(doc.data().Task5);
            //     this.state.tasks.push(doc.data().Task6);
            //     this.state.tasks.push(doc.data().Task7);
            // }
            // else if(this.state.pace === "Medium")
            // {
            //     this.state.tasks.push(doc.data().Task1);
            //     this.state.tasks.push(doc.data().Task2);
            //     this.state.tasks.push(doc.data().Task3);
            //     this.state.tasks.push(doc.data().Task4);
            //     this.state.tasks.push(doc.data().Task5);
            // }
            // else 
            // {
            //     this.state.tasks.push(doc.data().Task1);
            //     this.state.tasks.push(doc.data().Task2);
            //     this.state.tasks.push(doc.data().Task3);
            //     this.state.tasks.push(doc.data().Task4);
            // }
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
        // if(this.state.pace === "Slow")
        // {
        //     var toBe = 7 - count; 
        //     var percent = ((toBe/7)*100);
        //     console.log(percent);
        //     this.setState({rate: percent});
        // }
        // else if(this.state.pace === "Medium")
        // {
        //     var toBe = 5 - count; 
        //     var percent = ((toBe/5)*100);
        //     console.log(percent);
        //     this.setState({
        //         rate: percent,
        //     })
        // }
        // else 
        // {
        //     var toBe = 3 - count; 
        //     var percent = ((toBe/3)*100);
        //     console.log(percent);
        // }
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
                    <div style={{ paddingTop: "5%" }}></div>
                    <div class="container">
                        <div style={{ paddingTop: "2%" }}></div>
                        <h3>Congrats!! You have reached the green stage which indicates your discipline in life. Keep up the good work!! You need not take any of our recommendations!</h3>
                        <button class="button1" onClick={(e) => { this.proceed(e) }}>Proceed</button>
                        <div style={{ paddingTop: "2%" }}></div>
                    </div>
                </div>

            }
            if (this.state.level === "Medium Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <img src={Medium} style={{ width: "500px", height: "500px" }} />
                    <h1 style={{ color: "#EAC435" }}>{this.state.level}</h1>
                    <button class="button1" onClick={(e) => { this.proceed(e) }}>Proceed</button>

                </div>
            }
            if (this.state.level === "High Risk") {
                return <div style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <img src={Risk} style={{ width: "500px", height: "500px" }} />
                    <h1 >You are at <span style={{ color: "red" }}>{this.state.level}</span></h1>
                    <p>Please click the button to see the steps you need to follow</p>
                    <button class="button1" onClick={(e) => { this.proceed(e) }}>Proceed</button>
                    {
                        this.state.tasks && this.state.tasks.map(task => {
                            return <h1>{task}</h1>
                        })
                    }
                    <div style={{ paddingTop: "5%" }}></div>

                </div>
            }
        }
        if (this.state.status === "view") {
            if (this.state.level === "Going Good") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    
                    {
                        this.state.rate == 100? <div><img src = {Congrats} style={{width:"500px", height:"500px"}}/><h1 style={{color:"green"}}>Congrats, you have successfully overcome your addictions!!</h1></div>:  <div><h1 style={{ color: "green" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}</h2></div>
                    }

                    <div style={{ textAlign: "left" }}>


                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1">
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
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    
                    {
                        this.state.rate == 100? <div><img src = {Congrats} style={{width:"500px", height:"500px"}}/><h1 style={{color:"green"}}>Congrats, you have successfully overcome your addictions!!</h1></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}</h2></div>
                    }
                    <div style={{ textAlign: "left" }}>


                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1">
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
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    {
                        this.state.rate == 100? <div><img src = {Congrats} style={{width:"500px", height:"500px"}}/><h1 style={{color:"green"}}>Congrats, you have successfully overcome your addictions!!</h1></div>:  <div><h1 style={{ color: "red" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}</h2></div>
                    }
                    <div style={{ textAlign: "left" }}>


                        <ul>
                            {

                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1">
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>

                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        }
        if (this.state.status === "deleted") {
            if (this.state.level === "Going Good") {
                return <div class="container" style={{ textAlign: "center" }}>
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    {
                        this.state.rate == 100? <div><img src = {Congrats} style={{width:"500px", height:"500px"}}/><h1 style={{color:"green"}}>Congrats, you have successfully overcome your addictions!!</h1></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}</h2></div>
                    }
                    <div style={{ textAlign: "left" }}>


                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1">
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
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    {
                        this.state.rate == 100? <div><img src = {Congrats} style={{width:"500px", height:"500px"}}/><h1 style={{color:"#EAC435"}}>Congrats, you have successfully overcome your addictions!!</h1></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}</h2></div>
                    }
                    <div style={{ textAlign: "left" }}>


                        <ul>
                            {
                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1">
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
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <h1 style={{ color: "red" }}>{this.state.level}</h1>
                    {
                        this.state.rate == 100? <div><img src = {Congrats} style={{width:"500px", height:"500px"}}/><h1 style={{color:"red"}}>Congrats, you have successfully overcome your addictions!!</h1></div>:  <div><h1 style={{ color: "#EAC435" }}>{this.state.level}</h1><h2 style={{ textAlign: "center" }}>Practice this for next few days till {this.state.deadline}!!</h2>
                        <h2 style={{ textAlign: "center" }}>Current Pace: {this.state.rate}</h2></div>
                    }
                    <div style={{ textAlign: "left" }}>


                        <ul>
                            {

                                this.state.tasks && this.state.tasks.map(task => {
                                    this.state.cntr = this.state.cntr + 1;
                                    return <div>
                                        <div style={{ paddingTop: "2%" }}></div>
                                        <div class="card1 card-1">
                                            <h3>{task.task}</h3>
                                            <button class="button1" onClick={(e) => { this.view(e, task.task) }}>View more</button>{"    "}<button class="button1" onClick={(e) => { this.deleteTask(e, task.id) }}>Completed</button>
                                        </div></div>

                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        }
        if (this.state.status === "view more") {
            return <Info task={this.state.task} uid={this.state.uid} deadline={this.state.deadline} pace={this.state.pace} level={this.state.level} />
        }

    }
    render() {
        return this.checkStatus();
    }
}
export default Result;