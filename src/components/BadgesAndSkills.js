import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';
import badgeFilePath from './../docs/badges.csv'
import Footer from "../containers/Footer.js"
import BadgeDatas from './BadgeData.js'
import Loading from '../containers/Loading'
import ScriptTag from 'react-script-tag'
// import THMB from './TryHackMeBadge'
// import THM from '../scripts/THM'



const badgeLocation = document.getElementsByClassName("badgeHere")
const script = document.createElement("script");
const span = document.createElement("span");
var badgeDataArray = [];

class Education extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			addClass: false,
			navClass: "",
            badgeState: [] 
        };

        this.getData = this.getData.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.getCsvData(badgeFilePath, badgeDataArray, "badgeState");
        // this.forceUpdate()
        console.log("badgeLocation in Willmount", badgeLocation.item(0))
        this.fetchTHMBadge()
    }
    componentDidMount(){
        const badgeLocation = document.getElementsByClassName("badgeHere")
        const script = document.createElement("script");
        const span = document.createElement("span");

        script.src = "https://tryhackme.com/badge/106028";
        // script.async = true;
        // badgeLocation.item(0).insertBefore(script,badgeLocation);
        badgeLocation.insertBefore = <p>hizzzzzzzz</p>
        console.log("badgeLocation in Did Mount:", document.getElementsByClassName("badgeHere").item(0))  
        // badge lcoation is null here
    }


    componentWillUnmount() {
        badgeDataArray = []
    }
    async fetchTHMBadge(){
        return await fetch("http://tryhackme.com/badge/106028"
        ,{
        method: 'GET',
        // mode: "no-cors",
        // // credentials: 'include',
        headers: {
            "Accept": "text/html",
            // "Access-Control-Allow-Origin": "*",
            // "Cookie": "__cfduid=d00fc16cf4e5100b342c6da2f8a4a501f1611353532"

        }
        }
        )
        .then(res => console.log("typeof:", res.type))// res.blob())
        // .then(data => {
        //     let newdata = Body.data
        //     console.log("newdata:", newdata)
        // })
        // .then(res=>res.json())
        // .then(d=>{
          // "d" is each article object here
    
          // let singlePoint  =  `<span>${d["body_html"].toString()}</span>`
        //   let wordcount = this.getWordCount(articleNum, d["body_html"])
            // console.log("D: ", d)
          // WordCount is a "promise" here and will be filled
        //   return 
                 
        // })
        .catch(error => console.log("error fetching", error))
  
    }
    createBadge(){


        // const badgeLocation = document.getElementsByClassName("badgeHere")
        const script = document.createElement("script");
        const span = document.createElement("span");

        {badgeLocation === null?
        console.log("nUllLLLLll")
        :
        console.log("valid",badgeLocation[0])

        script.src = "https://tryhackme.com/badge/106028";
        script.async = false;
        // badgeLocation.appendChild(script);
        }

        // badgeLocation.item(0).innerHTML = <p>hittttt</p>
        // this.forceUpdate()
        // console.log("badgeLocation:", document.getElementsByClassName("badgeHere").item(0).firstChild)        
    }

    async fetchCsv(filepath) {
        return await fetch(filepath)
        .then(async function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');
            const result = await reader.read();
            
            return decoder.decode(result.value);
        });
    }

    getData(dataType, dataState){
        // console.log("here in Edu Page getData function",this.state.certState, this.state.eduState.length)
        return this.setState({ [dataState]: dataType})
    }

    async getCsvData(FilePath, dataType, dataState) {
        let fileData = await this.fetchCsv(FilePath);
        Papa.parse(fileData, {
            header: true,
            // skipEmptyLines: true,
            step: function(parsedOutput) {
                // console.log("parsedOutput", typeof(parsedOutput.data))
                dataType.push(parsedOutput.data)
                // console.log("dataType",dataType)
            },
            complete: this.getData(dataType, dataState)
        });
        
        this.forceUpdate()
        // this.createBadge()

    }

    render() {
        return (<div className="content">
            
        <h3>Badges & Skills</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">

                {this.state.badgeState.length < 14?
                <Loading />
                :
                <div className="eduCol">
                    <h4>Technical Skills</h4>
                    <div className="technicalSkills">
                        <b>Languages:</b> Python, HTML5/CSS3, JavaScript, Ruby on Rails, React, SQL, PHP<br />
                        <b>Libraries/Frameworks:</b> React.js, Rails, jQuery, Bootstrap, JWT<br />
                        <b>Software/Tools:</b> Git, Github, VSCode, Burp Suite, ZAP, Apache HTTP Server, WireShark, MongoDB, Hydra, SQLMap<br />
                        <b>Database:</b> PostgreSQL, MongoDB<br />
                        <b>Methodologies:</b> OWASP, PTES, OSSTMM (Open Source Security Testing Methodology Manual)<br />
                    </div>
                    <br />

                    <h4>Earned Badges</h4>
                    <span className="badgeHere">{console.log("badgeLocation in add", badgeLocation[0])}
                    {badgeLocation[0] === undefined?
                    <div>
                        <img src="https://tryhackme-badges.s3.amazonaws.com/CaffiendKitten.png" alt="TryHackMe" />
                        <img src="http://www.hackthebox.eu/badge/image/67366" alt="Hack The Box" />
                        {/* {this.createBadge()} */}
                    </div>
                    :

                    <div>
                        {this.createBadge()}
                        {console.log("badgeLocation in add", badgeLocation.innerHTML)}
                        1<ScriptTag isHydrating={true} type="text/javascript" src="https://tryhackme.com/badge/106028" />
                        2<script src="https://tryhackme.com/badge/106028"></script>
                    {/* <THM />  */}
3                        {badgeLocation.innerHTML = <script src="https://tryhackme.com/badge/106028"></script>}
                        {badgeLocation.innerHTML = <p>woops</p>}
                        </div>
                    }    
                    </span>
                    {/* <img src="https://tryhackme-badges.s3.amazonaws.com/CaffiendKitten.png" alt="TryHackMe" />
                    <img src="http://www.hackthebox.eu/badge/image/67366" alt="Hack The Box" /> */}

                    <BadgeDatas edu={this.state.badgeState}/>
                    <br />


                </div>
                }
            </div>
            <div className="column right">
                <p className="resourcesSide"></p>
            </div>
        </div>
        <div className="footer">
            <Footer />
        </div>
            
    </div>      
        );
    }
}

export default withRouter(Education);