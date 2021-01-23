import React from 'react'
import Footer from "./Footer.js"


const SideProjects = () => {
    return <div className="content">
        <h3>Side Projects</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle projects">
                <table className="projects">

                <tr>
                    <td className="projectInfo left">
                        <b>Home Server: </b><br />
                        During the time of COVID I took the oppertunity to build a home server on an old computer.<br />
                        The project involved researching standards and regulations about servers, server logging, data storage, server and application hardening, data encapsulation, and virturalization to name a few.<br />
                        The outcome was documented in my <a href="https://dev.to/caffiendkitten/building-a-home-test-server-27h1" target="_blank" rel="noopener noreferrer" >blog series "Building a Home Test Server"</a> and will be used moving forward to test applications on in a semi-production-like environment.
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                    <a href="https://dev.to/caffiendkitten/building-a-home-test-server-27h1" target="_blank" rel="noopener noreferrer" >Building a Home Test Server (Definitions)</a><br />
                    <a href="https://dev.to/caffiendkitten/l-is-for-linux-512n" target="_blank" rel="noopener noreferrer" >"L" is for Linux</a><br />
                    <a href="https://dev.to/caffiendkitten/a-is-for-apache-3iem" target="_blank" rel="noopener noreferrer" >"A" is for Apache</a><br />
                    <a href="https://dev.to/caffiendkitten/m-is-for-mysql-3a9j" target="_blank" rel="noopener noreferrer" >"M" is for MySQL</a><br />
                    <a href="https://dev.to/caffiendkitten/p-is-for-php-1d7l" target="_blank" rel="noopener noreferrer" >"P" is for PHP</a><br />
                    <a href="https://dev.to/caffiendkitten/adding-react-to-a-server-nm6" target="_blank" rel="noopener noreferrer" >Adding React to a Server</a><br />
                    <a href="https://dev.to/caffiendkitten/adding-ssl-to-a-server-28p9" target="_blank" rel="noopener noreferrer" >Adding SSL to a Server</a><br />
                    <a href="https://dev.to/caffiendkitten/adding-ruby-on-rails-to-a-server-1n4b" target="_blank" rel="noopener noreferrer" >Adding Ruby on Rails to a Server</a><br />
                    <a href="https://dev.to/caffiendkitten/app-server-cors-config-1b40" target="_blank" rel="noopener noreferrer" >Application Server & CORS Config</a><br />
                    Server Hardening
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo left">
                        <b>PentestReport Project: </b><br />
                        This repository is a report done on my final project at Flatiron School, 
                        the <a href="https://flatiron-passwordmanager.netlify.app/" target="_blank" rel="noopener noreferrer">password manager</a>).<br />
                        This report will be an ongoing, full evaluation of the security posture of the 
                        application compared to current industry best practices, such as OWASP top 10, PTES, and NIST. <br />
                        This will include both manual and automated testing as well as an evaluation of the vulnerabilities 
                        found and their suggested remediation.
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="https://github.com/caffiendkitten/PenTestReport" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/PenTestReport</a><br />
                    </td>
                </tr>


                <tr>
                    <td className="projectInfo left">
                        <b>Coding Payloads Project: </b><br />
                        A repository for my methodology/approach to penetration testing along with any payloads that I have used for the process.<br />
                        This is an ongoing process and will continue to grow as my skills do.
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="https://github.com/caffiendkitten/codeProjects" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/codeProjects</a><br />
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo left">
                        <b>3D Planter: </b><br />
                        A repository is for a 3D workshop that I attended where we made a planter to be 3D printed.<br />
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="https://github.com/caffiendkitten/3DPlant" target="_blank" rel="noopener noreferrer">https://github.com/caffiendkitten/3DPlant</a><br />
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo left">
                        <b>Website Design: On the Fly Espresso</b><br />
                        Worked with owner to builb a website for coffee shop, On the Fly Espresso, in Alaska from 2011 until 2013 when shop was sold.<br />
                        I worked closely with the owner, Ms. Coulthard, to help design the logo, punch card, website, menu layout, and social media presence. I also worked with Ms. Coulthard to enable her to update social media and menu to enable her to update as needed for special daily deals.<br />
                        <br/>
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="Images/OnTheFlyEspressoLogo.jpg" target="_blank" rel="noopener noreferrer" ><img src="Images/OnTheFlyEspressoLogo.jpg" alt="On The Fly Espresso Logo" height="150" /></a>
                        <a href="Images/OnTheFlyEspressoSite.jpg" target="_blank" rel="noopener noreferrer" ><img src="Images/OnTheFlyEspressoSite.jpg" alt="On The Fly Espresso Site" height="150" /></a><br />
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
        
export default SideProjects