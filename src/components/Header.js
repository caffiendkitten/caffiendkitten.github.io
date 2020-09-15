import React, { Component } from 'react';
import {
        // BrowserRouter as Router,
        Route,
        Switch,
        Link,
        HashRouter
    } from "react-router-dom";

import Home from '../containers/Home.js'
import Resume from './Resume.js'
import Blog from '../containers/Blog.js'
import CTF from '../containers/CTF.js'
import Education from './Education.js'
import Projects from '../containers/Projects.js'
import SideProjects from '../containers/SideProjects.js'
import ConsAndMeetups from '../containers/ConsAndMeetups.js'
import Resources from '../containers/Resources.js'
import ErrorPage from '../containers/ErrorPage.js'

class Header extends Component {

    constructor() {
        super();
        this.state = {
            addClass: false,
            navClass: "",
        }
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
            <div className="overlay" id="overlay" onClick={this.handleOverlay}></div>

            <div className='navbar' id='navBar'>
                {/* <Router >
                    <div  id="sidenav" className="sidenav" onClick={this.handleNav}>
                    {/* <a href="#" className="closebtn"  onClick={this.handleCloseNav} >x</a> */}
                    {/* <div className="active" onClick={this.handleCloseNav} id="menu-icon">
                        <div className="active" id="hamburger"></div>
                    </div> 
                    */}
                    
                        {/* <NavLink to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/blogs" activeClassName="chosen">Blogs</NavLink>
                        <NavLink to="/ctf" activeClassName="chosen">CTF Work</NavLink>
                        <NavLink to="/projects" activeClassName="chosen">Projects</NavLink>
                        <NavLink to="/ConsAndMeetups" activeClassName="chosen">Cons And Meetups</NavLink>
                        <NavLink to="/resources" activeClassName="chosen">Info Resources</NavLink>
                    </div>
                <Switch>
                    <Route  path ="/" exact render={() => <Home  />} ></Route>
                    <Route path ="/blogs" exact render={() => <Blogs  />} ></Route>
                    <Route path ="/ctf" exact render={() => <CTF  />} ></Route>
                    <Route path ="/projects" exact render={() => <Projects  />} ></Route>
                    <Route path ="/ConsAndMeetups" exact render={() => <ConsAndMeetups  />} ></Route>
                    <Route path ="/resources" exact render={() => <Resources  />} ></Route>
                    <Route component={Home}/> */}
                    {/* <Route path='*' component={NotFound404} /> */}

                {/* </Switch>
                </Router> */ }
                <HashRouter basename='/'>
                    <div  id="sidenav" className="sidenav" onClick={this.handleNav}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/ctf">CTF Work</Link></li>
                            <li><Link to="/education">Ongoing Education</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/consAndMeetups">Cons And Meetups</Link></li>
                            <li><Link to="/academicProjects">Academic Projects</Link></li>
                            <li><Link to="/sideProjects">Side Projects</Link></li>
                            <li><Link to="/resources">Information Resources</Link></li>
                        </ul>
                    </div>
                <Switch>
                    <Route  exact path ="/"  render={() => <Home  />} ></Route>
                    <Route path ="/resume" exact render={() => <Resume  />} ></Route>
                    <Route path ="/ctf" exact render={() => <CTF  />} ></Route>
                    <Route path ="/education" exact render={() => <Education  />} ></Route>
                    <Route path ="/blog" exact render={() => <Blog  />} ></Route>
                    <Route path ="/consAndMeetups" exact render={() => <ConsAndMeetups  />} ></Route>
                    <Route path ="/academicProjects" exact render={() => <Projects  />} ></Route>
                    <Route path ="/sideProjects" exact render={() => <SideProjects  />} ></Route>
                    <Route path ="/resources" exact render={() => <Resources  />} ></Route>
                    {/* <Route component={Home}/> */}
                    <Route path='*' component={ErrorPage} />
                </Switch>
                </HashRouter>
            </div>
        </div>
    }     
}
        
export default Header