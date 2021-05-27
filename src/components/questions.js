import React from 'react';
import './Home.css';
import Pic1 from './images/alcohol.svg';
import Result from './result';
import Pic2 from './images/units.svg';
import Age from './images/age.svg';
import Gender from './images/gender.svg';
import Injury from './images/injury.svg';
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: this.props.uid,
            status: "first",
            answer1:"",
            answer2:"",
            answer3:"",
            answer4:"",
            answer5:"",
            frequency:0,
            units: 0,
            totalUnits:0,
            age:0,
            level:""
        };
        this.next3 = this.next3.bind(this);
        this.next2 = this.next2.bind(this);
    }
    next3(e)
    {
        e.preventDefault();
        if(this.state.age > 40)
        {
            if(this.state.totalUnits <= 15)
            {
                this.setState({level: "Going Good"});
            }
            else if(this.state.totalUnits <= 30)
            {
                this.setState({level: "Medium Risk"});
            }
            else 
            {
                this.setState({level: "High Risk"});
            }
        }
        else 
        {
            if(this.state.totalUnits <= 10)
            {
                this.setState({level: "Going Good"});
            }
            else if(this.state.totalUnits <= 20)
            {
                this.setState({level: "Medium Risk"});
            }
            else 
            {
                this.setState({level: "High Risk"});
            }
        }
        ;
        this.setState({status: "fourth"});
    }
    next2(e)
    {
        e.preventDefault();
        var x = this.state.frequency*this.state.units;
        this.setState({totalUnits: x});

        this.setState({status:"third"});
    }

    
    checkStatus() {
        if (this.state.status === "first") {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <div style={{ paddingTop: "2%" }}></div>
                <div class="container"  >
                <h1>Help us know you more!</h1><div style={{paddingTop:"2%"}}></div>
                <div class = "row">
                    <div class = "col-lg-6 col-md-12">
                        <img src = {Pic1} class = "side"/>
                    </div>
                    <div class = "col-lg-6 col-md-12">
                    
                    <div class="container" >
                        <div class="quiz-container" id="quiz" style={{width:"100%", margin:"auto", textAlign:"center"}}>
                            <div class="quiz-header" >
                                <h2 id="question">How often do you have an alcoholic drink?</h2>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({frequency: 4})}}>Every week</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({frequency: 2})}}>Twice a month or more</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({frequency: 1})}}>Once a month or more</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({frequency: 0})}}>Never</button><br/><br/>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); this.setState({status:"second"})}}>Next</button>
                        </div>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                    </div>
                </div>
                </div>
            </div>
        }
        if(this.state.status === "second")
        {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <div style={{ paddingTop: "2%" }}></div>
                <div class="container" >
                
                    <div class="container" >
                    <h1>Help us know you more!</h1><div style={{paddingTop:"2%"}}></div>
                        <div class = "row">

                            
                            <div class = "col-lg-6 col-md-12">
                                <img src = {Pic2} class = "side"/>
                            </div>
                            <div class = "col-lg-6 col-md-12">
                            <div class="quiz-container" id="quiz" style={{width:"100%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">How many units of alcohol do you drink in a typical day when you are drinking?</h2>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({units: 2})}}>1 to 3</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({units: 4})}}>3 to 6</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({units: 8})}}>6 to 9</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({units: 10})}}>Above 10</button><br/><br/>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {this.next2(e)}}>Next</button>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                </div>
            </div>
        }
        if(this.state.status === "third")
        {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <div style={{ paddingTop: "2%" }}></div>
                <div class="container" >
                <h1>Help us know you more!</h1><div style={{paddingTop:"2%"}}></div>
                    <div class="container" >
                        <div class = "row">
                            <div class = "col-lg-6 col-md-12">
                                <img src = {Age} class = "side"/>
                            </div>
                            <div class = "col-lg-6 col-md-12">

                            <div class="quiz-container" id="quiz" style={{width:"100%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">Enter your age group:</h2>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({age: 25}); }}>18 to 30</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({age: 25})}}>30 to 50</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({age: 40})}}>50 to 70</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); this.setState({age: 40})}}>Above 70</button><br/><br/>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {this.next3(e)}}>Next</button>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                </div>
            </div>
        }
        if(this.state.status === "fourth")
        {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <div style={{ paddingTop: "2%" }}></div>
                <div class="container" >
                <h1>Help us know you more!</h1><div style={{paddingTop:"2%"}}></div>
                    <div class="container" >
                        <div class = "row">
                            
                            <div class = "col-lg-6 col-md-12">
                                <img src = {Gender} class = "side"/>
                            </div>
                            <div class = "col-lg-6 col-md-12">
                            <div class="quiz-container" id="quiz" style={{width:"100%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">Enter your gender</h2>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Male</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Female</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Other</button><br/><br/>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); this.setState({status:"fifth"})}}>Next</button>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                </div>
            </div>
        }
        if(this.state.status === "fifth")
        {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <div style={{ paddingTop: "2%" }}></div>
                <div class="container" >
                <h1>Help us know you more!</h1><div style={{paddingTop:"2%"}}></div>
                    <div class="container" >
                        <div class = "row">
                            <div class = "col-lg-6 col-md-12">
                                <img src = {Injury} class = "side"/>
                            </div>
                            <div class = "col-lg-6 col-md-12">
                            <div class="quiz-container" id="quiz" style={{width:"100%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">Have you or somebody else been injured as a result of your drinking?</h2>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Never</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Years before</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Months before</button><br/><br/>
                                <button class = "option" onClick = {(e) => {e.preventDefault(); }}>Weeks before</button><br/><br/>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); ; this.setState({status:"results"})}}>Submit</button>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
                </div>
            </div>
            
        }
        if(this.state.status === "results")
        {
            return <Result uid={this.state.uid} level = {this.state.level}/>
        }
    }
    render() {
        return this.checkStatus();
    }
}
export default Questions;