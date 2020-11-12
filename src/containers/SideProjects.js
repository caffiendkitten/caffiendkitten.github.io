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
                <tr>
                    <td className="projectInfo left">
                        <b>Website Design: On the Fly Espresso</b><br />
                        Worked with owner to builb a website for coffee shop, On the Fly Espresso, in Alaska from 2011 until 2013 when shop was sold.<br />
                        I worked closly with the owner, Ms. Coulthard, to help design the logo, punch card, website, menu layout, and social media presence. I also worked with Ms. Coulthard to enable her to update social media and menu to enable her to update as needed for special daily deals.<br />
                        <br/>
                    </td>
                </tr>
                <tr>
                    <td className="projectInfo right">
                        <a href="../Images/OnTheFlyEspressoLogo.jpg" target="_blank" rel="noopener noreferrer" ><img src="../Images/OnTheFlyEspressoLogo.jpg" alt="On The Fly Espresso Logo" width="200" /></a><br />
                        <a href="../Images/OnTheFlyEspressoSite.jpg" target="_blank" rel="noopener noreferrer" ><img src="../Images/OnTheFlyEspressoSite.jpg" alt="On The Fly Espresso Site" height="200" /></a><br />
                    </td>
                </tr>
                {/* <tr>
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