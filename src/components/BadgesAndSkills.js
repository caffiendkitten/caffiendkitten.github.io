import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';
import badgeFilePath from './../docs/badges.csv'
import Footer from "../containers/Footer.js"
import BadgeDatas from './BadgeData.js'
import Loading from '../containers/Loading'
import postscribe from 'postscribe';
import IconPicker from '../docs/iconsList.js'

var badgeDataArray = [];

class Education extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			addClass: false,
			navClass: "",
            badgeState: [],
            THMBadge: true 
        };

        this.getData = this.getData.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.getCsvData(badgeFilePath, badgeDataArray, "badgeState");
        // this.forceUpdate()
    }

    componentWillUnmount() {
        badgeDataArray = []
    }

    getpostscribez(){
        postscribe('#TryHackMe', '<script src="https://tryhackme.com/badge/106028"></script>')
        postscribe('#HackTheBox', '<script src="https://www.hackthebox.eu/badge/67366"></script>')
    }
    postscribez(){
        {this.state.THMBadge === true?
            this.getpostscribez()
        :
        this.setState({
            THMBadge: false
        })
        }

    }

    async fetchCsv(filepath) {
        return await fetch(filepath)
        .then(async function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');
            const result = await reader.read();
            
            return decoder.decode(result.value);
        });
    }

    getData(dataType, dataState){
        return this.setState({ [dataState]: dataType})
    }

    async getCsvData(FilePath, dataType, dataState) {
        let fileData = await this.fetchCsv(FilePath);
        Papa.parse(fileData, {
            header: true,
            // skipEmptyLines: true,
            step: function(parsedOutput) {
                dataType.push(parsedOutput.data)
            },
            complete: this.getData(dataType, dataState)
        });
        this.forceUpdate()
        this.postscribez()

    }

    render() {
        return (<div className="content">
            
        <h3>Skills / Certs / Badges</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">

                {this.state.badgeState.length < 14?
                <Loading />
                :
                <div className="eduCol">
                    <table className="badgetable">
                    <tr>
                        <td>
                            <h4><i className="icon">{<IconPicker iconName={"handShakeIcon"} />}</i> Soft Skills</h4>
                            <div className="technicalSkills">
                            <ul>
                                <li>Accountability</li>
                                <li>Adaptable</li>
                                <li>Attention to Detail</li>
                                <li>Collaboration & Teamwork</li>
                                <li>Interpersonal Skills</li>
                                <li>Mentoring of New Consultants</li>
                                <li>Strong Organization Skills</li>
                                <li>Works Well Under Pressure</li>
                            </ul>
                            </div>
                        </td>
             
                        <td>
                            <h4><i className="icon">{<IconPicker iconName={"computer2Icon"} />}</i> Technical Skills</h4>
                            <div className="technicalSkills">
                                {/* <p>Working knowledge of:
                                    <ul>
                                        <li>Common Security tools such as Burp Suite, Nessus, Nmap, SQLMap, WireShark, ZAProxy, etc.</li>
                                        <li>Building and accessing databases with NoSQL and Node.js</li>
                                        <li>Common Developer Tools</li>
                                        <li>Git Version Control</li>
                                        <li>Web Application Architecture</li>
                                    </ul>
                                </p>

                                <p>Knowledge of:
                                    <ul>
                                        <li>Security Vulnerabilities and Remediation as Listed in OWASP</li>
                                        <li>Cybersecurity Compliance Regulations such as Cybersecurity Maturity Model Certification (CMMC), GDPR,  NIST Risk Management Framework (RMF), Sarbanes-Oxley Act (SOX)</li>
                                        <li>HTTP Protocols</li>
                                        <li>SSL Certificates</li>
                                    </ul>
                                </p> */}
        {

        // Penetration Testing (Burp Suite, ZAP, WireShark, Hydra, SQLMap, Kali), HTML5/CSS3, JavaScript, PHP, Python, React, Ruby, SQL, Apache HTTP Server, Common Operating Systems (Windows, Ubuntu, Mac OSx, Linux), Knowledge of Security Vulnerabilities and Remediation as Listed in OWASP, Secure Software Development, and Automation.

        /* 
        <p>
                        HTML/CSS        █████████████████▓░░░░░░░   70.29 % <br />
                        Java          ███████▓░░░░░░░░░░░░░░░░░   45.1  % <br />
                        JavaScript/React █████████████████▓░░░░░░░   70.29 % <br />
                        PHP              █████████████████▓░░░░░░░   70.29 % <br />
                        Python           █████████████████▓░░░░░░░   70.29 % <br />
                        Markdown         ██████████████▓░░░░░░░░░░   65.0  % <br />
                        Shell Scripting  ████████████▓░░░░░░░░░░░░   40.2  % <br /> 
                        Ruby on Rails    ██▒░░░░░░░░░░░░░░░░░░░░░░   09.61 %  <br />
                        SQL              ██░░░░░░░░░░░░░░░░░░░░░░░   07.63 %  <br />
                        C#               ░░░░░░░░░░░░░░░░░░░░░░░░░   00.25 %  <br />
            
                        </p> */}



                                <p>
                                    <b>Languages:</b> HTML5/CSS3, JavaScript/React, PHP, Python, Ruby on Rails, Java, SQL <br />
                                    <b>Scripting:</b> Python, Bash <br />
                                    <b>Libraries/Frameworks:</b> React.js, Rails, jQuery, Bootstrap, JWT<br />
                                    <b>Security Tools and Solutions:</b> Apache HTTP Server, Automation, Burp Suite, Content Filtering, Git, Github, Hydra, IPS/IDS, John the Ripper, MongoDB, OS Hardening, PKI, Proxies, Secure Software Development, Security Analysis, SQLMap, VPN, VSCode, WireShark, ZAP<br />
                                    <b>Operating Systems:</b> Windows, Ubuntu, Mac OSx, Linux<br />
                                    <b>Database:</b> PostgreSQL, MongoDB<br />
                                    <b>Methodologies:</b> OWASP, PTES, OSSTMM (Open Source Security Testing Methodology Manual)<br />
                                </p>
                                

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4><i className="icon">{<IconPicker iconName={"certificateIcon"} />}</i> Certifications</h4>
                            <div className="technicalSkills">
                            <ul>
                                {/* <li><img src="http://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-C2BEVSLY58.png" alt="W3Schools Certified"/>The HTML Developer Certificate, December 17, 2009</li>
                                <li><img src="http://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-EWAZ16KOPS.png" alt="W3Schools Certified"/>The HTML Developer Certificate, December 17, 2009</li> */}
                                <li><a href="https://certification.w3schools.com/w3certified.asp?email=1615177">
                                <img src="Images/w3certified_logo.png" alt="W3Schools Certified"/><p>The HTML Developer Certificate, December 17, 2009</p></a></li>
                            </ul>
                                
                            </div>
                        </td>
                        <td>
                            <h4><i className="icon">{<IconPicker iconName={"computer3Icon"} />}</i> GitHub Top Used Languages</h4>
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Caffiendkitten" />
                        </td>
                    </tr>
                    </table>
                    
                    



                                                          


                    <h4><i className="icon">{<IconPicker iconName={"badgeIcon"} />}</i> Badges</h4>
                    <span className="badgeHere">
                        {this.state.THMBadge === false?
                        <span>
                            <img src="https://tryhackme-badges.s3.amazonaws.com/CaffiendKitten.png" alt="TryHackMe" />
                            <img src="http://www.hackthebox.eu/badge/image/67366" alt="Hack The Box" />
                        </span>
                        :
                        <span>
                            <span id="TryHackMe"></span><span id="HackTheBox"></span>                    
                        </span>
                        }
                    </span>
                    
                    <BadgeDatas edu={this.state.badgeState}/>
                    <br />


                </div>
                }
            </div>
            <div className="column right">
                <p className="resourcesSide"></p>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
            
    </div>      
        );
    }
}

export default withRouter(Education);