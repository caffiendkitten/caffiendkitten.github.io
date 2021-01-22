import React from 'react'
import DevCard from '../components/BlogWidget.js'
import Footer from "./Footer.js"


function Blog(props) {
    return <div className="content">
        <h3>Blog</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">
            <DevCard 
                data={props.data}
                author={props.author}
                articlezList={props.articlezList}
                profile_image_90={props.profile_image_90}
                // articleContent={props.articleContent}
                // wordCountArrayz={props.wordCountArrayz}
                done={props.done}
                />         
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
        
export default Blog