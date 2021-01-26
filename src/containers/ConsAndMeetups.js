import React from 'react'
import Footer from "./Footer.js"


const ConsAndMeetups = () => {
    return <div className="content">
        <h3>Cons And Meetups</h3>
        {/* <p>Events and conferences I have attended.</p> */}
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>

            <div className="column middle">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h4><i class="fas fa-id-card-alt"></i> Conferences (Online/In Person)</h4>
                            <div className="technicalSkills">
                                <ul className="resourcesSide">
                                    <li className="hum">BSides Seattle | October 17, 2019</li>
                                    <li className="hum">Cyber Security Summit: Seattle | October 9, 2020</li>
                                    <li className="hum">The Diana Initiative | August 21-22, 2020</li>
                                    <li className="hum">Hacktivity Con | August 1, 2020</li>
                                    <li className="hum">NahamSec Con | June 13-14, 2020</li>
                                    <li className="hum">WHackzCon | June 6-7, 2020</li>
                                    <li className="hum">SANS HackFest & Cyber Ranges Summit | June 4-5, 2020</li>
                                    <li className="hum">Women in Cybersecurity CtF | SecureSet and WiCyS | May 2, 2020</li>
                                    <li className="hum">BSides Knoxville | May 1, 2020</li>
                                    <li className="hum">Isolation Con | April 19, 2020</li>
                                    <li className="hum">GRIMM Con | April 14, 2020</li>
                                    <li className="hum">VirSec Con | April 4, 2020</li>
                                    <li className="hum">BSides Atlanta | March 28, 2020</li>
                                    <li className="hum">Pancakes Con | March 22, 2020</li>
                                    <li className="hum">Women in Science and Engineering | February 1, 2020</li>
                                    <li className="vul">2020 Job Fair | Jan 29, 2020</li>
                                    <li className="vul">Diversity & Women in Tech | Jan 22, 2020</li>
                                    <li className="hum">HushCon Seattle | 2019</li>
                                    <li className="hum">ACT-W | October 26, 2019</li>
                                    <li className="hum">DefendCon | September 26-27, 2019</li>
                                    <li className="hum">Seattle Code Camp | September 14, 2019</li>
                                    <li className="hum">The Diana Initiative | August 9-10, 2019</li>
                                    <li className="hum">DefCon | August 8-11, 2019</li>
                                    <li className="hum">GIX Women in Tech Con | April 13, 2019</li>
                                    <li className="hum">BSides Seattle | February 23, 2019</li>
                                    <li className="hum">Women in Cloud Summit | January 26, 2019</li>
                                </ul>
                                <table>
                                    <tr><td><ul><li className="hum">Human</li></ul></td><td><ul><li className="vul">Volunteer</li></ul></td></tr>
                                </table>                        
                            </div>                            
                        </td>

                        <td>
                            <h4><i class="fas fa-handshake"></i> Meetup/EventBrite Participant</h4>
                            <div className="technicalSkills">
                                <ul className="meet">
                                    <li>Black Lodge Research</li>
                                    <li>ChickTech: Seattle Meetup</li>
                                    <li>CSNP - Cyber Security NonProfit</li>
                                    <li>D.C. Cybersecurity Professionals</li>
                                    <li>DevSecOps Seattle</li>
                                    <li>Free Code Camp Seattle</li>
                                    <li>Girls in Tech Seattle</li>
                                    <li>Hacks/Hackers Seattle</li>
                                    <li>InfoSec Happy Hour</li>
                                    <li>Learn to Code Seattle</li>
                                    <li>New Tech Seattle</li>
                                    <li>Nordstrom Technology Seattle</li>
                                    <li>Tech Ladies</li>
                                    <li>The OWASP Seattle Chapter</li>
                                    <li>SeaSec East - Information Security Meetup</li>
                                    <li>Seattle CTF</li>
                                    <li>Seattle Cyber Security for Control Systems</li>
                                    <li>Seattle Cybersecurity Training</li>
                                    <li>Seattle Girl Geek Dinners</li>
                                    <li>Seattle Identity and Security Meetup</li>
                                    <li>Seattle Women in Technology Meetup</li>
                                    <li>SecureSet</li>
                                    <li>Security Bsides Seattle</li>
                                    <li>She Codes Now (Seattle)</li>
                                    <li>She's Coding (Seattle)</li>
                                    <li>Software Secured and Reshift Security</li>
                                    <li>South sound hackers Meetup</li>
                                    <li>WomenHack</li>
                                    <li>Women CyberSecurity Society (WCS2)</li>
                                    <li>Women in Cyber Security</li>
                                    <li>Women in Information Security - Puget Sound (WISPS)</li>
                                    <li>Women Who Code Seattle</li>
                                    <li>WoSEC San Francisco: Women of Security</li>
                                    <li>WoSec Seattle: Women of Security - Seattle, WA</li>
                                    <li>WoSEC Victoria: Women of Security (Victoria, BC)</li>
                                    <li>WoSEC: Women of Security Portland!</li>
                                    <li>Write/Speak/Code Seattle</li>
                                </ul>
                            </div>
                        </td>
                    </tr>  
                </tbody>                
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
        
export default ConsAndMeetups