import React, { Component } from 'react';
import {
        Route,
        Switch,
        Link,
        HashRouter
    } from "react-router-dom";

import Home from '../containers/Home.js'
// import Resume from './Resume.js'
import Blog from '../containers/Blog.js'
import Experience from '../containers/Experience.js'
import CTF from '../containers/CTF.js'
import Badges from './BadgesAndSkills.js'
import Education from './Education.js'
import Projects from '../containers/Projects.js'
import ConsAndMeetups from '../containers/ConsAndMeetups.js'
// import Resources from '../containers/Resources.js'
import ErrorPage from '../containers/ErrorPage.js'
import TableauProject from '../containers/Project-TableauContainer'


// // const fetchURL = "https://dev.to/api/articles?username=caffiendkitten&page=1";
// const username = "caffiendkitten";


class Header extends Component {
    state = {
        addClass: false,
        navClass: "",
        done: true
    }

    handleNav = () => {
        if(this.state.navClass === "active" ) {
            this.setState({navClass: ""});
            this.setState({addClass: false});
            // document.getElementById("mySidenav").style.width = "0";
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('sidenav').classList.remove('show-sidebar');
    // document.getElementById('sidenav a').classList.remove('show-sidebar');
        } else if(this.state.navClass === "" ) {
            this.setState({addClass: true});
            this.setState({navClass: "active"});
            // document.getElementById("mySidenav").style.width = "250px";
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('sidenav').classList.add('show-sidebar');
    // document.getElementById('sidenav a').classList.add('show-sidebar');
        }
    }

    handleOverlay = () => {
        this.setState({navClass: ""});
        this.setState({addClass: false});
        document.getElementById('sidenav').classList.remove('show-sidebar');
        document.getElementById('overlay').classList.remove('is-visible')
    }


    render(){
        return <div id='body'>
            <div id="header">
            
                <img src="header.jpeg" alt="books used for ethical hacking education"/>
                {/* <span className="navButton" onClick={this.handleOpenNav}>&#9776;</span> */}
                <div onClick={this.handleNav} id="menu-icon" className="menu-icon">
                    <div className={this.state.navClass} id="hamburger"></div>
                </div>

                {/* <div className="glitch" data-text="Caffiendkitten">Caffiendkitten</div>  */}
                <h1>DaNeil Coulthard // CaffiendKitten</h1>
                <hr></hr>  
            </div>
            <div className="overlay" id="overlay" onClick={() => this.handleOverlay()}></div>

            <div className='navbar' id='navBar'>
                <HashRouter basename='/'>
                    <div  id="sidenav" className="sidenav" onClick={this.handleNav}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/experience">Work Experience</Link></li>
                            <li><Link to="/Badges">Skills | Certs | Badges</Link></li>
                            <li><Link to="/education">Ongoing Education</Link></li>
                            {/* <li><Link to="/sideProjects">Side Projects</Link></li> */}
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/ctf">CTFs & Writeups</Link></li>
                            {/* <li><Link to="/resume">Resume</Link></li> */}
                            <li><Link to="/blog">Blog</Link></li>

                            <li><Link to="/consAndMeetups">Cons & Meetups</Link></li>
                            {/* <li><Link to="/resources">Information Resources</Link></li> */}
                        </ul>
                    </div>
                <Switch>
                    <Route  exact path ="/"  render={() => <Home  />} ></Route>
                    <Route path ="/Experience" exact render={() => <Experience  />} ></Route>
                    <Route path ="/Badges" exact render={() => <Badges  />} ></Route>
                    <Route path ="/education" exact render={() => <Education  />} ></Route>
                    {/* <Route path ="/sideProjects" exact render={() => <SideProjects  />} ></Route> */}
                    <Route path ="/Projects" exact render={() => <Projects  />} ></Route>
                    <Route path ="/TableauProject" exact render={() => <TableauProject  />} ></Route>
                    <Route path ="/ctf" exact render={() => <CTF  />} ></Route>
                    {/* <Route path ="/resume" exact render={() => <Resume  />} ></Route> */}
                    <Route path ="/blog" exact render={() => <Blog 
                                                            data={this.props.data}
                                                            author={this.props.author}
                                                            articlezList={this.props.articlezList}
                                                            profile_image_90={this.props.profile_image_90}
                                                            done={this.props.done}
                                                             />} ></Route>

                    <Route path ="/consAndMeetups" exact render={() => <ConsAndMeetups  />} ></Route>
                    {/* <Route path ="/resources" exact render={() => <Resources  />} ></Route> */}
                    <Route path='*' component={ErrorPage} />
                </Switch>
                </HashRouter>
            </div>
        </div>
    }     
}
        
export default Header