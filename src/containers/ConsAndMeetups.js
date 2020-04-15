import React from 'react'
import Footer from "./Footer.js"


const ConsAndMeetups = () => {
    return <div className="content">
        <h3>Cons And Meetups</h3>
            <p>Events and conferences I have attended.</p>

    <div className="row">
        <div className="column left">
            <p className="resourcesSide"></p>
        </div>
        
        <div className="column middle">
            <ul className="resourcesSide">
                <li>GRIMM Con | April 14, 2020</li>
                <li>VirSec Con | April 4, 2020</li>
                <li>BSides Atlanta | March 28, 2020</li>
                <li>Pancakes Con | March 22, 2020</li>
                <li>Women in Science and Engineering | February 1, 2020</li>
                <li>HushCon Seattle | 2019</li>
                <li>ACT-W | October 26, 2019</li>
                <li>DefendCon | September 26-27, 2019</li>
                <li>Seattle Code Camp | September 14, 2019</li>
                <li>Diana Initiative | August 9-10, 2019</li>
                <li>DefCon | August 8-11, 2019</li>
                <li>GIX Women in Tech Con | April 13, 2019</li>
                <li>BSides Seattle | February 23, 2019</li>
                <li>Women in Cloud Summit | January 26, 2019</li>
            </ul>
        
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
        
export default ConsAndMeetups