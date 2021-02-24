import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




class ProjectTimeLine extends Component {

    render() {

        return <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--research"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}

            date="2020 - 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //   icon={<WorkIcon />}
            >
            {/* <h3 className="vertical-timeline-element-title">Web Designer</h3> */}
            <h4 className="vertical-timeline-element-subtitle">Home Lab</h4>
            <p>Did research project during COVID 2020 to build a home server on an old computer.<br />
                The project involved researching standards and regulations about servers, server logging, data storage, server and application hardening, data encapsulation, and virturalization to name a few.<br />

                The outcome was documented in my <a href="https://dev.to/caffiendkitten/building-a-home-test-server-27h1" target="_blank" rel="noopener noreferrer" >blog series "Building a Home Test Server"</a> and will be used moving forward to test applications on in a semi-production-like environment.
            </p>
            <p className="projectInfo right">
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
        </p>    
        </VerticalTimelineElement>

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            icon={<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" stroke="black" fill="black" >
                </path>
                </svg>}
            >
            {/* <h3 className="vertical-timeline-element-title">Academic Project</h3> */}
            <h4 className="vertical-timeline-element-subtitle">Password Manager Application:</h4>
            <p>
                Full-stack web application allowing users to create individual groups of credentials, create unique and secure passwords, and save passwords for later use.
            </p>
            <p>
                Utilizes:
                <ul>
                    <li>HTML, CSS, and React for frontend desgin</li>
                    <li>Cryptr AES-256-CTR encryption/decryption of user credential group data</li>
                    <li>Bcrypt password-hashing of login passwords</li>
                    <li>JavaScript and HTML for basic user input validation</li>
                    <li>JWT HS256 signatures for user state</li>
                    <li>Ruby on Rails and Postgres for the backend database and database validation</li>
                </ul> 
            </p>
            <p className="projectInfo right">
                <a href="https://flatiron-passwordmanager.netlify.app/" target="_blank" rel="noopener noreferrer" >https://flatiron-passwordmanager.netlify.app/</a><br />
                <a href="https://github.com/caffiendkitten/Final-Project-Backend" target="_blank" rel="noopener noreferrer" >Backend Repository</a><br />
                <a href="https://github.com/caffiendkitten/Final-Project-Frontend" target="_blank" rel="noopener noreferrer" >Frontend Repository</a>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" stroke="black" fill="black" ></path></svg>}
            >
            {/* <h3 className="vertical-timeline-element-title">The Final FM:</h3> */}
            <h4 className="vertical-timeline-element-subtitle">The Final FM:</h4>
            <p>
                A full-stack web application that allows users to search for artists by name or location and allows users to create and save favorite songs to their own account.
            </p>
            <p>
                Utilizes:
                <ul>
                    <li>HTML, CSS, BoostStrap, and React for frontend desgin</li>
                    <li>JavaScript and HTML for basic user validation</li>
                    <li>The Last FM API for song and artist informaiton</li>
                    <li>Ticket Master API for artist tour data informaiton</li>
                    <li>JWT HS256 signatures for user state</li>
                    <li>Ruby on Rails and Postgres for the backend database and database validation</li>
                </ul> 
            </p>
            <p className="projectInfo right">
                <a href="https://the-final-fm.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://the-final-fm.herokuapp.com</a><br />
            </p>
        </VerticalTimelineElement>
 
        <VerticalTimelineElement
            className="vertical-timeline-element--research"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //   icon={<WorkIcon />}
            >
            {/* <h3 className="vertical-timeline-element-title">Web Designer</h3> */}
            <h4 className="vertical-timeline-element-subtitle">Password Manager Application PentestReport:</h4>
            <p>This repository is a report done on my final project at Flatiron School, 
            the <a href="https://flatiron-passwordmanager.netlify.app/" target="_blank" rel="noopener noreferrer">password manager</a>).<br />
            This report will be an ongoing, full evaluation of the security posture of the 
            application compared to current industry best practices, such as OWASP top 10, PTES, and NIST. <br />
            This will include both manual and automated testing as well as an evaluation of the vulnerabilities 
            found and their suggested remediation.
            </p>
            <p className="projectInfo right">
                <a href="https://github.com/caffiendkitten/PenTestReport" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/PenTestReport</a><br />
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--research"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            //   icon={<SchoolIcon />}
            >
            {/* <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3> */}
            <h4 className="vertical-timeline-element-subtitle">Coding Payloads Project: </h4>
            <p>
                A repository for my methodology/approach to penetration testing along with any payloads that I have used for the process.<br />
                This is an ongoing process and will continue to grow as my skills do.
            </p>
            <p className="projectInfo right">
                <a href="https://github.com/caffiendkitten/codeProjects" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/codeProjects</a><br />
            </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--fun"
            date="November 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="Star" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"  stroke="black" fill="blue" ></path></svg>}
            >
            {/* <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3> */}
            <h4 className="vertical-timeline-element-subtitle">3D Planter: </h4>
            <p>
                A repository is for a 3D workshop that I attended where we made a planter to be 3D printed.
            </p>
            <p className="projectInfo right">
                <a href="https://github.com/caffiendkitten/3DPlant" target="_blank" rel="noopener noreferrer">https://github.com/caffiendkitten/3DPlant</a><br />
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            //   icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title">Website Design: On the Fly Espresso</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
                Worked with owner to builb a website for coffee shop, On the Fly Espresso, in Alaska from 2011 until 2013 when shop was sold.<br />
                I worked closely with the owner, Ms. Coulthard, to help design the logo, punch card, website, menu layout, and social media presence. I also worked with Ms. Coulthard to enable her to update social media and menu to enable her to update as needed for special daily deals.
            </p>
            <p className="projectInfo right">
                <a href="Images/OnTheFlyEspressoLogo.jpg" target="_blank" rel="noopener noreferrer" ><img src="Images/OnTheFlyEspressoLogo.jpg" alt="On The Fly Espresso Logo" height="150" /></a>
                <a href="Images/OnTheFlyEspressoSite.jpg" target="_blank" rel="noopener noreferrer" ><img src="Images/OnTheFlyEspressoSite.jpg" alt="On The Fly Espresso Site" height="150" /></a><br />
            </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<svg class="MuiSvgIcon-root jss167" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="Star" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="Star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>}
        >
        <p>End</p>
        </VerticalTimelineElement> */}

      </VerticalTimeline>      
}
}      
export default ProjectTimeLine