import React from 'react'
import Footer from "./Footer.js"


const Blogs = () => {
    return <div className="content">
        <h3>Blogs</h3>

        <div className="row">
            <div className="column side">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">
                <dev-widget data-username="caffiendkitten" data-width="600px" ></dev-widget>
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
        
export default Blogs