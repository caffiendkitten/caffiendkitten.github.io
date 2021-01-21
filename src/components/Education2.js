import React, { Component } from 'react';
import Footer from "../containers/Footer.js"
import Papa from 'papaparse';
import csvFilePath from './../docs/certs.csv'
import CsvDatas from './csvData.js'
import { CsvToHtmlTable } from 'react-csv-to-table';

var csvData = [];
var csvDataobject = [];
var items = [];

// let listData = csvData.map(function(item, i){
//     // console.log('test');
//     <li key={i}>Test</li>
// });
// var mapedData = this.state.csvData.map((item, i) => (<li key={item + i}>{item}</li>));
// var NewDatas = this.state.csvData.forEach((item, i) => (<li>{item}</li>));
// var listData = (
//     <ul>{mapedData}</ul> // `myArrCreatedFromMap` will evaluate to a list of `<li>` elements
// );
// let CSVList = csvData.forEach((item) => (<li>{item}</li>))


// const items = csvData.map((row, val) =>{
//     // console.log(document.createElement('li').innerHTML = {row})
//     return <li key={row}>{val}</li>;
//     // console.log(typeof row)
//     // listRows = {row},
//     // listItems[0].appendChild(listRows)
// })
class Education extends Component {
    state = {
        addClass: false,
        navClass: "",
        certs: [] 
    }
    constructor() {
        super();
        this.handleCerts()
        // this.forceUpdate()
    }
    componentDidMount() {
        // this.handleCerts()
        this.forceUpdate()
    }
    // async componentDidMount() {
    //     //     <CsvParse
    //     //     keys={keys}
    //     //     onDataUploaded={this.handleData}
    //     //     onError={this.handleError}
    //     //     render={onChange => <input type="file" onChange={onChange} />}
    //     //   />
    //     let newFetch = await this.parseCSV()
    //     // fetch(csvFilePath)
    //     //   .then(res => res.json())
    //     //   .then(json => {
    //     //     //   this.setState({ certs: json })
    //     //       console.log(json)
    //     //   });
    //     // this.parseCSV()
    //     // const responsess = await processing.json()
    //     //     console.log("responses",processing)
    //     // this.setState({ certs: csvData })
    // // }
    // // handleData = () => {
    // //     <CsvToHtmlTable data={csvData} csvDelimiter="," tableClassName="table table-striped table-hover"/>
    // // }

    // // papaparseOptions = {
    // //     header: true,
    // //     dynamicTyping: true,
    // //     skipEmptyLines: true,
    // //     transformHeader: header =>
    // //       header
    // //         .toLowerCase()
    // //         .replace(/\W/g, '_')
    // }
     
    // makeTable = (data) =>{
    //     return data.map((item) => (
    //         <tr key={item.id}>
    //           {Object.values(item).map((val) => (
    //             <td>{val}</td>
    //           ))}
    //         </tr>
    //       ))}
    // }
    handleCerts = () => {
        // console.log("handled certs", this.state.certs.length)
        // console.log("csvData certs", csvData.length)

        if(csvData.length < 1){
            Papa.parse(csvFilePath, {
                download: true,
                header: true,
                skipEmptyLines: true,
                step: function(parsedOutput) {
                    // csvDataobject.push(JSON.stringify(parsedOutput.data))
                    // let rowData = parsedOutput.data

                    csvData.push(parsedOutput.data)
    // console.log("hit in header",parsedOutput.data)
                    // console.log("parser:",  parsedOutput.data);
                    // this.setState({certs: this.state.certs.concat(rowData)})
                },
                complete: function() {
                    console.log("csvData", csvData)
                    // this.setState({certs: csvData});
                    let listRows = document.createElement('li')
                    // console.log("parsedOutput for wingle array:", this.state.csvData[20])
                    // console.log("state?", this.state.certs)

                    // this.setState({ certs: csvData })


                    // for (const [index, value] in csvData.entries()) {
                    //         console.log("Index:", index, value);
                    //     items.push(<li key={index}>{value}</li>)
                    // }
                    console.log("donezo!", csvData)

                    // console.log("donezo!statesss", this.state.certs)

                    // console.log("donezo! object of Arrays", this.state.csvData)
                    // console.log("donezo!single Array of strings", typeof csvDataobject)
                    // console.log("All done!", csvData.map(row =>(
                    //     <li>{row}</li>//console.log("hitzz", row)
                    // )));
                    // console.log()

                    // NewDatas = csvData.forEach((item, i) => (<li>{item}</li>))
                    // csvData.forEach((item, i) => (console.log(JSON.stringify(item))));

                    // for (i = 0; i < csvData.length; i++) {
                    //     document.createElement('li').innerHTML = {row};
                    //     // text += "The number is " + csvData[i] + "<br>";
                    //     // listRows.innerText = csvData[i]
                    //     console.log(csvData[i])
                    //   }
                    // csvData.forEach(this.sortCSV())

                    // const items = csvData.map((row, val) =>{
                    //         // console.log(document.createElement('li').innerHTML = {row})
                    //     return <li key={row}>{val}</li>;
                    //         // console.log(typeof row)
                    //         // listRows = {row},
                    //         // listItems[0].appendChild(listRows)
                    // })
                    
                    // listItems.appendChild(listItems)
                    
                    // console.log("type of datas",listRows);

                    // NewDatas = csvData.forEach((item, i) => (<li>{item}</li>))
                    // console.log("state ", typeof this.certs);

                }
            });
        } else {
            console.log("certs is full", this.state.certs)
        }
        this.setState(currentState => {
            return { certs: csvData };
          });
        //   this.forceUpdate()
        // console.log("certs is full", this.state.certs)
    }


