import React, { Component } from 'react';
import Footer from "./Footer.js"




class Education extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        const placement = document.getElementsByClassName("TryHackMe");
        script.src = "https://tryhackme.com/badge/106028";
        script.async = true;
    
        placement.appendChild(script);
    }

    render() {
        return <div className="content">
        <h3>Ongoing Education</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">
                <table>
                    <tr>
                        <td>
                            <h4>Continued Education</h4>


                            <p className="technicalSkills">
                                <b>TryHackMe</b>
                                <ul>
                                    <li className="TryHackMe"><script src="https://tryhackme.com/badge/106028" crossorigin></script></li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>Stack Skills</b>
                                <ul>
                                    <li>Windows Exploit Development Megaprimer | September 14, 2020</li>
                                    <li>The Complete Hacking Course: Go From Beginner to Advanced! | November 11, 2019</li>
                                    <li>Cross Site Scripting(XSS) Attacks for Pentesters | March 2019</li>
                                    <li>Ultimate WiFi Hacking &#38; Security Series | Dec 2018</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>FreeCodeCamp</b>
                                <ul>
                                    <li>Information Security Certification | Sept 14, 2020</li>                        
                                    <li>Responsive Web Design | November 11, 2019</li>                        
                                </ul>
                            </p>                            
                            <p className="technicalSkills">
                                <b>ICSI, UK (International CyberSecurity Institute)</b>
                                <ul>
                                    <li>ICSI | CNSS Certified Network Security Specialist | July 10, 2020</li>                        
                                </ul>
                            </p>  
                            <p className="technicalSkills">
                                <b>NexGenT</b>
                                <ul>
                                    <li>CompTIA Network+ Certification Course | June 23, 2020</li>                        
                                </ul>
                            </p>                            
                            <p className="technicalSkills"> 
                                <b>Pentester Lab</b>
                                <ul>
                                    <li>Blue Badge | April 03, 2020</li>
                                    <li>Serialize Badge | February 17, 2020</li>
                                    <li>White Badge | February 12, 2020</li>
                                    <li>PCAP Badge | February 5, 2020</li>
                                    <li>Essential Badge | February 1, 2020</li>
                                    <li>Unix Badge | January 27, 2020</li>
                                    <li>Introduction Badge | January 21, 2020</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>Udemy</b>
                                <ul>
                                    <li>Learn Burp Suite, the Nr. 1 Web Hacking Tool | November 21, 2019</li>
                                    <li>Programming with Python: HandsOn Introduction for Beginners | November 20, 2019</li>
                                    <li>PHP Programming Basics | Nov 15, 2019</li>
                                    <li>Hacking Academy: How to Monitor &#38; Intercept Transmitted Data | Oct 2018</li>
                                    <li>Introduction to Python Programming	| March 2018</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>General Assembly Seattle</b>
                                <ul>
                                    <li>SQL Bootcamp | March 2018</li>
                                    <li>Intro to Data Analytics | March 2018</li>
                                    <li>Python for Data 1 | January 2018</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>SoloLearn</b>
                                <ul>
                                    <li>JavaScrippt | Oct 2019</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>Hack Reactor/Galvanize</b>
                                <ul>
                                    <li>Pre Immersive SSP | Jan 2019</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>Watch and Code</b>
                                <ul>
                                    <li>Practical JavaScript | Dec 2018</li>
                                </ul>
                            </p>
                            <p className="technicalSkills">
                                <b>Udacity</b>
                                <ul>
                                    <li>Intro to Javascript | November 2018</li>
                                </ul>                       
                            </p>                            
                        </td>

                        <td>
                            <h4>Technical Skills </h4>
                            <p className="technicalSkills">
                                <b>Languages:</b> Ruby, React, JavaScript, Python, HTML5/CSS3, SQL<br />
                                <b>Libraries/Frameworks:</b> React.js, Rails, jQuery, Bootstrap, JWT<br />
                                <b>Tools:</b> Git, Github, VSCode, Burp Suite, ZAP, WireShark, Hydra, SQLMap<br />
                                <b>Database:</b> PostgreSQL, SQLite, MYSQL<br />
                                <b>Methodologies:</b> OWASP, PTES, OSSTMM (Open Source Security Testing Methodology Manual)<br />
                            </p>
                            <h4>Education</h4>
                            <p className="technicalSkills">
                                <b>Flatiron School:</b><br />Software Engineering Bootcamp<br /> Seattle, WA<br />
                                <b>City University Seattle:</b><br />Bachelor of Science – Information Technology, Information Security Emphasis<br /> Seattle, WA<br />
                                <b>Edmonds Community College:</b><br />General Associate’s Degree <br /> Lynnwood, WA<br />
                                <b>Lewis-Clark State College:</b><br />Associate’s Degree in Web Development <br /> Lewiston, ID
                            </p>
                            <h4>Relevant Academic Courses </h4>
                            <p className="technicalSkills">
                                Computer Science | Java, Computer Science || Java, Cybercrime, Tech and Social Change, Human Computer Interaction, 
                                IT Compliance, Information Security, Information Technology Ethics, Intro/C++ Programming, Network Security, 
                                Novell/Linux OS, Operating Systems, Operating Systems: MS Windows, PC Technician Fundamentals, Programming with 
                                Python, Systems Analysis and Design
                            </p>
                        </td>
                    </tr>                  
                </table>
            </div>
            <div className="column right">
                <p className="resourcesSide"></p>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
            
    </div>       
    }
}       
export default Education