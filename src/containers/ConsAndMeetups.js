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
                    <li>Women in Cybersecurity Capture the Flag {Virtual} | SecureSet and WiCyS - Human | May 2, 2020</li>
                    <li>BSides Knoxville - Human | May 1, 2020</li>
                    <li>Isolation Con - Human | April 19, 2020</li>
                    <li>GRIMM Con - Human | April 14, 2020</li>
                    <li>VirSec Con - Human | April 4, 2020</li>
                    <li>BSides Atlanta - Human | March 28, 2020</li>
                    <li>Pancakes Con - Human | March 22, 2020</li>
                    <li>Women in Science and Engineering - Human | February 1, 2020</li>
                    <li>2020 Job Fair - Setup Volunteer | Jan 29, 2020</li>
                    <li>Diversity & Women in Tech  - Volunteer | Jan 22, 2020</li>
                    <li>HushCon Seattle - Human | 2019</li>
                    <li>ACT-W - Human | October 26, 2019</li>
                    <li>DefendCon - Human | September 26-27, 2019</li>
                    <li>Seattle Code Camp - Human | September 14, 2019</li>
                    <li>Diana Initiative - Human | August 9-10, 2019</li>
                    <li>DefCon - Human | August 8-11, 2019</li>
                    <li>GIX Women in Tech Con - Human | April 13, 2019</li>
                    <li>BSides Seattle - Human | February 23, 2019</li>
                    <li>Women in Cloud Summit - Human | January 26, 2019</li>
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