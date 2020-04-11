import React from 'react'
import Footer from "./Footer.js"


const Resources = () => {
    return <div className="content">
        <h3>Info Resources</h3>

        <div className="row">
            <div className="column left">
            <p className="resourcesSide">

                Cyber News
                <ul>
                    <li><a className="resourcesTable" href="https://pbs.twimg.com/media/DP7axHKUEAALlJB.jpg:large"  target="_blank" rel="noopener noreferrer" >Common Ports &#38; Protocols</a></li>
                    <li><a className="resourcesTable" href="https://thehackernews.com/" target="_blank" rel="noopener noreferrer">The Hacker News</a></li>
                    <li><a className="resourcesTable" href="https://www.wired.com/category/security/" target="_blank"  rel="noopener noreferrer">Wired &#8211; Security</a></li>
                    <li><a className="resourcesTable" href="https://www.techrepublic.com/topic/security/" target="_blank" rel="noopener noreferrer">Tech Republic</a></li>
                    <li><a className="resourcesTable" href="https://www.securityweek.com/cybercrime" target="_blank" rel="noopener noreferrer">Security Week</a></li>
                </ul>      
                Blogs
                <ul >
                    <li><a className="resourcesTable" href="http://blog.harmj0y.net" target="_blank" rel="noopener noreferrer">HarmJ0ys Blog</a></li>
                    <li><a className="resourcesTable" href="https://pen-testing.sans.org/blog/pen-testing" target="_blank" rel="noopener noreferrer">SANS PenTesting</a></li>
                    <li><a className="resourcesTable" href="https://danielmiessler.com" target="_blank" rel="noopener noreferrer">Daniel Miessler</a> InfoSec Guru</li>
                    <li><a className="resourcesTable" href="https://www.abatchy.com/2017/03/how-to-prepare-for-pwkoscp-noob" target="_blank" rel="noopener noreferrer">Abatchy&#8217;s OSCP prep</a></li>
                    <li><a className="resourcesTable" href="https://www.vortex.id.au/2017/05/pwkoscp-stack-buffer-overflow-practice" target="_blank" rel="noopener noreferrer">Vortex&#8217;s PWK OSCP practice</a></li>
                    <li><a className="resourcesTable" href="https://scund00r.com/all/oscp/2018/02/25/passing-oscp.html" target="_blank" rel="noopener noreferrer">Passing OSCP by Alex Dib</a> </li>
                    <li><a className="resourcesTable" href="http://0xc0ffee.io/blog/OSCP-Goldmine" target="_blank" rel="noopener noreferrer">OSCP Goldmine</a> </li>
                    <li><a className="resourcesTable" href="https://malicious.link/post/2019/grumpy-hackers/" target="_blank" rel="noopener noreferrer">Grumpy Hackers Info! (CLICK THIS)</a></li>
                </ul>            



            </p>
            </div>
            
            <div className="column middle">
                <table className="resourcesTable">
                    <tr>
                        <td>
                        Practice Labs/ Education
                            <ul>
                                <li><a className="resourcesTable" href="https://www.vulnhub.com/"  target="_blank" rel="noopener noreferrer" >VulnHub</a></li>
                                <li><a className="resourcesTable" href="https://www.hackthebox.eu/"  target="_blank" rel="noopener noreferrer" >HackTheBox</a></li>
                                <li><a className="resourcesTable" href="https://www.cybrary.it" target="_blank" rel="noopener noreferrer">Cybrary</a></li>
                                <li><a className="resourcesTable" href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">W3 Schools (coding tutorials)</a></li>
                                <li><a className="resourcesTable" href="https://overthewire.org/wargames/bandit/"  target="_blank" rel="noopener noreferrer" >OverTheWire - Bandit</a></li>
                                <li><a className="resourcesTable" href="https://exploit-exercises.lains.space/mainsequence/"  target="_blank" rel="noopener noreferrer" >Mainsequence</a></li>
                                <li><a className="resourcesTable" href="https://pentesterlab.com/"  target="_blank" rel="noopener noreferrer" >Pentester Lab</a></li>
                            </ul>                              
                        

                        </td>
                        <td>
                            Turorials
                            <ul>
                                <li><a className="resourcesTable" href="https://www.offensive-security.com/metasploit-unleashed" target="_blank" rel="noopener noreferrer">Free Metasploit Course!</a></li>
                                <li><a className="resourcesTable" href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-evade-detection-using-proxychains-0154619" target="_blank" rel="noopener noreferrer">Proxychains tutorial</a></li>
                                <li><a className="resourcesTable" href="https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA" target="_blank" rel="noopener noreferrer">IPPSEC</a> *HTB Tutorials</li>
                                <li><a className="resourcesTable" href="https://www.offensive-security.com/metasploit-unleashed/metasploit-fundamentals/"  target="_blank" rel="noopener noreferrer" >Metasploit Fundamentals</a></li>
                                <li><a className="resourcesTable" href="https://netsec.ws/?p=331"  target="_blank" rel="noopener noreferrer" >Creating Metasploit Payloads</a></li>
                            </ul>                                                        
                        </td>
                        <td>
                            Tools
                            <ul>
                                <li><a className="resourcesTable" href="https://www.virustotal.com" target="_blank" rel="noopener noreferrer">Virus Total</a></li>
                                <li><a className="resourcesTable" href="https://github.com/jivoi/pentest" target="_blank" rel="noopener noreferrer">Jivoi &#8211; Pentest tools/scripts</a></li>
                                <li><a className="resourcesTable" href="https://github.com/danielmiessler/SecLists" target="_blank" rel="noopener noreferrer">Daniel Miessler&#8217;s SecLists</a></li>
                                <li><a className="resourcesTable" href="https://www.shodan.io/" target="_blank" rel="noopener noreferrer">Shodan &#8211; security search engine</a></li>
                                <li><a className="resourcesTable" href="https://censys.io/blog" target="_blank" rel="noopener noreferrer">Censys &#8211; security search engine</a></li>
                                <li><a className="resourcesTable" href="https://osintframework.com/" target="_blank" rel="noopener noreferrer">OSINT Framework</a></li>
                                <li><a className="resourcesTable" href="https://github.com/DigitalAftermath/EnumerationVisualized/wiki" target="_blank" rel="noopener noreferrer"> Enumeration Mindmap</a></li>
                            </ul>      
                        </td>
                    </tr>
                    <tr>
                    <td>
                        OSCP
                        <ul>
                            <li><a className="resourcesTable" href="https://medium.com/@hakluke/haklukes-ultimate-oscp-guide-part-3-practical-hacking-tips-and-tricks-c38486f5fc97"  target="_blank" rel="noopener noreferrer" >Hakluke’s Ultimate OSCP Guide: Part 3</a></li>
                        </ul>                          
                    </td>
                    <td>
                        Linux &#038; Bash Scripting
                        <ul>
                            <li><a className="resourcesTable" href="https://linuxconfig.org/bash-scripting-tutorial"  target="_blank" rel="noopener noreferrer" >Bash scripting Tutorial</a></li>
                            <li><a className="resourcesTable" href="https://null-byte.wonderhowto.com/how-to/linux-basics/"  target="_blank" rel="noopener noreferrer" >Linux Basics for the Aspiring Hacker</a></li>
                            <li><a className="resourcesTable" href="https://netsec.ws/?p=337"  target="_blank" rel="noopener noreferrer" >Spawning a TTY Shell</a></li>
                            <li><a className="resourcesTable" href="http://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet"  target="_blank" rel="noopener noreferrer" >Reverse Shell Cheat Sheet</a></li>
                        </ul>                            
                    </td>
                    <td>
                        TCP/IP &#38; Networking
                        <ul>
                            <li><a className="resourcesTable" href="https://pbs.twimg.com/media/DP7axHKUEAALlJB.jpg:large"  target="_blank" rel="noopener noreferrer" >Common Ports &#38; Protocols</a></li>
                            <li><a className="resourcesTable" href="https://nmap.org/bennieston-tutorial/"  target="_blank" rel="noopener noreferrer" >Nmap Basics</a></li>
                        </ul>  

                    </td>
                    </tr>
                    <tr>
                        <td>
                            Python
                            <ul>
                                <li><a className="resourcesTable" href="https://www.codecademy.com/learn/learn-python"  target="_blank" rel="noopener noreferrer" >Learn Python 2</a></li>
                                <li><a className="resourcesTable" href="https://automatetheboringstuff.com/2e/"  target="_blank" rel="noopener noreferrer" >Automate the Boring Stuff with Python</a></li>
                                <li><a className="resourcesTable" href="https://inventwithpython.com/blog/2019/12/31/reading-guide-to-automate-the-boring-stuff-second-edition-for-readers-of-the-first-edition/"  target="_blank" rel="noopener noreferrer" >The Invent with Python Blog</a></li>
                            </ul>   
                        </td>
                        <td>
                        Buffer Overflows
                            <ul>
                                <li><a className="resourcesTable" href="https://www.corelan.be/index.php/2009/07/19/exploit-writing-tutorial-part-1-stack-based-overflows/"  target="_blank" rel="noopener noreferrer" >Exploit writing tutorial part 1 : Stack Based Overflows</a></li>
                                <li><a className="resourcesTable" href="https://www.corelan.be/index.php/2009/07/23/writing-buffer-overflow-exploits-a-quick-and-basic-tutorial-part-2/"  target="_blank" rel="noopener noreferrer" >Exploit writing tutorial part 2 : Jumping to shellcode</a></li>
                                {/* <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li>
                                <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li> */}
                            </ul>                            
                        </td>
                        <td>
                        Linux Privilige Escalation
                            <ul>
                                <li><a className="resourcesTable" href="https://blog.g0tmi1k.com/2011/08/basic-linux-privilege-escalation/"  target="_blank" rel="noopener noreferrer" >Basic Linux Privilege Escalation</a></li>
                                <li><a className="resourcesTable" href="https://netsec.ws/?p=309"  target="_blank" rel="noopener noreferrer" >Linux Privilege Escalation Scripts</a></li>
                                <li><a className="resourcesTable" href="https://exploit-exercises.lains.space/nebula/"  target="_blank" rel="noopener noreferrer" >Nebula</a></li>
                                {/* <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li> */}
                            </ul>                            
                        </td>
                    </tr>                    
                    <tr>
                    <td>
                        Windows Privilege Escalation
                        <ul>
                        <li><a className="resourcesTable" href="https://pentest.blog/windows-privilege-escalation-methods-for-pentesters/" target="_blank" rel="noopener noreferrer">Basic Windows Priv Escalation</a></li>
                            <li><a className="resourcesTable" href="http://www.fuzzysecurity.com/tutorials/16.html"  target="_blank" rel="noopener noreferrer" >Windows Privilege Escalation Fundamentals</a></li>
                            <li><a className="resourcesTable" href="https://github.com/netbiosX/Checklists/blob/master/Windows-Privilege-Escalation.md"  target="_blank" rel="noopener noreferrer" >Windows Privilege Escalation</a></li>
                            {/* <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li> */}
                        </ul>                            
                    </td>
                    <td>
                    XSS
                            <ul>
                                <li><a className="resourcesTable" href="https://www.shift8web.ca/2018/01/craft-xss-payload-create-admin-user-in-wordpress-user/"  target="_blank" rel="noopener noreferrer" >How To Craft An XSS Payload To Create An Admin User In WordPress</a></li>
                                {/* <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li>
                                <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li>
                                <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li> */}
                            </ul> 


                    </td>
                    <td>
                        Links for Creating This Site
                        <ul >
                            <li><a className="resourcesTable" href="https://dev.to/saurabhdaware/i-made-dev-to-widget-for-websites-blogs-40p2"  target="_blank" rel="noopener noreferrer" >Blog on Dev Widget</a></li>
                            <li><a className="resourcesTable" href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav"  target="_blank" rel="noopener noreferrer" >Side Nav</a></li>
                        </ul>                           
                    </td>
                    </tr>
                </table>








            </div>
            
            <div className="column right">
                <p className="resourcesSide">
                Good Reading/Resources
                        <ul>
                            <li><a className="resourcesTable" href="https://www.blackhillsinfosec.com/your-password-is-wait-for-it-not-always-encrypted/" target="_blank" rel="noopener noreferrer">Mimikatz tutorial</a></li>
                            <li><a className="resourcesTable" href="https://cwe.mitre.org" target="_blank" rel="noopener noreferrer">CWE &#8211; MITRE</a></li>
                            <li><a className="resourcesTable" href="https://capec.mitre.org" target="_blank" rel="noopener noreferrer">CAPEC &#8211; MITRE</a></li>
                            <li><a className="resourcesTable" href="https://attack.mitre.org" target="_blank" rel="noopener noreferrer">ATT&#038;CK &#8211; MITRE</a></li>
                            <li><a className="resourcesTable" href="https://null-byte.wonderhowto.com/" target="_blank" rel="noopener noreferrer">Wonder How To: Null Byte</a></li>
                            <li><a className="resourcesTable" href="https://www.youtube.com/watch?v=N_mCHMjP51Q" target="_blank" rel="noopener noreferrer">Metasploitable 3 setup</a></li>
                            <li><a className="resourcesTable" href="https://www.lifewire.com/list-of-command-prompt-commands-4092302" target="_blank" rel="noopener noreferrer">List of Win cli commands</a></li>
                            <li><a className="resourcesTable" href="https://www.owasp.org/index.php/Category:Attack" rel="noopener noreferrer" target="_blank">OWASP attack vectors</a></li>
                            <li><a className="resourcesTable" href="https://github.com/Ignitetechnologies/Privilege-Escalation" rel="noopener noreferrer" target="_blank">Priv Esc Cheat Sheet (CLICK THIS)</a></li>
                            <li><a className="resourcesTable" href="https://malicious.link/post/2011/2011-09-06-post-exploitation-command-lists/" target="_blank" rel="noopener noreferrer">Mubix&#8217;s post exploitation command lists</a></li>
                            <li><a className="resourcesTable" href="https://github.com/justinsteven/dostackbufferoverflowgood" target="_blank" rel="noopener noreferrer">dostackbufferoverflowgood</a></li>
                            <li><a className="resourcesTable" href="https://www.sans.org/security-resources/posters/" target="_blank" rel="noopener noreferrer">Cool SANS posters</a></li>                            
                            {/* <li><a className="resourcesTable" href=""  target="_blank" rel="noopener noreferrer" ></a></li> */}
                            <li><a className="resourcesTable" href="https://github.com/enaqx/awesome-pentest"  target="_blank" rel="noopener noreferrer" >Awesome Penetration Testing</a></li>
                            <li><a className="resourcesTable" href="https://xapax.gitbooks.io/security/content/"  target="_blank" rel="noopener noreferrer" >IT-Security</a></li>
                        
                        </ul>  


                </p>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
        
    </div>       
}
        
export default Resources