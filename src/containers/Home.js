import React from 'react'
import Footer from "./Footer.js"

const Home = () => {
    return <div className="content">
                {/* <h3>About Me</h3> */}
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
            
            <div className="column middle portfolio">
                
                {/* <p>
                A security consultant who performs security assessments across a wide variety of applications, platforms, and operating systems.
                </p> */}

                <p>Passionate Security Consultant/Analyst and University graduate with IT BS in Information Security and Penetration Testing. Experienced at leveraging automated and manual testing of web applications while utilizing industry-standard best practices and methodologies; such as OWASP WSTG, RFC BCP, and PTES. Enthusiastic about finding and fixing security vulnerabilities in web and mobile applications, performing responsible disclosure, and aligning security controls, processes, policies and procedures.
<br /><br />
                Motivated to continue learning, participate in CTFs, and be active within the InfoSec community and local tech meetups, such as WISP, WoSec, and OWASP.
                </p>


                <span><center>
                    

                    {/* ![DaNeil's GitHub stats](https://github-readme-stats.vercel.app/api?username=DaNeil&count_private=true&theme=tokyonight&hide=contribs,prs) */}
                     {/* <img src="https://github-readme-stats.vercel.app/api?username=Caffiendkitten&custom_title=DaNeil's GitHub Stats&show_icons=true&count_private=true&title_color=0096b4&icon_color=0096b4&hide=contribs&border_color=000000" /> */}

                     <img height="200" align="center" src="https://github-readme-stats.vercel.app/api?username=Caffiendkitten&show_icons=true&count_private=true&title_color=0096b4&icon_color=0096b4&border_color=000000&card_width=320&height=300&custom_title=Github%20Stats&show=prs_merged,prs_merged_percentage" alt="git stats" /> <img height="200" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Caffiendkitten&size_weight=0.5&count_weight=0.5&title_color=0096b4&icon_color=0096b4&hide=contribs&border_color=000000&langs_count=20&layout=compact&card_width=320" alt="git languages" />
                     
                 
                

                </center></span>




                <p className="connectWithMe">
                    <b>Connect with me:</b><br />
                    <b>LinkedIn:</b>  <a className="resourcesTable" href="https://www.linkedin.com/in/daneil-coulthard/"  target="_blank" rel="noopener noreferrer" >linkedin.com/in/daneil-coulthard/</a><br />
                    <b>GitHub:</b> <a className="resourcesTable" href="https://github.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >github.com/caffiendkitten</a><br />
                    <b>Dev.to:</b> <a className="resourcesTable" href="https://dev.to/caffiendkitten"  target="_blank" rel="noopener noreferrer" >dev.to/caffiendkitten</a><br />
                    <b>TryHackMe:</b> <a className="resourcesTable" href="https://tryhackme.com/p/CaffiendKitten"  target="_blank" rel="noopener noreferrer" >tryhackme.com/p/CaffiendKitten</a><br />
                    <b>PentesterLab:</b> <a className="resourcesTable" href="https://pentesterlab.com/profile/CaffiendKitten"  target="_blank" rel="noopener noreferrer" >pentesterlab.com/profile/CaffiendKitten</a><br />
                    <b>HackThebox:</b> <a className="resourcesTable" href="https://www.hackthebox.eu/profile/67366"  target="_blank" rel="noopener noreferrer" >hackthebox.eu/profile/67366</a><br />
                    <b>HackerOne:</b> <a className="resourcesTable" href="https://hackerone.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >hackerone.com/caffiendkitten</a><br />
                    <b>BugCrowd:</b> <a className="resourcesTable" href="https://bugcrowd.com/caffiendkitten"  target="_blank" rel="noopener noreferrer" >bugcrowd.com/caffiendkitten</a><br />
                </p>
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
export default Home