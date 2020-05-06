import React from 'react'
import Footer from "./Footer.js"


const CTF = () => {
    return <div className="content">

        {/* <h3>CTFs</h3> */}
        {/* <table>
                <tr>
                    <th><u>Ongoing CTFs</u></th>
                    <th><u>Con/Short Term CTFs</u></th>
                </tr>
        </table> */}
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle projects">
            <table>
                <tr>
                    <th><h3>Ongoing CTFs</h3></th>
                    <th><h3>Con/Short Term CTFs</h3></th>
                </tr>

                <tr>
                    <td>
                        <p>
                        <b>0x00sec</b><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-6-2i4n" target="_blank" rel="noopener noreferrer" >Exercise #6</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-5-11o8" target="_blank" rel="noopener noreferrer" >Exercise #5</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-4-3a2n" target="_blank" rel="noopener noreferrer" >Exercise #4</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-3-54b3" target="_blank" rel="noopener noreferrer" >Exercise #3</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-2-1km8" target="_blank" rel="noopener noreferrer" >Exercise #2</a><br />
                            <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-1-5dgd" target="_blank" rel="noopener noreferrer" >Exercise #1</a><br />
                        </p>
                        <p>
                        <b>Hacker 101 CTFs</b> <br/>
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
                        <b>Hack The Box </b> <br/>
                            <a href="https://dev.to/caffiendkitten/htb-ctf-decode-me-3n8a" target="_blank" rel="noopener noreferrer" >Decode Me!!</a><br />                        
                            <a href="https://dev.to/caffiendkitten/htb-ctf-ezpz-2edg" target="_blank" rel="noopener noreferrer" >ezpz</a><br />                        
                        </p>
                        <p>
                        <b>PortSwigger</b><br/>
                            <a href="https://dev.to/caffiendkitten/web-sec-academy-ctf-validation-of-csrf-token-depends-on-request-method-45mo" target="_blank" rel="noopener noreferrer" >Validation of CSRF token depends on request method</a><br />
                            <a href="https://dev.to/caffiendkitten/web-sec-academy-ctf-csrf-vulnerability-with-no-defenses-817" target="_blank" rel="noopener noreferrer" >CSRF vulnerability with no defenses</a><br />
                        </p>
                    </td>
                    <td>
                        <p><b>Secure|Set and WiCyS CTF </b><br/>
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
                            March 26-April 22, 2020</p>
                        <p><b>Cyber FastTrack</b><br/>
                            March 26-27, 2020</p>
                        <p><a href="https://dev.to/caffiendkitten/progress-check-from-1400pts-77000pts-4648"><b>Pancakes Con CTF</b></a><br/>
                            March 22, 2020<br />
                            Rank: 78/975</p>
                        <p><b>March Hackness 2020</b><br/>
                            March 19-21, 2020<br />
                            Rank: 39/796</p>
                        <p><b>Women Unite Over CTF 2.0</b><br/>
                            February 25, 2019</p>
                        <p><b>Women Unite Over CTF</b><br/>
                            November 2, 2019</p>
                        <p><b>Defend Con CTF</b><br/>
                            Sept 26-27, 2019<br />
                            Rank: 18/40</p>
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