import React from 'react'
import Footer from "./Footer.js"


const CTF = () => {
    return <div className="content">

        <h3>CTFs</h3>

        <div className="row">
            <div className="column side">
            <p></p>
            </div>
            
            <div className="column middle projects">

                <table className="projects">
                <tr>
                    <td className="projectInfo"  colSpan={2} >
                        <b>0x00sec</b> 
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td className="projectLink">
                        <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-1-5dgd" target="_blank" rel="noopener noreferrer" >Exercise #1</a><br />
                        <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-2-1km8" target="_blank" rel="noopener noreferrer" >Exercise #2</a><br />
                        <a href="https://dev.to/caffiendkitten/0x00sec-ctf-exercise-3-54b3" target="_blank" rel="noopener noreferrer" >Exercise #3</a><br />
                    </td>
                    </tr>
                    <tr>
                    <td className="projectInfo"  colSpan={2} >
                        <b>PortSwigger</b> 
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td className="projectLink">
                        <a href="https://dev.to/caffiendkitten/web-sec-academy-ctf-validation-of-csrf-token-depends-on-request-method-45mo" target="_blank" rel="noopener noreferrer" >Validation of CSRF token depends on request method</a><br />
                        <a href="https://dev.to/caffiendkitten/web-sec-academy-ctf-csrf-vulnerability-with-no-defenses-817" target="_blank" rel="noopener noreferrer" >CSRF vulnerability with no defenses</a><br />
                    </td>
                    </tr>
                    <tr>
                    <td  colSpan={2}>
                        <b>Hack The Box </b>
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td  className="projectLink">
                        {/* <a href="https://the-final-fm.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://the-final-fm.herokuapp.com</a><br /> */}
                        Nothing yet online
                    </td>
                    </tr>
                    <tr>
                    <td  colSpan={2}>
                        <b>Hacker 101 CTFs</b>
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td  className="projectLink">
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-h1-thermostat-4156" target="_blank" rel="noopener noreferrer" >H1 Thermostat</a><br />
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-bugdb-v3-4eo1" target="_blank" rel="noopener noreferrer" >BugDB v3</a><br />
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-bugdb-v1-7d2" target="_blank" rel="noopener noreferrer" >BugDB v2</a><br />
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-bugdb-v1-hnc" target="_blank" rel="noopener noreferrer" >BugDB v1</a><br />
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-petshop-pro-100p" target="_blank" rel="noopener noreferrer" >Petshop Pro</a><br />
                        <a href="https://dev.to/caffiendkitten/ctf-postbook-2dpd" target="_blank" rel="noopener noreferrer" >Postbook</a><br />
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-micro-cms-v1-3jo4" target="_blank" rel="noopener noreferrer" >Micro-CMS v1</a><br />
                        <a href="https://dev.to/caffiendkitten/hacker101-ctf-micro-cms-v2-2b0l" target="_blank" rel="noopener noreferrer" >Micro-CMS v2</a>
                    </td>
                    </tr>
                </table>

            </div>
            
            <div className="column side">
                <p></p>
            </div>

        </div>
        <div className="footer">
            <Footer />
        </div>      
    </div>       
}
        
export default CTF