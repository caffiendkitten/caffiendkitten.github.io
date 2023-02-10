import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import IconPicker from '../docs/iconsList.js'

import {
    NavLink,
} from "react-router-dom";


class ProjectTimeLine extends Component {
   

    render() {

        return <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--research"
            date="2020 - Current"
            dateClassName="datess"
            icon={<IconPicker iconName={"research2"} />}
            >
            <h4 className="vertical-timeline-element-subtitle">Home Lab</h4>
            <p>Did research project during COVID 2020 to build a home server on an old computer.<br />
                The project involved researching standards and regulations about servers, server logging, data storage, server and application hardening, data encapsulation, and virturalization to name a few.<br />

                The outcome was documented in my <a href="https://dev.to/caffiendkitten/building-a-home-test-server-27h1" target="_blank" rel="noopener noreferrer" >blog series "Building a Home Test Server"</a> and will be used moving forward to test applications on in a semi-production-like environment.
            </p>
            <div className="projectsBlock-links">
                <a href="https://dev.to/caffiendkitten/building-a-home-test-server-27h1" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Building a Home Test Server (Definitions)</a><br />
                <a href="https://dev.to/caffiendkitten/l-is-for-linux-512n" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >"L" is for Linux</a>
                <a href="https://dev.to/caffiendkitten/a-is-for-apache-3iem" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >"A" is for Apache</a>
                <a href="https://dev.to/caffiendkitten/m-is-for-mysql-3a9j" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >"M" is for MySQL</a>
                <a href="https://dev.to/caffiendkitten/p-is-for-php-1d7l" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >"P" is for PHP</a><br />
                <a href="https://dev.to/caffiendkitten/adding-react-to-a-server-nm6" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Adding React to a Server</a><br />
                <a href="https://dev.to/caffiendkitten/adding-ssl-to-a-server-28p9" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Adding SSL to a Server</a><br />
                <a href="https://dev.to/caffiendkitten/adding-ruby-on-rails-to-a-server-1n4b" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Adding Ruby on Rails to a Server</a><br />
                <a href="https://dev.to/caffiendkitten/app-server-cors-config-1b40" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Application Server & CORS Config</a><br />
                <span className="projectsBlock-linksItem">Comming Soon: Server Hardening</span>
            </div>    
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--research"
            date="2020 - Current"
            dateClassName="datess"

            icon={<IconPicker iconName={"research2"} />}
            >
            <h4 className="vertical-timeline-element-subtitle">Password Manager Application PentestReport:</h4>
            <p>This repository is a report done on my final project at Flatiron School, 
            the <a href="https://flatiron-passwordmanager.netlify.app/" target="_blank" rel="noopener noreferrer">password manager</a>.<br />
            This report will be an ongoing, full evaluation of the security posture of the 
            application compared to current industry best practices, such as OWASP top 10, PTES, and NIST. <br />
            This will include both manual and automated testing as well as an evaluation of the vulnerabilities 
            found and their suggested remediation.
            </p>
            <div className="projectsBlock-links">
                <a href="https://github.com/caffiendkitten/PenTestReport" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/PenTestReport</a><br />
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2019"
            dateClassName="datess"

            icon={<IconPicker iconName={"education2"} />}
            >
            {/* <h3 className="vertical-timeline-element-title">Academic Project</h3> */}
            {/* <div className="projectsBlock">
                <span className="projectsBlock-technologies">React</span>
                <span className="projectsBlock-technologies">Vanilla JavaScript</span>
                <span className="projectsBlock-technologies">HTML/CSS</span>
                <span className="projectsBlock-technologies">Ruby on Rails</span>
                <span className="projectsBlock-technologies">JWT HS256</span>
                <span className="projectsBlock-technologies">Bcrypt</span>
                <span className="projectsBlock-technologies">Cryptr AES-256-CTR</span>
            </div> */}
            <h4 className="vertical-timeline-element-subtitle">Password Manager Application:</h4>
            <p>
                Full-stack web application allowing users to create individual groups of credentials, create unique and secure passwords, and save passwords for later use.
            </p>
            <div className="projectList">
                <span className="projectList2">Utilizes:</span>
                <ul>
                    <li>HTML, CSS, and React for frontend desgin</li>
                    <li>Cryptr AES-256-CTR encryption/decryption of user credential group data</li>
                    <li>Bcrypt password-hashing of login passwords</li>
                    <li>JavaScript and HTML for basic user input validation</li>
                    <li>JWT HS256 signatures for user state</li>
                    <li>Ruby on Rails and Postgres for the backend database and database validation</li>
                </ul> 
            </div> 
            <div className="projectsBlock-links">
                <a href="https://flatiron-passwordmanager.netlify.app/" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >https://flatiron-passwordmanager.netlify.app/</a><br />
                <a href="https://github.com/caffiendkitten/Final-Project-Backend" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Backend Repository</a><br />
                <a href="https://github.com/caffiendkitten/Final-Project-Frontend" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >Frontend Repository</a>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2019"
            dateClassName="datess"

            icon={<IconPicker iconName={"education2"} />}
            >
            <h4 className="vertical-timeline-element-subtitle">The Final FM:</h4>
            <p>
                A full-stack web application that allows users to search for artists by name or location and allows users to create and save favorite songs to their own account.
            </p>
            <div className="projectList">
                <span className="projectList2">Utilizes:</span>
                <ul>
                    <li>HTML, CSS, BoostStrap, and React for frontend design</li>
                    <li>JavaScript and HTML for basic user validation</li>
                    <li>The Last FM API for song and artist information</li>
                    <li>Ticket Master API for artist tour data information</li>
                    <li>JWT HS256 signatures for user state</li>
                    <li>Ruby on Rails and Postgres for the backend database and database validation</li>
                </ul> 
            </div>
            <div className="projectsBlock-links">
                <a href="https://the-final-fm.herokuapp.com" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >https://the-final-fm.herokuapp.com</a><br />
            </div>
        </VerticalTimelineElement>
 

        <VerticalTimelineElement
          className="vertical-timeline-element--research"
          date="2019 - Current"
          dateClassName="datess"

          icon={<IconPicker iconName={"research2"} />}
          >
            <h4 className="vertical-timeline-element-subtitle">Coding Payloads Project: </h4>
            <p>
                A repository for my methodology/approach to penetration testing along with any payloads that I have used for the process.<br />
                This is an ongoing process and will continue to grow as my skills do.
            </p>
            <div className="projectsBlock-links">
                <a href="https://github.com/caffiendkitten/codeProjects" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/codeProjects</a><br />
            </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--fun"
            date="November 2018"
            dateClassName="datess"

            icon={<IconPicker iconName={"fun"} />}
            >
            <h4 className="vertical-timeline-element-subtitle">3D Planter: </h4>
            <p>
                A repository is for a 3D workshop that I attended where we made a planter to be 3D printed.
            </p>
            <div className="projectsBlock-links">
                <a href="https://github.com/caffiendkitten/3DPlant" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer">https://github.com/caffiendkitten/3DPlant</a><br />
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--fun"
            date="March 13, 2018"
            dateClassName="datess"

            icon={<IconPicker iconName={"education2"} />}
            >
            <h4 className="vertical-timeline-element-subtitle">Seattle Crime Dashboard 2017: </h4>
            <p>
                A Tableau dashboard visualizing 2017 Seattle Crime data.
            </p>
            <div className="projectsBlock-links">
                {/* <a href="https://public.tableau.com/profile/daneil.coulthard#!/vizhome/SeattleCrimeDashboard2017_0/Dashboard1" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer">https://public.tableau.com/profile/daneil.coulthard#!/vizhome/SeattleCrimeDashboard2017_0/Dashboard1</a><br /> */}

                <NavLink to="/TableauProject" className="projectsBlock-linksItem">
                    Interactive Tableau Dashboard
                </NavLink>
                
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2015"
            dateClassName="datess"

            icon={<IconPicker iconName={"work"} />}
            >
            <h4 className="vertical-timeline-element-title">Website Design: On the Fly Espresso</h4>
            <p>
                Worked with owner to builb a website for coffee shop, On the Fly Espresso, in Alaska from 2011 until 2013 when shop was sold.<br />
                I worked closely with the owner, Ms. Coulthard, to help design the logo, punch card, website, menu layout, and social media presence. I also worked with Ms. Coulthard to enable her to update social media and menu to enable her to update as needed for special daily deals.
            </p>
            <div className="projectsBlock-links">
                <a href="Images/OnTheFlyEspressoLogo.jpg" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" ><img src="Images/OnTheFlyEspressoLogo.jpg" alt="On The Fly Espresso Logo" height="150" /></a>
                <a href="Images/OnTheFlyEspressoSite.jpg" className="projectsBlock-linksItem" target="_blank" rel="noopener noreferrer" ><img src="Images/OnTheFlyEspressoSite.jpg" alt="On The Fly Espresso Site" height="150" /></a><br />
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--end"
            icon={<IconPicker iconName={"end"} />}
        >
        </VerticalTimelineElement>

      </VerticalTimeline>      
}
}      
export default ProjectTimeLine