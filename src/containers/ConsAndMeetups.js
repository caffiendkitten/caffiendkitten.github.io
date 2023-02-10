import React from 'react'
import Footer from "./Footer.js"
import IconPicker from '../docs/iconsList.js'


const ConsAndMeetups = () => {
    return <div className="content">
        <h3>Cons And Meetups</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>

            <div className="column middle">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h4><i className="icon">{<IconPicker iconName={"id-cardIcon"} />}</i> Conferences<p>(Online/In Person)</p></h4>
                            <div className="technicalSkills">
                                <ul className="resourcesSide">
                                    <li className="hum">GRIMM Con 0x5 | July 14, 2021</li>
                                    <li className="hum">Cyber Security Summit: Seattle/Portland | June 23, 2021</li>
                                    <li className="hum">GRIM Con | March 17, 2021</li>
                                    <li className="hum">ZAP Con | March 9, 2021</li>
                                    <li className="hum">BSides Seattle | October 17, 2020</li>
                                    <li className="hum">Cyber Security Summit: Seattle | October 9, 2020</li>
                                    <li className="hum"><a href="https://www.dianainitiative.org/" target="_blank" rel="noopener noreferrer" >The Diana Initiative</a> | August 21-22, 2020</li>
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
                                    <li className="hum"><a href="https://www.dianainitiative.org/" target="_blank" rel="noopener noreferrer" >The Diana Initiative</a> | August 9-10, 2019</li>
                                    <li className="hum">DefCon | August 8-11, 2019</li>
                                    <li className="hum">GIX Women in Tech Con | April 13, 2019</li>
                                    <li className="hum">BSides Seattle | February 23, 2019</li>
                                    <li className="hum">Women in Cloud Summit | January 26, 2019</li>
                                </ul>
                                <table><tbody>
                                    <tr><td><ul><li className="hum">Human</li></ul></td><td><ul><li className="vul">Volunteer</li></ul></td></tr>
                                    </tbody>
                                </table>                        
                            </div>                            
                        </td>
                        <td>
                            <h4><i className="icon">{<IconPicker iconName={"conversation"} />}</i> Meetups</h4>
                            <div className="technicalSkills">
                                <ul className="meet">
                                    <li><a href="https://www.meetup.com/Black-Lodge-Research/" target="_blank" rel="noopener noreferrer">Black Lodge Research</a></li>
                                    <li>ChickTech: Seattle Meetup</li>
                                    <li><a href="https://www.csnp.org/" target="_blank" rel="noopener noreferrer">Cyber Security NonProfit (CSNP)</a> - Seattle, WA</li>
                                    <li>D.C. Cybersecurity Professionals</li>
                                    <li>DevSecOps Seattle</li>
                                    <li>Free Code Camp Seattle</li>
                                    {/* <li>Girls in Tech Seattle</li> */}
                                    <li>Hacks/Hackers Seattle</li>
                                    <li>InfoSec Happy Hour</li>
                                    {/* <li>ISSA Puget Sound</li> */}
                                    {/* <li>Learn to Code Seattle</li> */}
                                    <li>New Tech Seattle</li>
                                    <li>Nordstrom Technology Seattle</li>
                                    {/* <li>Tech Ladies</li> */}
                                    <li><a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" >OWASP</a> - <a href="https://www.meetup.com/Seattle-Open-Web-Application-Security-Project-OWASP-Chapter/" target="_blank" rel="noopener noreferrer" >Seattle Chapter</a></li>
                                    <li>SeaSec East - Information Security Meetup</li>
                                    <li><a href="https://www.meetup.com/SeattleCTF/" target="_blank" rel="noopener noreferrer">Seattle CTF</a></li>
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
                                    <li><a href="https://www.wearehackerz.org/" target="_blank" rel="noopener noreferrer">WeAreHackerz (formerly known as WomenHackerz)</a></li>
                                    {/* <li><a href="https://womencybersecuritysociety.org/" target="_blank" rel="noopener noreferrer" >Women CyberSecurity Society (WCS2)</a></li> */}
                                    <li><a href="https://www.wicys.org/" target="_blank" rel="noopener noreferrer">Women in Cyber Security (WiCyS)</a></li>
                                    <li><a href="https://www.wisporg.com/" target="_blank" rel="noopener noreferrer" >Women in Security and Privacy (WISP)</a> - Puget Sound</li>
                                    <li><a href="https://www.womenwhocode.com/" target="_blank" rel="noopener noreferrer">Women Who Code Seattle</a></li>
                                    <li><a href="https://www.womenofsecurity.com/" target="_blank" rel="noopener noreferrer" >Women of Security (WoSEC)</a> - San Francisco, CA</li>
                                    <li><a href="https://www.womenofsecurity.com/" target="_blank" rel="noopener noreferrer" >Women of Security (WoSEC)</a> - Seattle, WA</li>
                                    <li><a href="https://www.womenofsecurity.com/" target="_blank" rel="noopener noreferrer" >Women of Security (WoSEC)</a> - Victoria, BC</li>
                                    <li><a href="https://www.womenofsecurity.com/" target="_blank" rel="noopener noreferrer" >Women of Security (WoSEC)</a> - Portland, Or</li>
                                    {/* <li><a href="https://womenscyberjutsu.org/" target="_blank" rel="noopener noreferrer" >Women Society of Cyberjutsu (WSC) </a></li> */}
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