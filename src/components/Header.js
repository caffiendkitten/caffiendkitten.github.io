import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
  } from "react-router-dom";

import Home from '../containers/Home.js'
// import Contact from '../containers/Contact.js'
import Blogs from '../containers/Blogs.js'
import CTF from '../containers/CTF.js'
import Projects from '../containers/Projects.js'
import ConsAndMeetups from '../containers/ConsAndMeetups.js'
import Resources from '../containers/Resources.js'
// import Notfound from './notfound.js'  




    // const Landing = () => (
    //     <Home />
    // )

class Header extends Component {

    // componentDidMount = () => {
    //     <Home  />
    //   }



    handleOpenNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }    
    handleCloseNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }



    render(){
        return <div className='navbar'>
            <img src="header.jpeg" alt="image of books used for ethical hacking education"/>
            <span className="navButton" onClick={this.handleOpenNav}>&#9776;</span>
            {/* <span className="navButton" onClick={this.handleOpenNav}><i className="fa fa-list" aria-hidden="true"></i></span> */}
            {/* <div className="glitch" data-text="Caffiendkitten">Caffiendkitten</div>  */}
            <h1>DaNeil Coulthard // CaffiendKitten</h1>
            <hr></hr>  
            <Router>
  
            
            <div  id="mySidenav" className="sidenav">
                <a href="#" className="closebtn"  onClick={this.handleCloseNav} >x</a>
                
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/blogs" activeClassName="chosen">Blogs</NavLink>
                <NavLink to="/ctf" activeClassName="chosen">CTF Work</NavLink>
                <NavLink to="/projects" activeClassName="chosen">Projects</NavLink>
                <NavLink to="/ConsAndMeetups" activeClassName="chosen">Cons And Meetups</NavLink>
                <NavLink to="/resources" activeClassName="chosen">Info Resources</NavLink>
            </div>
            <Switch>
                <Route  path ="/" exact render={() => <Home  />} ></Route>
                <Route path ="/blogs" exact render={props => <Blogs  />} ></Route>
                <Route path ="/ctf" exact render={props => <CTF  />} ></Route>
                <Route path ="/projects" exact render={props => <Projects  />} ></Route>
                <Route path ="/ConsAndMeetups" exact render={props => <ConsAndMeetups  />} ></Route>
                <Route path ="/resources" exact render={props => <Resources  />} ></Route>
                <Route component={Home}/>
            </Switch>
            </Router>

        </div>
            
    }     
}
        
export default Header