import React from 'react';
import './Home.css';
import Img1 from './images/image1.png';
import Login from './register';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "home"
    };
    this.changeLogin = this.changeLogin.bind(this);
  }
  changeLogin(e)
  {
    e.preventDefault();
    this.setState({status: "login"});
  }
  checkStatus() {
    if (this.state.status === "home") {
      return <div>
        <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
          <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
        </nav>
        <div style={{ paddingTop: "5%" }}></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
              <div style={{ paddingTop: "5%" }}></div>
              <h1 style={{ fontWeight: "bolder" }}>Welcome to <span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous!</h1>
              <p style={{ fontSize: "1.5rem" }}>Getting over addictions has never been easier!</p>
              <button class="button1" style={{width:"200px"}} onClick = {(e) => {this.changeLogin(e)}} >Start today !</button>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
              <img src={Img1} style={{ height: "300px", width: "500px" }} />
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2%" }}></div>
        <div style={{ paddingTop: "5%", paddingBottom: "5%", background: "black" }}>
          <div class="container" style={{ textAlign: "center", color: "white" }}>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="card mb-3" style={{ height: "auto", maxWidth: "540px", background: "#020001" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{ height: "100%", width: "300px", borderRadius: "5%" }} alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text" style={{ fontSize: "1.5rem" }}>Start a disciplined life with ease!</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="card mb-3" style={{ height: "auto", maxWidth: "540px", background: "#020001" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRofGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" style={{ height: "100%", width: "300px", borderRadius: "5%" }} alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <p class="card-text" style={{ fontSize: "1.5rem" }}>Keep track of your daily activities!</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="feat bg-gray pt-5 pb-5">
            <div class="container" style={{ textAlign: "center" }}>
              <h1 style={{ fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Features </span> we offer!</h1>
              <div style={{ paddingTop: "5%" }}></div>
              <div class="row">

                <div class="col-lg-4 col-sm-6">
                  <div class="item">
                    <span class="icon feature_box_col_one ">
                      <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" class="bi pb-2 bi-award" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z" />
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                      </svg>
                    </span>
                    <h6>Trusted</h6>
                    <p>Trust us and follow the tips we give to you and see faster results!</p>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="item">
                    <span class="icon feature_box_col_two">
                      <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" class="bi pb-2 bi-blockquote-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        <path d="M12.168 6.352c.184.105.332.197.445.275.114.074.229.174.346.299.11.117.193.24.252.369s.1.295.123.498h-.281c-.243 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.436 2.436 0 0 0-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287l-.211.352zm-2.168 0c.184.105.332.197.445.275.114.074.229.174.346.299.113.12.2.246.258.375.055.125.094.289.117.492h-.281c-.242 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.438 2.438 0 0 0-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287L10 6.352z" />
                      </svg>
                    </span>
                    <h6>The best reviews</h6>
                    <p>Voted the best among guiding people having addictions!</p>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="item">
                    <span class="icon feature_box_col_three">
                      <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi pb-2 bi-book-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                      </svg>
                    </span>
                    <h6>Specific tips</h6>
                    <p>Tips provided according to your own problem so that you can track yourself!</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        
<div class="footer">
  <div class="contain" style={{textAlign:"center"}}>
<div class="clearfix" style={{paddingTop:"2%",paddingBottom:"5%", textAlign:"center"}}>

</div>
<div style={{paddingBottom: "5%"}}>
<button class = "buttonLink"><a href = "https://github.com/DiligentCoder-20022001/AlcoholicsAnonymous" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png"/></a></button>{ "   "}
<button class = "buttonLink"><a href = "https://siddharthschandran44.medium.com/" target="_blank"><img src="https://img.icons8.com/ios-filled/48/000000/medium-logo.png"/></a></button>{ "   "}
<button class = "buttonLink"><a href = "https://www.linkedin.com/in/siddharth-s-chandran-1b96311b9/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a></button>{ "   "}
<button class = "buttonLink"><a href = "mailto:siddharthschandran45@gmail.com" target="_blank"><img src="https://img.icons8.com/color/48/000000/gmail.png"/></a></button>{ "   "}
</div>
<h1 style={{color:"white", fontWeight:"bolder"}}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</h1>
</div>
</div>
      </div>
    }
    if(this.state.status === "login")
    {
      return <Login/>;
    }
  }
  render() {
    return this.checkStatus();
  }
}
export default Home;