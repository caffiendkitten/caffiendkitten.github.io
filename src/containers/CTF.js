import React from 'react'
import Footer from "./Footer.js"
// import postscribe from 'postscribe';

// class Education extends Component {
//     componentDidMount() {
//         postscribe('#TryHackMe', '<script src="https://tryhackme.com/badge/106028"></script>')
//         postscribe('#HackTheBox', '<script src="https://www.hackthebox.eu/badge/67366"></script>')
//     }

const CTF = () => {
    return <div className="content">
        <h3>CTF Work</h3>
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle projects">
            <table>
                <tr>
                    <td><h4><i class="fas fa-bug"></i> CTF Participation</h4></td>
                    <td><h4><i class="far fa-file-alt"></i> CTF Writeups</h4></td>
                </tr>

                <tr>
                    <td>
                        <p><b>Women Unite Over CTF 3.0</b><br/>
                            February 13, 2021</p>
                        <p><b>WoSec Stockholm x Detectify CTF Challenge!</b><br/>
                            February 4, 2021</p>
                        <p><b>Attack in Autumn</b><br/>
                            Sept 24-26, 2020<br /></p>                        
                        <p><b>2nd annual Hot Dogs & Hacking CMD+CTRL Cyber Range event</b><br/>
                            July 2-4, 2020<br /></p>
                        <p><b>WoSEC & Security Innovation CTF Event</b><br/>
                            June 27, 2020<br />
                            Rank: 1st place</p>
                        <p><a href="https://github.com/caffiendkitten/CTFs/tree/master/NahamSecCon" target="_blank" rel="noopener noreferrer" ><b>NahamSec Con CTF</b></a><br/>
                            June 13-14, 2020<br /></p>
                        <p><b>DC-CyberWarriors CTF</b><br/>
                            June 11-12, 2020<br />
                            Rank: 8th place</p>
                        <p><b>WHackzCon CTF</b><br/>
                            June 6-7, 2020<br /></p>
                        <p><b>Secure|Set and WiCyS CTF</b><br/>
                            May 2, 2020<br />
                            Rank: 20th place</p>
                        <p><b>Derp Con Tiger King CTF</b><br />
                            May 1, 2020<br />
                            Rank: 444/614</p>
                        <p><b>UMBC Cyber Dawgs</b><br/>
                            April 10-12, 2020</p>
                        <p><b>VirSec Con 2020</b><br/>
                            April 4, 2020</p>
                        <p><b>Escalate Hack to Help 2020</b><br/>
                            March 26 - April 22, 2020</p>
                        <p><b>Cyber FastTrack</b><br/>
                            March 26-27, 2020</p>
                        <p><a href="https://dev.to/caffiendkitten/progress-check-from-1400pts-77000pts-4648" target="_blank" rel="noopener noreferrer"><b>Pancakes Con CTF</b></a><br/>
                            March 22, 2020<br />
                            Rank: 78/975</p>
                        <p><b>March Hackness 2020</b><br/>
                            March 19-21, 2020<br />
                            Rank: 39/796</p>
                        <p><b>Women Unite Over CTF 2.0</b><br/>
                            February 25, 2019</p>
                        <p><a href="https://github.com/caffiendkitten/CTFs/tree/master/0x00sec" target="_blank" rel="noopener noreferrer"><b>0x00sec CTF</b></a><br/>
                            February 11 - May 8, 2019</p>                            
                        <p><b>Women Unite Over CTF</b><br/>
                            November 2, 2019</p>
                        <p><b>Defend Con CTF</b><br/>
                            Sept 26-27, 2019<br />
                            Rank: 18/40</p>
                    </td>                    
                    <td>
                        <p>
                        <a href="https://github.com/caffiendkitten/CTFs/tree/master/HTB" target="_blank" rel="noopener noreferrer" ><b>Hack The Box </b></a><br/>
                            {/* <div className="technicalSkills">
                                <b>HackTheBox</b>
                                <ul>
                                    <li  id="HackTheBox" ></li>
                                </ul>
                            </div> */}
                            <a href="https://dev.to/caffiendkitten/htb-ctf-i-know-mag1k-2g7b" target="_blank" rel="noopener noreferrer" >I know Mag1k</a><br />                        
                            <a href="https://dev.to/caffiendkitten/htb-ctf-freelancer-1ff6" target="_blank" rel="noopener noreferrer" >FreeLancer</a><br />                        
                            <a href="https://dev.to/caffiendkitten/htb-ctf-decode-me-3n8a" target="_blank" rel="noopener noreferrer" >Decode Me!!</a><br />                        
                            <a href="https://dev.to/caffiendkitten/htb-ctf-ezpz-2edg" target="_blank" rel="noopener noreferrer" >ezpz</a><br />                        
                        </p>
                        <p>
                        <a href="https://github.com/caffiendkitten/CTFs/tree/master/Hacker101" target="_blank" rel="noopener noreferrer" ><b>Hacker 101 CTFs</b></a><br/>
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-hello-world-1627" target="_blank" rel="noopener noreferrer" >Hello World!</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-ticketastic-live-instance-3nch" target="_blank" rel="noopener noreferrer" >Ticketastic: Live Instance</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-cody-s-first-blog-da8" target="_blank" rel="noopener noreferrer" >Cody's First Blog</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-photo-gallery-4foi" target="_blank" rel="noopener noreferrer" >Photo Gallery</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-h1-thermostat-4156" target="_blank" rel="noopener noreferrer" >H1 Thermostat</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-bugdb-v3-4eo1" target="_blank" rel="noopener noreferrer" >BugDB v3</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-bugdb-v1-7d2" target="_blank" rel="noopener noreferrer" >BugDB v2</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-bugdb-v1-hnc" target="_blank" rel="noopener noreferrer" >BugDB v1</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-petshop-pro-100p" target="_blank" rel="noopener noreferrer" >Petshop Pro</a><br />
                            <a href="https://dev.to/caffiendkitten/ctf-postbook-2dpd" target="_blank" rel="noopener noreferrer" >Postbook</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-micro-cms-v1-3jo4" target="_blank" rel="noopener noreferrer" >Micro-CMS v1</a><br />
                            <a href="https://dev.to/caffiendkitten/hacker101-ctf-micro-cms-v2-2b0l" target="_blank" rel="noopener noreferrer" >Micro-CMS v2</a>
                        </p>

                        <p>
                        <a href="https://github.com/caffiendkitten/CTFs/tree/master/PortSwigger" target="_blank" rel="noopener noreferrer" ><b>PortSwigger</b></a><br/>
                            <a href="https://dev.to/caffiendkitten/web-sec-academy-ctf-validation-of-csrf-token-depends-on-request-method-45mo" target="_blank" rel="noopener noreferrer" >Validation of CSRF token depends on request method</a><br />
                            <a href="https://dev.to/caffiendkitten/web-sec-academy-ctf-csrf-vulnerability-with-no-defenses-817" target="_blank" rel="noopener noreferrer" >CSRF vulnerability with no defenses</a><br />
                        </p>
                        <p>
                        <a href="https://github.com/caffiendkitten/CTFs/tree/master/NahamSecCon" target="_blank" rel="noopener noreferrer" ><b>NahamSec Con CTF</b></a><br />
                            <a href="https://dev.to/caffiendkitten/nahamcon-ctf-2020-official-business-adm" target="_blank" rel="noopener noreferrer" >Official Business</a><br />
                            <a href="https://dev.to/caffiendkitten/nahamcon-ctf-2020-phphonebook-3pin" target="_blank" rel="noopener noreferrer" >Phphonebook</a><br />
                            <a href="https://dev.to/caffiendkitten/nahamcon-ctf-2020-localghost-42jo" target="_blank" rel="noopener noreferrer" >Localghost</a><br />
                            <a href="https://dev.to/caffiendkitten/nahamcon-ctf-2020-agent-95-2601" target="_blank" rel="noopener noreferrer" >Agent 95</a><br />
                        </p>
                        <p>
                        <a href="https://github.com/caffiendkitten/CTFs/tree/master/0x00sec" target="_blank" rel="noopener noreferrer" ><b>0x00sec</b></a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-7-5526" target="_blank" rel="noopener noreferrer" >Exercise #7</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-6-2i4n" target="_blank" rel="noopener noreferrer" >Exercise #6</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-5-11o8" target="_blank" rel="noopener noreferrer" >Exercise #5</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-4-3a2n" target="_blank" rel="noopener noreferrer" >Exercise #4</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-3-54b3" target="_blank" rel="noopener noreferrer" >Exercise #3</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-2-1km8" target="_blank" rel="noopener noreferrer" >Exercise #2</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-1-5dgd" target="_blank" rel="noopener noreferrer" >Exercise #1</a><br />
                        </p>                       
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
        
export default CTF