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
                <li className="Company">NCC Group: Security Consultant — April 2021 - Feb 2023</li>
                    <ul className="work">
                        <li>Regularly performed and led security engagements for small and larger Fortune 50 companies to identify vulnerabilities, audit for regulatory compliance, and improve security posture based on client needs.</li>
                        <li>Conducted black-box and gray-box security assessments of Web Applications, Web Services (APIs), Mobile Applications, and AWS configuration review.</li>
                        <li>Wrote technical documentation and security reports detailing vulnerabilities, risk assessment, and recommended remediation.</li>
                        <li>Routinely collaborated with Account/Project Management and other Consultants to ensure planning and execution on customer engagements follow proper standards to ensure all engagement components are delivered successfully.</li>
                        <li>Created comprehensive test plans, test scripts, and use cases to support testing objectives.</li>
                    </ul>
                <li className="Company">Independent Penetration Tester / Security Engineer — 2020 - April 2021
                    <ul className="work">
                        <li> Researched and built a home server for isolated testing, and documented the process. (See <a href="https://caffiendkitten.github.io/#/projects">Projects Page</a>)</li>
                        <li>Completed CompTIA Sec+ and Network+ training course and Udemy training courses on Python, Ethical Hacking.</li>
                        <li>Participated in various bug bounty programs to find web application vulnerabilities affecting companies and performing responsible vulnerability disclosure.</li>
                        <li>Participated in CTF competitions and Conferences.</li>
                        <li>Researched and evaluated the security posture of previously built Password Manager Application compared to current industry best practices through manual and automated testing and performing suggested remediation.</li>
                        <li>Created comprehensive test plans, test scripts, and use cases to support testing objectives.</li>
                    </ul>
                </li>
                <li className="Company">Emerald City Smoothie: Store Manager — 2011 - 2019
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