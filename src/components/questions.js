import React from 'react';
import './Home.css';
import Result from './result';
class Questions extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
        
        this.onChangeInput = this.onChangeInput.bind(this);

    }
    onChangeInput(e)
    {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.id;
        this.setState({[name]: value});
        if(name === "answer1")
        {
            if(value === "a")
            {
                this.setState({frequency:4});
            }
            else if(value === "b")
            {
                this.setState({frequency: 2});
            }
            else if(value === "c")
            {
                this.setState({frequency: 1});
            }
            else 
            {
                this.setState({frequency:0});
            }
        }
        if(name === "answer2")
        {
            if(value === "a1")
            {
                this.setState({units: 2});
            }
            else if(value === "b1")
            {
                this.setState({units: 4});
            }
            else if(value === "c1")
            {
                this.setState({units: 8});
            }
            else if(value === "d1")
            {
                this.setState({units: 10});
            }
        }
        var x = this.state.frequency*this.state.units;
        this.setState({totalUnits: x});
        if(name === "answer3")
        {
            if(value === "a2")
            {
                this.setState({age: 25});
            }
            else 
            {
                this.setState({age:35});
            }
        }
        if(this.state.age > 30)
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
        console.log(this.state.totalUnits);
    }
    checkStatus() {
        if (this.state.status === "first") {
            return <div style={{ textAlign: "center" }}>
                <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                    <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                </nav>
                <div style={{ paddingTop: "2%" }}></div>
                <div class="container"  >
                <h1>Answer the following questionnaire (Please double click the options for recording correct answers!)</h1>
                    <div class="container" onChange = {(e) => {this.onChangeInput(e)}}>
                        <div class="quiz-container" id="quiz" style={{width:"75%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">How often do you have an alcoholic drink?</h2>
                                <ul >
                                    <li>
                                        <input type="radio" name="answer1" id="a" class="answer" />
                                        <label for="a" >Every week</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer1" id="b" class="answer" />
                                        <label for="b" >Twice a month or more</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer1" id="c" class="answer" />
                                        <label for="c" >Once a month or more</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="answer1" id="d" class="answer" />
                                        <label for="c" >Never</label>
                                    </li>
                                </ul>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); this.setState({status:"second"})}}>Next</button>
                        </div>
                    </div>
                    <div style={{paddingBottom:"5%"}}></div>
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
                <h1>Answer the following questionnaire (Please double click the options for recording correct answers!)</h1>
                    <div class="container" onChange = {(e) => {this.onChangeInput(e)}}>
                        <div class="quiz-container" id="quiz" style={{width:"75%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">How many units of alcohol do you drink in a typical day when you are drinking?</h2>
                                <ul >
                                    <li>
                                        <input type="radio" name="answer2" id="a1" class="answer" />
                                        <label for="a1" >1 to 3</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer2" id="b1" class="answer" />
                                        <label for="b1" >3 to 6</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer2" id="c1" class="answer" />
                                        <label for="c1" >6 to 9</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="answer2" id="d1" class="answer" />
                                        <label for="d1" >Above 10</label>
                                    </li>
                                </ul>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); this.setState({status:"third"})}}>Next</button>
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
                <h1>Answer the following questionnaire (Please double click the options for recording correct answers!)</h1>
                    <div class="container" onChange = {(e) => {this.onChangeInput(e)}}>
                        <div class="quiz-container" id="quiz" style={{width:"75%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">Enter your age group:</h2>
                                <ul >
                                    <li>
                                        <input type="radio" name="answer3" id="a2" class="answer" />
                                        <label for="a2" >18-30</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer3" id="b2" class="answer" />
                                        <label for="b2" >30-50</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer3" id="c2" class="answer" />
                                        <label for="c2" >50-70</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="answer3" id="d2" class="answer" />
                                        <label for="d2" >70+</label>
                                    </li>
                                </ul>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); this.setState({status:"fourth"})}}>Next</button>
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
                    <h1>Answer the following questionnaire (Please double click the options for recording correct answers!)</h1>
                    <div class="container" onChange = {(e) => {this.onChangeInput(e)}}>
                        <div class="quiz-container" id="quiz" style={{width:"75%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">Enter your gender</h2>
                                <ul >
                                    <li>
                                        <input type="radio" name="answer4" id="a" class="answer" />
                                        <label for="a3" >Male</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer4" id="b" class="answer" />
                                        <label for="b3" >Female</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer4" id="c" class="answer" />
                                        <label for="c3" >Other</label>
                                    </li>
                                </ul>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); this.setState({status:"fifth"})}}>Next</button>
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
                <h1>Answer the following questionnaire (Please double click the options for recording correct answers!)</h1>
                    <div class="container" onChange = {(e) => {this.onChangeInput(e)}}>
                        <div class="quiz-container" id="quiz" style={{width:"75%", margin:"auto"}}>
                            <div class="quiz-header">
                                <h2 id="question">Have you or somebody else been injured as a result of your drinking?</h2>
                                <ul >
                                    <li>
                                        <input type="radio" name="answer5" id="a" class="answer" />
                                        <label for="a4" >Never</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer5" id="b" class="answer" />
                                        <label for="b4" >Years before</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer5" id="c" class="answer" />
                                        <label for="c4" >Months before</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="answer5" id="d" class="answer" />
                                        <label for="d4" >Weeks before</label>
                                    </li>
                                </ul>
                            </div>
                            <button id="submit" class="button4" onClick = {(e) => {e.preventDefault(); console.log(this.state.level); this.setState({status:"results"})}}>Submit</button>
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