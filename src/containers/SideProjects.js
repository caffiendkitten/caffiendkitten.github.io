import React from 'react'
import Footer from "./Footer.js"


const SideProjects = () => {
    return <div className="content">
        <h3>Side Projects</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle projects">
                <table className="projects">
                <tr>
                    <td className="projectInfo left">
                        <b>3D Planter: </b><br />
                        A repository is for a 3D workshop that I attended where we made a planter to be 3D printed.<br />
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="https://github.com/caffiendkitten/3DPlant" target="_blank" rel="noopener noreferrer">https://github.com/caffiendkitten/3DPlant</a><br />
                    </td>
                </tr>
                {/* <tr>
                    <td className="projectInfo left">
                        <b>Password Manager: </b><br />
                        A password manager allowing users to create their own list of usernames and passwords for their online accounts.
                        I utilized Cryptr AES-256-CRT encryption/decryption, BCrypt hashing of user login passwords, JavaScript and HTML for user input validation, 
                        Ruby and Postgres for the backend database and database validations, and JWT HS256 signatures for user state validation.
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="https://flatiron-passwordmanager.netlify.app/" target="_blank" rel="noopener noreferrer" >https://flatiron-passwordmanager.netlify.app/</a><br />
                        <a href="https://github.com/caffiendkitten/Final-Project-Backend" target="_blank" rel="noopener noreferrer" >Backend Repository</a><br />
                        <a href="https://github.com/caffiendkitten/Final-Project-Frontend" target="_blank" rel="noopener noreferrer" >Frontend Repository</a>
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo left">
                        <b>The Final FM: </b><br />
                        An Song Searcher/Saver with Location Searching application gives its users the ability 
                        to search for artists and save songs to their own account via the Last FM API allowing 
                        users to see tour dates for a city via the Ticket Master API.
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="https://the-final-fm.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://the-final-fm.herokuapp.com</a><br />
                    </td>
                </tr> */}
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
        
export default SideProjects