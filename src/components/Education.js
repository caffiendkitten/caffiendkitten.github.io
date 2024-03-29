import React from 'react';
import Papa from 'papaparse';
import {withRouter} from 'react-router-dom';
import csvFilePath from './../docs/certs.csv'
import eduFilePath from './../docs/degrees.csv'
import Footer from "../containers/Footer.js"
import CsvDatas from './csvData.js'
import EduDatas from './eduData.js'
import Loading from '../containers/Loading'
import IconPicker from '../docs/iconsList.js'

var csvDatas1 = [];
var eduDataArray = [];

class Education extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
			addClass: false,
			navClass: "",
            certState: [],
            eduState: [] 
        };

        this.getData = this.getData.bind(this);
    }

    UNSAFE_componentWillMount() {
        this.getCsvData(csvFilePath, csvDatas1, "certState");
        this.getCsvData(eduFilePath, eduDataArray, "eduState");
        // this.forceUpdate()
        
    }

    // shouldComponentUpdate(){
    //     // this.forceUpdate()
    //     return true
    // }
    componentWillUnmount() {
        csvDatas1 = []
        eduDataArray = []
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
                dataType.push(parsedOutput.data)
            },
            complete: this.getData(dataType, dataState)
        });
        this.forceUpdate()
    }

    render() {
        return (<div className="content">
            
        <h3>Continued Education</h3>

        <div className="row">
            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">

    {this.state.certState.length < 22?
            <Loading />
            :
            <div className="eduCol">
                <h4><i className="icon">{<IconPicker iconName={"CPEIcon"} />}</i> CPE/CEUs</h4>
                <CsvDatas certs={this.state.certState}/>
                <br />

                <h4><i className="icon">{<IconPicker iconName={"education"} />}</i> Academic Education</h4>
                <EduDatas edu={this.state.eduState}/>
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