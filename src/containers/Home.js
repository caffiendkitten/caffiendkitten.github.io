import React from 'react'
import Footer from "./Footer.js"

const Home = () => {
    return <div className="content">

        <div className="row">
            <div className="column side">
                <h5>Continued Education</h5>
                <p className="technicalSkills"> 
                    <b>Pentester Lab</b>
                    <ul>
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

                </p>



            </div>
            
            <div className="column middle">
                <h3>Welcome To My Portfolio</h3>
                <p>My name is DaNeil and I am a Security researcher performing responsible 
            disclosure and full stack software/security engineer with a passion for 
            aligning security controls, processes, policies and procedures. <br />
            I take pride in being a self-starter/team player with good multitasking skills and a 
            desire to consistently exceed expectations. 
            I have project manager and team leader experience in directing all phases of complex projects while motivating and mentoring team members.</p>
                <p>This site will be built around my progress and my process of getting into Info Sec.</p>

            <p><b>Connect with me:</b><br />
            <b>LinkedIn:</b>  <a className="resourcesTable" href="https://www.linkedin.com/in/daneil-coulthard/"  target="_blank" rel="noopener noreferrer" >https://www.linkedin.com/in/daneil-coulthard/</a><br />
            <b>GitHub:</b> <a className="resourcesTable" href="https://github.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten</a><br />
            <b>Dev.to:</b> <a className="resourcesTable" href="https://dev.to/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://dev.to/caffiendkitten</a><br />
            <b>PentesterLab:</b> <a className="resourcesTable" href="https://pentesterlab.com/profile/CaffiendKitten"  target="_blank" rel="noopener noreferrer" >https://pentesterlab.com/profile/CaffiendKitten</a><br />
            <b>HackThebox:</b> <a className="resourcesTable" href="https://www.hackthebox.eu/profile/67366"  target="_blank" rel="noopener noreferrer" >https://www.hackthebox.eu/profile/67366</a><br />
            <b>HackerOne:</b> <a className="resourcesTable" href="https://hackerone.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://hackerone.com/caffiendkitten</a><br />
            <b>BugCrowd:</b> <a className="resourcesTable" href="https://bugcrowd.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://bugcrowd.com/caffiendkitten</a><br />


            </p>


            </div>
            
            <div className="column side">

                <h5>Technical Skills </h5>
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

                <h5>Relivant Classes </h5>
                <p className="technicalSkills">
                Computer Science | Java, Computer Science || Java, Cybercrime, Tech and Social Change, Human Computer Interaction, IT Compliance, Information Security, Information Technology Ethics, Intro/C++ Programming, Network Security, Novell/Linux OS, Operating Systems, Operating Systems: MS Windows, PC Technician Fundamentals, Programming with Python, Systems Analysis and Design

                </p>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
        
    </div>       
}
        
export default Home