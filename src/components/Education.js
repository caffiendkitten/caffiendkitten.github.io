import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';
import csvFilePath from './../docs/certs.csv'
import Footer from "../containers/Footer.js"
import CsvDatas from './csvData.js'

var csvDatas1 = [];

class Education extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			addClass: false,
			navClass: "",
			certs: [] 
        };

        this.getData = this.getData.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.getCsvData();
    }
    componentWillUnmount() {
        csvDatas1 = []
    }
    fetchCsv() {
        return fetch(csvFilePath).then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result){
            return this.setState({certs: csvDatas1});
    }

    async getCsvData() {
        let csvDataLink = await this.fetchCsv();

        Papa.parse(csvDataLink, {
            header: true,
            // skipEmptyLines: true,
            step: function(parsedOutput) {
                // console.log("the result",parsedOutput.data)
                // if(csvDatas1.length < ){
                csvDatas1.push(parsedOutput.data)
                
                // }
            },
            complete: this.getData
        });
    }

    render() {
        return (<div className="content">  
        <h3>Continued Education</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">



                <table className="EduTable">
                <tbody>
                    <tr>
                        <td>
                            <h4>CPE/CEUs</h4>
                            <CsvDatas certs={this.state.certs}/>
                        </td>

                    </tr>


                    <tr>




                        <td>


                            
                            <h4>Academic Education</h4>
                            <div className="technicalSkills">
                                <b>Flatiron School:</b><br />Software Engineering Bootcamp<br /> Seattle, WA<br />
                                <b>City University Seattle:</b><br />Bachelor of Science – Information Technology, Information Security Emphasis<br /> Seattle, WA<br />
                                <b>Edmonds Community College:</b><br />General Associate’s Degree <br /> Lynnwood, WA<br />
                                <b>Lewis-Clark State College:</b><br />Associate’s Degree in Web Development <br /> Lewiston, ID
                            </div>
                            <h4>Relevant Academic Courses </h4>
                            <div className="technicalSkills">
                                Computer Science | Java, Computer Science || Java, Cybercrime, Tech and Social Change, Human Computer Interaction, 
                                IT Compliance, Information Security, Information Technology Ethics, Intro/C++ Programming, Network Security, 
                                Novell/Linux OS, Operating Systems, Operating Systems: MS Windows, PC Technician Fundamentals, Programming with 
                                Python, Systems Analysis and Design
                            </div>
                        </td>
                    </tr>  
                </tbody>                
                </table>
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