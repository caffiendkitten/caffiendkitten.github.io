import React from 'react'
import Footer from "./Footer.js"


const ConsAndMeetups = () => {
    return <div className="content">
        <h3>Cons And Meetups</h3>
            <p>I like to stay active and up to date in the Tech community and these are some events and conferences I have attended.</p>

    <div className="row">
        <div className="column side">
        <p className="resourcesSide"></p>
        </div>
        
        <div className="column middle">
            <ul>
                <li>Women in Science and Engineering | February 1, 2020</li>
                <li>HushCon Seattle | 2019</li>
                <li>ACT-W | October 26, 2019</li>
                <li>DefendCon | September 26-27, 2019</li>
                <li>Seattle Code Camp | September 14, 2019</li>
                <li>Diana Initiative | August 9-10, 2019</li>
                <li>DefCon | August 8-11, 2019</li>
                <li>Women in Clout Summit | January 26, 2019</li>
            </ul>
        
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
        
export default ConsAndMeetups