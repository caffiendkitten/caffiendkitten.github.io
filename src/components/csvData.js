import React  from 'react';
const keysHeads = [
    "Certification Name",
    "Certification Authority",
    "License #",
    "Compleated",
    "Experation",
    "Hours Towards CPE/CEUs"
];
class CSVtable extends React.Component {
    state = {
        addClass: false,
        navClass: "",
        // certs: [] 
    }
    renderTableHeader() {
        // console.log("certs?>???", this.props.certs)
      //  let header = Object.keys(this.props.certs)
       return keysHeads.map((key, index) => {
          return <th key={index}>{key}</th>
       })
    }
 
    renderTableData() {
       return this.props.certs.map((cert, index) => {
        //    console.log("whats haoppening?", this.state.certs)
          const { CertificationName, CertificationAuthority, LicenseNum, Compleated, Experation, HoursTowardsCPECEUs } = cert //destructuring
          return (
             <tr key={index}>
                <td>{CertificationName}</td>
                <td>{CertificationAuthority}</td>
                <td>{LicenseNum}</td>
                <td>{Compleated}</td>
                <td>{Experation}</td>
                <td>{HoursTowardsCPECEUs}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
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