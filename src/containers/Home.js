import React from 'react'
import Footer from "./Footer.js"

const Home = () => {
    return <div className="content">
                <h3>About Me</h3>
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle portfolio">
                <p>A quality-driven security professional and full-stack software/security engineer with a passion for <br />
                finding security vulnerabilities, performing responsible disclosure, and aligning security controls, processes, policies and procedures.
                </p>
                <p>Experienced in leveraging tool-based and manual hands-on testing of web applications and network services <br />
                    while utilizing web and network application 
                    guidelines and following industry-standard best practices and methodologies, such as OWASP and PTES.
                </p>
                {/* <p>
                    I am passionate about Information Security and enthusiastic about finding 
                    security vulnerabilities. 
                    I am active within the Capture the Flag community 
                    and local tech meetup groups such as the CyberSecurity Non-Profit that I volunteer for, 
                    WISP, WoSec, and OWASP.
                </p> */}
                <p>
                    Currently seeking a position in Information Security / Penetration Testing.
                    {/* that will<br /> */}
                     {/* push my skills while offering a challenging future with room for continued learning and advancement. */}
                </p>


                <p className="connectWithMe">
                    <b>Connect with me:</b><br />
                    <b>LinkedIn:</b>  <a className="resourcesTable" href="https://www.linkedin.com/in/daneil-coulthard/"  target="_blank" rel="noopener noreferrer" >linkedin.com/in/daneil-coulthard/</a><br />
                    <b>GitHub:</b> <a className="resourcesTable" href="https://github.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >github.com/caffiendkitten</a><br />
                    <b>Dev.to:</b> <a className="resourcesTable" href="https://dev.to/caffiendkitten"  target="_blank" rel="noopener noreferrer" >dev.to/caffiendkitten</a><br />
                    <b>TryHackMe:</b> <a className="resourcesTable" href="https://tryhackme.com/p/CaffiendKitten"  target="_blank" rel="noopener noreferrer" >tryhackme.com/p/CaffiendKitten</a><br />
                    <b>PentesterLab:</b> <a className="resourcesTable" href="https://pentesterlab.com/profile/CaffiendKitten"  target="_blank" rel="noopener noreferrer" >pentesterlab.com/profile/CaffiendKitten</a><br />
                    <b>HackThebox:</b> <a className="resourcesTable" href="https://www.hackthebox.eu/profile/67366"  target="_blank" rel="noopener noreferrer" >hackthebox.eu/profile/67366</a><br />
                    <b>HackerOne:</b> <a className="resourcesTable" href="https://hackerone.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >hackerone.com/caffiendkitten</a><br />
                    <b>BugCrowd:</b> <a className="resourcesTable" href="https://bugcrowd.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >bugcrowd.com/caffiendkitten</a><br />
                </p>
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
export default Home