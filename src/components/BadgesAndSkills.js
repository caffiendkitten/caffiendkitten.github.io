import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';
import badgeFilePath from './../docs/badges.csv'
import Footer from "../containers/Footer.js"
import BadgeDatas from './BadgeData.js'
import Loading from '../containers/Loading'
import postscribe from 'postscribe';

var badgeDataArray = [];

class Education extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			addClass: false,
			navClass: "",
            badgeState: [],
            THMBadge: true 
        };

        this.getData = this.getData.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.getCsvData(badgeFilePath, badgeDataArray, "badgeState");
        // this.forceUpdate()
    }

    componentWillUnmount() {
        badgeDataArray = []
    }

    getpostscribez(){
        postscribe('#TryHackMe', '<script src="https://tryhackme.com/badge/106028"></script>')
        postscribe('#HackTheBox', '<script src="https://www.hackthebox.eu/badge/67366"></script>')
    }
    postscribez(){
        {this.state.THMBadge === true?
            this.getpostscribez()
        :
        this.setState({
            THMBadge: false
        })
        }

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
        // console.log(document.getElementsByClassName("badgeHere"))
        this.forceUpdate()
        this.postscribez()

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
                    <h4><i class="fas fa-laptop-code"></i> Technical Skills</h4>
                    <div className="technicalSkills">
                        <b>Languages:</b> Python, HTML5/CSS3, JavaScript, Ruby on Rails, React, SQL, PHP<br />
                        <b>Libraries/Frameworks:</b> React.js, Rails, jQuery, Bootstrap, JWT<br />
                        <b>Software/Tools:</b> 
                        Apache HTTP Server, Burp Suite, Git, Github, Hydra, John the Ripper, MongoDB, SQLMap, VSCode, WireShark, ZAP  <br />
                        <b>Database:</b> PostgreSQL, MongoDB<br />
                        <b>Methodologies:</b> OWASP, PTES, OSSTMM (Open Source Security Testing Methodology Manual)<br />
                    </div>
                    <br />

                    <h4><i class="fas fa-award"></i> Badges</h4>
                    <span className="badgeHere">
                        {this.state.THMBadge === false?
                        <span>
                            <img src="https://tryhackme-badges.s3.amazonaws.com/CaffiendKitten.png" alt="TryHackMe" />
                            <img src="http://www.hackthebox.eu/badge/image/67366" alt="Hack The Box" />
                        </span>
                        :
                        <span>
                            <span id="TryHackMe"></span><span id="HackTheBox"></span>                    
                        </span>
                        }
                    </span>
                    
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