    render() {
        const keys = [
            "Certification Name",
            "Certification Authority",
            "License #",
            "Compleated",
            "Experation",
            "CPE/CEUs"
        ];
        // for (const [index, value] in csvData.entries()) {
        //     console.log("Index in edu:", index, value);
        // items.push(<li key={index}>{value}</li>)
        // }   

        {csvData.length < 1 ?
            console.log("empty")
        :
            console.log()
        }
        return ( 
        
            <div className="content">  
        <h3>Continued Education</h3>
                    <p>hit</p>
                    <CsvDatas certs={this.state.certs}/>
        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">
                <div onLoad={()=>this.handleCerts()}> 

                    {/* {items}
                    {console.log("hits in edu app in div",items)} */}
                    {console.log("All done in edu app!", csvData.map(row =>(
                        <li>{row}</li>//console.log("hitzz", row)
                        )))
                    }
                </div>
                <div>
                    <ul className="CSVRows">
                        {/* {csvData.map(rowItem => (
                            <li>
                            {rowItem}
                            </li>
                        ))} 
                        {items} */}

                    </ul>
                </div>
 

            {/* <div> */}
            {/* <ul>{listData}</ul> */}
                {/* {console.log("csv datasd",mapedData[0])} */}
                {/* {console.log("NewDatas ",csvFilePath)} */}
            {/* 
            
            <ul>
                {this.state.csvData.forEach((item, i) => (<li>{item}</li>))}
            </ul>
            </div> */}
            {/* <section className="data-controller">
                
            </section> */}
            {/* <div {console.log(output)}></div> */}





                <table>
                <tbody>
                    <tr>
                        {/*<td>
                            <h4>Continued Education</h4>

                            // <div className="technicalSkills">
                            //    <b>HackTheBox</b>
                            //    <ul>
                            //        <li  id="HackTheBox" ></li>
                            //    </ul>
                            // </div> 
                            <div className="technicalSkills">
                                <b>TryHackMe</b>
                                <ul>
                                    <li  id="TryHackMe" ></li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>Stack Skills</b>
                                <ul>
                                    <li>Windows Exploit Development Megaprimer | September 14, 2020</li>
                                    <li>The Complete Hacking Course: Go From Beginner to Advanced! | November 11, 2019</li>
                                    <li>Cross Site Scripting(XSS) Attacks for Pentesters | March 2019</li>
                                    <li>Ultimate WiFi Hacking &#38; Security Series | Dec 2018</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>FreeCodeCamp</b>
                                <ul>
                                    <li>Information Security Certification | Sept 14, 2020</li>                        
                                    <li>Responsive Web Design | November 11, 2019</li>                        
                                </ul>
                            </div>                            
                            <div className="technicalSkills">
                                <b>ICSI, UK (International CyberSecurity Institute)</b>
                                <ul>
                                    <li>ICSI | CNSS Certified Network Security Specialist | July 10, 2020</li>                        
                                </ul>
                            </div>  
                            <div className="technicalSkills">
                                <b>NexGenT</b>
                                <ul>
                                    <li>CompTIA Network+ Certification Course | June 23, 2020</li>                        
                                </ul>
                            </div>                            
                            <div className="technicalSkills"> 
                            <a className="resourcesTable" href="https://pentesterlab.com/profile/CaffiendKitten"  target="_blank" rel="noopener noreferrer" ><b>Pentester Lab</b></a>
                                <ul>
                                    <li>Blue Badge | April 03, 2020</li>
                                    <li>Serialize Badge | February 17, 2020</li>
                                    <li>White Badge | February 12, 2020</li>
                                    <li>PCAP Badge | February 5, 2020</li>
                                    <li>Essential Badge | February 1, 2020</li>
                                    <li>Unix Badge | January 27, 2020</li>
                                    <li>Introduction Badge | January 21, 2020</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>Udemy</b>
                                <ul>
                                    <li>Learn Burp Suite, the Nr. 1 Web Hacking Tool | November 21, 2019</li>
                                    <li>Programming with Python: HandsOn Introduction for Beginners | November 20, 2019</li>
                                    <li>PHP Programming Basics | Nov 15, 2019</li>
                                    <li>Hacking Academy: How to Monitor &#38; Intercept Transmitted Data | Oct 2018</li>
                                    <li>Introduction to Python Programming	| March 2018</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>General Assembly Seattle</b>
                                <ul>
                                    <li>SQL Bootcamp | March 2018</li>
                                    <li>Intro to Data Analytics | March 2018</li>
                                    <li>Python for Data 1 | January 2018</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>SoloLearn</b>
                                <ul>
                                    <li>JavaScrippt | Oct 2019</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>Hack Reactor/Galvanize</b>
                                <ul>
                                    <li>Pre Immersive SSP | Jan 2019</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>Watch and Code</b>
                                <ul>
                                    <li>Practical JavaScript | Dec 2018</li>
                                </ul>
                            </div>
                            <div className="technicalSkills">
                                <b>Udacity</b>
                                <ul>
                                    <li>Intro to Javascript | November 2018</li>
                                </ul>                       
                            </div>                            
                        </td> */}




                        <td>
                            {/* <h4>CPEs</h4>
                            <div className="technicalSkills">
                            <table>
                                <thead>
                                <tr>
                                    <th>Issuer/Cert Name</th>
                                    <th>Date</th>
                                    <th>CPE/CEU #s</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><h4>Stack Skills</h4><br />Windows Exploit Development Megaprimer</td>
                                    <td>does not expire</td>
                                    <td>Sept 14, 2020</td>
                                </tr>
                                <tr>
                                    <td><h4>FreeCodeCamp</h4><br />Information Security Certification</td>
                                    <td><br />Sept 14, 2020</td>
                                    <td>does not expire</td>
                                </tr>
                                <tr>
                                    <td>ICSI | CNSS Certified Network Security Specialist		20485416	</td>
                                    <td>ICSI, UK (International CyberSecurity Institute)<br />July 10, 2020</td>
                                    <td>does not expire</td>
                                </tr>
                                <tr>
                                    <td>CompTIA Network+ Certification Course</td>
                                    <td>NexGenT</td>
                                    <td>June 23, 2020</td>
                                    <td>does not expire</td>
                                </tr>




                                <tr>
                                    <td>Active Countermeasures Network CyberThreat Hunting Training Level 1</td>
                                    <td>Active Countermeasures</td>
                                    <td>January 22, 2020</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Learn Burp Suite, the Nr. 1 Web Hacking Tool</td>
                                    <td>Udemy</td>
                                    <td>November 21, 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Programming with Python : HandsOn Introduction for Beginners"</td>
                                    <td>Udemy</td>
                                    <td>November 20, 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>PHP Programming Basics</td>
                                    <td>Udemy</td>
                                    <td>November 15, 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Responsive Web Design</td>
                                    <td>FreeCodeCamp</td>
                                    <td>November 11, 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>The Complete Hacking Course: Go From Beginner to Advanced!</td>
                                    <td>Stack Skills</td>
                                    <td>November 11, 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Javascript</td>
                                    <td>SoloLearn</td>
                                    <td>October 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Cross Site Scripting(XSS) Attacks for Pentesters</td>
                                    <td>Stack Skills</td>
                                    <td>March 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Pre Immersive SSP</td>
                                    <td>Hack Reactor/Galvanize</td>
                                    <td>Jan 2019</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Practical JavaScript</td>
                                    <td>Watch and Code</td>
                                    <td>Dec 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Ultimate WiFi Hacking & Security Series</td>
                                    <td>Stack Skills</td>
                                    <td>Dec 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Intro to Javascript</td>
                                    <td>Udacity</td>
                                    <td>November 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Hacking Academy: How to Monitor & Intercept Transmitted Data</td>
                                    <td>Udemy</td>
                                    <td>Oct 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>SQL Bootcamp</td>
                                    <td>General Assembly Seattle</td>
                                    <td>March 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Intro to Data Analytics</td>
                                    <td>General Assembly Seattle</td>
                                    <td>March 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Introduction to Python Programming</td>
                                    <td>Udemy</td>
                                    <td>March 2018</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Python for Data 1</td>
                                    <td>General Assembly Seattle</td>
                                    <td>January 2018</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                            </div>  */}

                            
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
export default Education