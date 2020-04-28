import React from 'react'
import Footer from "./Footer.js"

const Home = () => {
    return <div className="content">
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle">
                <h3>Welcome To My Portfolio</h3>
                <p>My name is DaNeil and I am a Quality-driven security researcher 
                    and full stack software/security engineer with a passion for performing 
                    responsible disclosure and aligning security controls, processes, policies and procedures.
                    <br />
                    I am experienced in leveraging tool-based testing, and manual hands-on testing, of web 
                    applications and network services while utilizing web and network application 
                    guidelines and following industry-standard best practices and methodologies, such as OWASP and PTES.
                </p>
                <p>
                    I am passionate about Information Security and enthusiastic about finding 
                    security vulnerabilities. I am active within the Capture the Flag community 
                    and local tech meetup groups such as the CyberSecurity Non-Profit that I am a 
                    chapter organizer for, WISP, WoSec, and OWASP and this site will be built 
                    around my progress and my process of getting into Info Sec.
                </p>
                <p>
                    I am seeking a Vulnerability Researcher / Penetration Tester position that 
                    will push my experience and skills to the limit and also offer a challenging 
                    future with room for learning and advancement.
                </p>
                <p>
                    <b>Connect with me:</b><br />
                    <b>LinkedIn:</b>  <a className="resourcesTable" href="https://www.linkedin.com/in/daneil-coulthard/"  target="_blank" rel="noopener noreferrer" >https://www.linkedin.com/in/daneil-coulthard/</a><br />
                    <b>GitHub:</b> <a className="resourcesTable" href="https://github.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten</a><br />
                    <b>Dev.to:</b> <a className="resourcesTable" href="https://dev.to/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://dev.to/caffiendkitten</a><br />
                    <b>PentesterLab:</b> <a className="resourcesTable" href="https://pentesterlab.com/profile/CaffiendKitten"  target="_blank" rel="noopener noreferrer" >https://pentesterlab.com/profile/CaffiendKitten</a><br />
                    <b>HackThebox:</b> <a className="resourcesTable" href="https://www.hackthebox.eu/profile/67366"  target="_blank" rel="noopener noreferrer" >https://www.hackthebox.eu/profile/67366</a><br />
                    <b>HackerOne:</b> <a className="resourcesTable" href="https://hackerone.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://hackerone.com/caffiendkitten</a><br />
                    <b>BugCrowd:</b> <a className="resourcesTable" href="https://bugcrowd.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >https://bugcrowd.com/caffiendkitten</a><br />
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