import React  from 'react';
const keysHeads = [
    "Certificate Name",
    "Certificate Authority",
    "License #",
    "Compleated",
   //  "Experation",
    "CPE/CEU Hours"
];
class CSVtable extends React.Component {
    state = {
        addClass: false,
        navClass: "",
        // certs: [] 
    }

    renderTableHeader() {
       return keysHeads.map((key, index) => {
          return <th key={index}><h6>{key}</h6></th>
       })
    }
 
    renderTableData() {
       return this.props.certs.map((cert, index) => {
          const { CertificationName, CertificationAuthority, LicenseNum, Compleated, Experation, HoursTowardsCPECEUs,img } = cert //destructuring
          return (
             <tr key={index}>
                <td>{img === "NA" ? '' : <img src={img} alt={CertificationName} />}
                <p>{CertificationName}</p></td>
                <td>{CertificationAuthority}</td>
                <td>{LicenseNum}</td>
                <td>{Compleated}</td>
                {/* <td><i className="fas fa-infinity"></i></td> */}
                <td>{HoursTowardsCPECEUs}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div  className='CpeTable' >
             <table className='certs'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 export default CSVtable