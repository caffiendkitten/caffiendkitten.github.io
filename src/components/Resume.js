import React, { Component } from 'react';
import Footer from "../containers/Footer.js"
import { Document, Page, pdfjs } from "react-pdf";
import file from '../docs/DaNeil_Coulthard_Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class Resume extends Component {

    render() {

        return <div className="content">
        <h3>Resume</h3>

        <div className="row">

            <div className="column left">
                <p className="resourcesSide"></p>
                {/* <h5>Continued Education</h5>
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
                    <b>Udemy</b>
                    <ul>
                        <li>Learn Burp Suite, the Nr. 1 Web Hacking Tool | November 21, 2019</li>
                        <li>Programming with Python: HandsOn Introduction for Beginners | November 20, 2019</li>
                        <li>PHP Programming Basics | Nov 15, 2019</li>
                        <li>Hacking Academy: How to Monitor &#38; Intercept Transmitted Data | Oct 2018</li>
                        <li>Introduction to Python Programming	| March 2018</li>
                    </ul>
                    <b>Stack Skills</b>
                    <ul>
                        <li>The Complete Hacking Course: Go From Beginner to Advanced! | November 11, 2019</li>
                        <li>Cross Site Scripting(XSS) Attacks for Pentesters | March 2019</li>
                        <li>Ultimate WiFi Hacking &#38; Security Series | Dec 2018</li>
                    </ul>
                    <b>FreeCodeCamp</b>
                    <ul>
                        <li>Responsive Web Design | November 11, 2019</li>                        
                    </ul>
                    <b>General Assembly Seattle</b>
                    <ul>
                        <li>SQL Bootcamp | March 2018</li>
                        <li>Intro to Data Analytics | March 2018</li>
                        <li>Python for Data 1 | January 2018</li>
                    </ul>
                    <b>SoloLearn</b>
                    <ul>
                        <li>JavaScrippt | Oct 2019</li>
                    </ul>   
                    <b>Hack Reactor/Galvanize</b>
                    <ul>
                        <li>Pre Immersive SSP | Jan 2019</li>
                    </ul>                                        
                    <b>Watch and Code</b>
                    <ul>
                        <li>Practical JavaScript | Dec 2018</li>
                    </ul>   
                    <b>Udacity</b>
                    <ul>
                        <li>Intro to Javascript | November 2018</li>
                    </ul>                       

                </p> */}



            </div>
        
            <div className="column middle">
                {/* style={{"width" : "100%"}} width="100%" */}
                {/* <Document file={file} >
                    <Page pageNumber={1} />
                </Document> */}

                <embed src={file} type="application/pdf" width="100%" height="950px" />
                <a href={file}>Download</a>

            </div>
        
        
            <div className="column right">
                <p className="resourcesSide"></p>

                {/* <h5>Technical Skills </h5>
                <p className="technicalSkills">
                    <b>Languages:</b> Ruby, React, JavaScript, Python, HTML5/CSS3, SQL<br />
                    <b>Libraries/Frameworks:</b> React.js, Rails, jQuery, Bootstrap, JWT<br />
                    <b>Tools:</b> Git, Github, VSCode, Burp Suite, ZAP, WireShark, PostgreSQL, SQLite, MYSQL<br />
                    <b>Methodologies:</b> MVC (Model-View-Controller), RESTful API, OSSTMM (Open Source Security Testing Methodology Manual)<br />
                </p>

                <h5>Education </h5>
                <p className="technicalSkills">
                    <b>Flatiron School:</b><br />Software Engineering Bootcamp<br /> Seattle, WA | August 2019<br />
                    <b>City University Seattle:</b><br />Bachelor of Science – Information Technology, Information Security Emphasis<br /> Seattle, WA | March 2018<br />
                    <b>Edmonds Community College:</b><br />General Associate’s Degree <br /> Lynnwood, WA | June 2013 <br />
                    <b>Lewis-Clark State College:</b><br />Associate’s Degree in Web Development <br /> Lewiston, ID | May 2010
                </p>

                <h5>Relevant Courses </h5>
                <p className="technicalSkills">
                    Computer Science | Java, Computer Science || Java, Cybercrime, Tech and Social Change, Human Computer Interaction, 
                    IT Compliance, Information Security, Information Technology Ethics, Intro/C++ Programming, Network Security, 
                    Novell/Linux OS, Operating Systems, Operating Systems: MS Windows, PC Technician Fundamentals, Programming with 
                    Python, Systems Analysis and Design
                </p> */}
            </div>
        </div>


        <div className="footer">
            <Footer />
        </div>
            
    </div>       
}
}      
export default Resume