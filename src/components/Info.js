import React from 'react';
import './Home.css';
import Walk from './images/walk.svg';
import Profile from './profile';
import Yoga from './images/yoga.svg';
import Community from './images/community.svg';
import Drink from './images/drink.svg';
import Gap from './images/gap.svg';
import Diary from './images/diary.svg';
import Hobby from './images/Hobby.svg';
class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "info",
            task: this.props.task,
            level: this.props.level,
            deadline: this.props.deadline,
            pace: this.props.pace,
            uid: this.props.uid
        };
        this.goBack = this.goBack.bind(this);
    }
    goBack(event) {
        event.preventDefault();
        this.setState({ status: "back" })
    }
    checkStatus() {
        if (this.state.status === "info") {

            if (this.state.task === "Go for morning walks everyday") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Walk} style={{ height: "500px", width: "500px" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>

                            <p>A morning walk is a very useful exercise taken in the early hours of the morning. It is a time when the mind is fresh and the body is active. It is rightly said, “Early to bed and early rise, makes a man healthy, wealthy and wise.” Many people go out for a walk daily in the morning. I too go for a morning walk daily. One gets used to it with the passage of time. It requires a lot of conditioning in the beginning. A morning walker takes delight in finding himself in the open on the familiar road at the appointed hour. I go up to the canal bank about
                            two kilometers from the city. It is worth going and coming back before the day’s
                            activity begins. It keeps one fit and active throughout the day. It also prevents the body from bulging out.
                            It keeps the throat clear and sets the pace of the morning walker. One inhales the fresh air of the morning in all its
                            fresh glory. A morning walk gives mental poise and sharpens the perceptive power. Eyes get refreshed while looking at
                            the green grass. Outside, nature is at its best at this hour. It is calm all around. Birds sing to the canal bank and
                            sit there for some time. I take exercise for a few minutes. After an hour I come back home. A late-riser misses the
                            charm of the morning walk. A morning walk thus becomes a fit prelude to the day’s work.</p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
            if (this.state.task === "Try out yoga") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Yoga} style={{ height: "500px", width: "500px" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{textAlign:"center"}}    >

                            <p>Yoga is an ancient art that connects the mind and body. It is an exercise that we perform by balancing the elements of our bodies. In addition, it helps us meditate and relax.
                            Moreover, yoga helps us keep control of our bodies as well as mind. It is a great channel for releasing our stress and anxiety. Yoga gained popularity gradually and is now spread in all regions of the world. It unites people in harmony and peace.
                            Yoga has numerous benefits if we look at it closely. You will get relief when you practice it regularly. As it keeps away the ailments from our mind and body. In addition, when we practice several asanas and postures, it strengthens our body and gives us a feeling of well-being and healthiness.

                            Furthermore, yoga helps in sharpening our mind and improving our intelligence. We can achieve a higher level of concentration through yoga and also learn how to steady our emotions. It connects us to nature like never before and enhances our social well-being.

                            In addition, you can develop self-discipline and self-awareness from yoga if practiced regularly. You will gain a sense of power once you do it consistently and help you lead a healthy life free from any problems. Anyone can practice yoga no matter what your age is or whichever religion you follow.

                    </p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
            if (this.state.task === "Find a community") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Community} style={{ height: "450px", width: "450px" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>

                            <p>Humanity exists as communities/societies because a group is much more powerful than individuals. A group of humans doesn’t just have many eyes and ears but creates a shared understanding much superior to any other understanding on the planet. This huge power is revealed by the creation of language, whose use is the exercise of understanding. With the invention of writing extending this power. Hence to leave society is to stop using words and to start losing your understanding. The inspiration for the novel “Robinson Crusoe” was a man marooned on an island, who slowly began to lose the ability to speak, for when he was rescued he could only talk in half words.</p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
            if (this.state.task === "Find a new favourite non alcoholic drink") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Drink} style={{ height: "300px", width: "300px" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>

                            <p>Non-alcoholic beverages have recently been holding their own beneath the popular food-and-drink umbrella; with "sober curious" hashtags sweeping social media and searches for "refreshing nonalcoholic drinks" trending up. And, these days, the booze-free don't need to do much at all in order to stick a straw into a very tasty mocktail — because there are plenty of cool new companies offering ready-to-drink, non-alcoholic beverages that will deliver directly to your doorstep.</p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
            if (this.state.task === "Rediscover hobies") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Hobby} style={{ height: "500px", width: "500px" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>

                            <p>For many of us, carving out time and energy to engage in a hobby seems like just one more thing we do not have time to do. Work, school, family, religious, and community obligations can be overwhelming, leaving little room for doing the things we enjoy. Although, a quick Google search reveals countless articles and blogs explaining the personal and professional benefits of engaging in a hobby.

                            Hobbies take us out of our everyday experience and give us a chance to do something we love and are passionate about. Engaging in a hobby can be a mental escape, help us hone a skill, or just provide an opportunity to socialize with others. Hobbies are a great way to disconnect from work and break away from the monotony of daily schedules. Also, even though it may seem daunting to add ONE MORE THING to your to-do list, having a hobby has been shown to be a stress reliever.

“Hobbies are often thought of as activities for people who lead quiet, relaxed lives. However, people with full, busy, even stressful lives may need hobbies more than the average person, and benefit greatly from having hobbies in their lives. Hobbies bring many benefits that usually make them more than worth the time they require” (Scott, 2018, para. 1).</p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
            if (this.state.task === "Maintain a log book or a journal") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Diary} style={{ height: "500px", width: "500px" }} style={{ textAlign: "center" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>

                            <p>Professor James Pennebaker, from the University of Texas in Austin, has carried out numerous experiments on the health benefits of writing expressively (nope, we’re not talking about a chronological record of events) and has shown that regular writing can bolster the immune system, help you recover from traumatic events more successfully and ease stress and depression. In his research, people who had survived traumatic events who wrote about their experiences for 20 minutes per day, three to four times a week, visited the doctor half as much as those who didn’t write. The journal writers demonstrated a more vigorous antibody response to bacteria and viruses and produced less cortisol, a stress hormone.
                            The key to successful journal writing is to use it for your own needs. If you want to write about past hurts, disappointments or traumas then do so. If you’d rather write about the here and now, day-to-day dilemmas and frustrations — or your aspirations for the year ahead — do that. The beauty of a diary is that it is for you and you alone.

                            Which brings us to the question, should you read your own diary? Some experts believe that reading through what you’ve written is useful, helping you to spot repetitive patterns of thought or behaviour, and helping you make sense of situations and put them in perspective. But others feel that merely committing the words to paper is what is important — not reflecting on them afterwards.

                    </p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
            if (this.state.task === "Try taking gaps between alcohol intake") {
                return <div class="container">
                    <nav class="navbar navbar-light" style={{ backgroundColor: "white" }}>
                        <div style={{ paddingLeft: "2%" }}><a class="navbar-brand" href="#"><div style={{ fontSize: "1.5rem", color: "black", fontWeight: "bolder" }}><span style={{ color: "#00308F" }}>Alcoholics</span>Anonymous</div></a></div>
                    </nav>
                    <div style={{ paddingTop: "5%" }}></div>
                    <div style={{ textAlign: "center" }}>
                        <h1>{this.state.task}</h1>
                    </div>
                    <div style={{ paddingTop: "2%" }}></div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
                            <img src={Gap} style={{ height: "400px", width: "400px" }} />
                        </div>
                        <div class="col-lg-6 col-md-12" style={{textAlign:"center"}}>

                            <p>You’ve been at work for five hours straight. Your mind is wandering, your shoulders are slumped, and your eyelids are heavy. You know you need to get back on track. Surprisingly, your best strategy might be to slack off.

                            “If you run and don’t fuel your body, you eventually collapse,” says Karen Turner, the CEO of Turner Efficiency Coaching, a company that helps businesses improve employee productivity. “The same thing happens with work. If you don’t rest, you’ll crash.”


It may seem counterintuitive, but taking a break from the task at hand can jump-start your brain, boost motivation and improve your focus. And as research shows, more inane distractions can have especially positive effects on your powers of concentration.</p>
                            <button class="option" onClick={(event) => { this.goBack(event) }}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
        }
        if (this.state.status === "back") {
            return <Profile uid={this.state.uid} level={this.state.level} pace={this.state.pace} deadline={this.state.deadline} />
        }
    }
    render() {
        return this.checkStatus();
    }
}
export default Info;