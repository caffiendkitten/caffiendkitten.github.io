import React, { Component } from 'react';
import Footer from "../containers/Footer.js"
import { pdfjs } from "react-pdf";
import IconPicker from '../docs/iconsList.js'
// import { Document, Page, pdfjs } from "react-pdf";
import file from '../docs/DaNeil_Coulthard_Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class Resume extends Component {

    render() {

        return <div className="content">
        <h3>Resume</h3>

        <div className="row">

            <div className="column left">
                <p className="resourcesSide"></p>
            </div>
        
            <div className="column middle">
                {/* style={{"width" : "100%"}} width="100%" */}
                {/* <Document file={file} >
                    <Page pageNumber={1} />
                </Document> */}
                <a href={file}><i className="icon">{<IconPicker iconName={"save"} />}</i> Download</a>

                <embed src={file} type="application/pdf" width="100%" height="950px" />

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
}      
export default Resume