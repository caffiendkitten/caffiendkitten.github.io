import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';
import badgeFilePath from './../docs/badges.csv'
import Footer from "../containers/Footer.js"
import BadgeDatas from './BadgeData.js'
import Loading from '../containers/Loading'



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
        // this.getCsvData(csvFilePath, csvDatas1, "certState");
        this.getCsvData(badgeFilePath, badgeDataArray, "badgeState");
        // this.forceUpdate()
        
    }

    // shouldComponentUpdate(){
    //     // this.forceUpdate()
    //     return true
    // }
    componentWillUnmount() {
        // csvDatas1 = []
        badgeDataArray = []
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