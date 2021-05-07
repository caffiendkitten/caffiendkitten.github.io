import React from 'react'
import Footer from "./Footer.js"
import ProjectTableau from '../components/Project-TableauComponent'

const ProjectTableauContainer = () => {
    return <div className="content">
        <h3>Project-TableauContainer</h3>
        
        <center>
        <div className='tableauPlaceholder' id='viz1620176554951'>
                
                    <noscript>
                        <img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/Se/SeattleCrimeDashboard2017_0/Dashboard1/1_rss.png' style={{border: "none"}} />
                    </noscript>
                    <object className='tableauViz'  style={{display: "none"}}>
                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                        <param name='embed_code_version' value='3' /> 
                        <param name='site_root' value='' />
                        <param name='name' value='SeattleCrimeDashboard2017_0&#47;Dashboard1' />
                        <param name='tabs' value='no' />
                        <param name='toolbar' value='yes' />
                        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Se&#47;SeattleCrimeDashboard2017_0&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' />
                        <param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />
                        <param name='display_overlay' value='yes' />
                        <param name='display_count' value='yes' />
                        <param name='language' value='en' />
                    </object>
                </div> 
                    
                <ProjectTableau  />
                </center>
        {/* <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle ">
                <div className="TableauProject">
               
                </div>

            </div>
            
            <div className="column right">
                <p className="resourcesSide"></p>
            </div>

        </div> */}
        <div className="footer">
            <Footer />
        </div>      
    </div>       
}
        
export default ProjectTableauContainer