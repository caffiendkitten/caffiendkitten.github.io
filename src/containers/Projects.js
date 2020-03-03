import React from 'react'
import Footer from "./Footer.js"


const Projects = () => {
    return <div className="content">
        <h3>Academic Projects</h3>

        <div className="row">
            <div className="column side">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle projects">
            
                <table className="projects">
                <tr>
                    <td className="projectInfo"  colSpan={2} >
                        <b>Coding Payloads Project(2019): </b><br />Built a repository for any payloads that I have used/come across. This is an ongoing process and will continue to grow as my skills do.
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td className="projectLink">
                        <a href="https://github.com/caffiendkitten/codeProjects" target="_blank" rel="noopener noreferrer" >https://github.com/caffiendkitten/codeProjects</a><br />
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo"  colSpan={2} >
                        <b>Password Manager (2019): </b><br />Built a password manager utilizing Cryptr AES-256-CRT encryption/decryption, BCrypt hashing of passwords, JavaScript and HTML for validations of user input, Ruby for backend Postgres database validations, and JWT HS256 signatures for user state validation.
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td className="projectLink">
                        <a href="https://flatiron-passwordmanager.netlify.com/" target="_blank" rel="noopener noreferrer" >https://flatiron-passwordmanager.netlify.com</a><br />
                        <a href="https://github.com/caffiendkitten/Final-Project-Backend" target="_blank" rel="noopener noreferrer" >Backend Repository</a><br />
                        <a href="https://github.com/caffiendkitten/Final-Project-Frontend" target="_blank" rel="noopener noreferrer" >Frontend Repository</a>
                    </td>
                </tr>
                <tr>
                    <td  colSpan={2}>
                        <b>Song Searcher/Saver with Location Searching (2019): </b><br />Built an application to search for artists and save songs via the Last FM API allowing users to see tour dates for a city via the Ticket Master API.
                    </td>
                    </tr>
                    <tr>
                    <td ></td>
                    <td  className="projectLink">
                        <a href="https://the-final-fm.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://the-final-fm.herokuapp.com</a><br />
                    </td>
                </tr>
                </table>


            </div>
            
            <div className="column side">
                <p className="resourcesSide"></p>
            </div>

        </div>
        <div className="footer">
            <Footer />
        </div>      
    </div>       
}
        
export default Projects