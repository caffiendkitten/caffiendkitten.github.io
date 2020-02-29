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



class Header extends Component {

    // componentDidMount = () => {
    //     	var sidebarStatus = 'hidden';
    //   }

    constructor() {
        super();
        this.state = {
            addClass: false,
            navClass: ""
        }
    }

    handleOpenNav = () => {

        if(this.state.addClass === true ) {
            this.setState({navClass: ""});
            this.setState({addClass: false});
            document.getElementById("mySidenav").style.width = "0";


            document.getElementById('root').removeEventListener('click',this.handleOpenNav )
            // document.getElementById('menu-icon').removeEventListener('click',this.handleOpenNav )
        } else {

            this.setState({navClass: "active"});
            this.setState({addClass: true});

            document.getElementById("mySidenav").style.width = "250px";
            // document.getElementById("hamburger").style.backgroundColor = "#ffffff";
            document.getElementById('root').addEventListener('click',this.handleOpenNav )
            // document.getElementById('menu-icon').addEventListener('click',this.handleOpenNav )
            // document.getElementById('hamburger').getElementsByClassName('active').removeEventListener('click',this.handleOpenNav )

        }
    }   

    // handleOpenNav = () => {
    //     document.getElementById("mySidenav").style.width = "250px";
    //     document.getElementById("hamburger").style.backgroundColor = "#ffffff";
    //     this.setState({addClass: !this.state.addClass});
    // }   

    // handleCloseNav = () => {
    //     document.getElementById("mySidenav").style.width = "0";
    //     document.getElementById("hamburger").style.backgroundColor = "#000000";
    // this.setState({addClass: !this.state.addClass});
    // }



    render(){
        // let navClass = [""];
        // if(this.state.addClass) {
        //     this.setState({navClass: "active"});
        // }
        return <div className='navbar'>
            <img src="header.jpeg" alt="books used for ethical hacking education"/>
            {/* <span className="navButton" onClick={this.handleOpenNav}>&#9776;</span> */}
            <div onClick={this.handleOpenNav} id="menu-icon">
                <div className={this.state.navClass} id="hamburger"></div>
            </div>

            {/* <span className="navButton" onClick={this.handleOpenNav}><i className="fa fa-list" aria-hidden="true"></i></span> */}
            

            {/* <div className="glitch" data-text="Caffiendkitten">Caffiendkitten</div>  */}
            <h1>DaNeil Coulthard // CaffiendKitten</h1>
            <hr></hr>  
                
            <Router>
  
            
            <div  id="mySidenav" className="sidenav">
                {/* <a href="#" className="closebtn"  onClick={this.handleCloseNav} >x</a> */}
                {/* <div className="active" onClick={this.handleCloseNav} id="menu-icon">
                    <div className="active" id="hamburger"></div>
                </div> 
  */}
                
                <NavLink to="/" activeClassName="active">Home</NavLink>
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
                <Route component={Home}/>
            </Switch>
            </Router>

        </div>
            
    }     
}
        
export default Header