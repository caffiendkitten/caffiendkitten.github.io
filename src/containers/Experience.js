import React from 'react'
import Footer from "./Footer.js"

function Experience(props) {
    return <div className="content">
        <h3>Work History</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            <div className="column middle workz">
            <ul>
                <li className="Company">ISE (Independent Security Evaluators): March 2023 — current</li>
                <li className="title">Title: Security Analyst/Consultant</li>
                <li className="title">Role:
                    <ul className="work">
                        <li>Performed and led security assessments for small and larger Fortune 500 companies to identify vulnerabilities, audit for regulatory compliance, and improve security posture based on client needs.</li>
                        <li>Conducted black-box, gray-box, and white-box security assessments of Web Applications, Web Services (APIs), Mobile Applications, and AWS environment reviews.</li>
                        <li>Created comprehensive security reports detailing vulnerabilities and their risks, test plans, test scripts and their use cases to support testing objectives, and recommended remediation for assessed risks.</li>
                        <li>Frequently presented reports to clients, explaining security issues and why they are important to both technical teams and non-technical audiences.</li>
                        <li>Routinely collaborated with Account/Project Management and other Consultants to ensure planning and execution on customer engagements follow proper standards to ensure all engagement components are delivered successfully.</li>
                        <li>Regularly contributed to internal technical documentation.</li>
                    </ul>
                </li>                
                <li className="Company">NCC Group: April 2021 — Feb 2023</li>
                <li className="title">Title:
                    <ul className="work">
                    <li className="title">Security Consultant: June 2022 - Feb 2023</li>
                    <li className="title">Associate Security Consultant: April 2021 - June 2022</li>
                    </ul>
                </li> 
                <li className="title">Role:
                        <ul className="work">
                            <li>Regularly performed and led security engagements for small and larger Fortune 500 companies to identify vulnerabilities, audit for regulatory compliance, and improve security posture based on client needs.</li>
                            <li>Conducted 51 black-box and gray-box security assessments of Web Applications, Web Services (APIs), Mobile Applications, and AWS environment reviews.</li>
                            <li>Created comprehensive security reports detailing vulnerabilities and their risks, test plans, test scripts and their use cases to support testing objectives, and recommended remediation for assessed risks.</li>
                            <li>Frequently presented reports to clients, explaining security issues and why they are important to both technical teams and non-technical audiences.</li>
                            <li>Routinely collaborated with Account/Project Management and other Consultants to ensure planning and execution on customer engagements follow proper standards and that all scoped components are delivered successfully.</li>
                            <li>Regularly contributed to internal technical documentation.</li>
                        </ul>
                </li>
                <li className="Company">Independent Penetration Tester: 2020 — April 2021</li>
                    <li className="title">Title: Security Engineer</li> 
                    <li className="title">Role:
                        <ul className="work">
                            <li> Researched and built a home server for isolated testing, and documented the process. (See <a href="https://caffiendkitten.github.io/#/projects">Projects Page</a>)</li>
                            <li>Completed CompTIA Sec+ and Network+ training course and Udemy training courses on Python, Ethical Hacking.</li>
                            <li>Participated in various bug bounty programs to find web application vulnerabilities affecting companies and performing responsible vulnerability disclosure.</li>
                            <li>Participated in CTF competitions and Conferences.</li>
                            <li>Researched and evaluated the security posture of previously built Password Manager Application compared to current industry best practices through manual and automated testing and performing suggested remediation.</li>
                            <li>Created comprehensive test plans, test scripts, and use cases to support testing objectives.</li>
                        </ul>
                    </li>
                <li className="Company">Emerald City Smoothie: Store Manager: 2011 — 2019</li>
                    <li className="title">Title:
                        <ul className="work">
                            <li className="title">Store Manager: 2012 - 2019</li>
                            <li className="title">Associate: 2011 - 2012</li>
                        </ul>
                    </li> 
                    <li className="title">Role:
                        <ul className="work">
                            <li>Managed day-to-day operations and staff.</li>
                            <li>Installed new POS hardware, rolled out regular software updates, and applied patches to POS and store devices increasing the speed of checkout times and profits by 12%.</li>
                            <li>Helped develop and test new product offerings prior to release.</li>
                            <li>Set, enforced, and optimized internal policies to maintain efficiency and responsiveness to demands.</li>
                            <li>Promoted team collaboration, performance and efficiency by working closly with staff and owner to fostering healthy environments focused on mutual success.</li>
                        </ul>
                    </li>           
            </ul>
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
        
export default Experience