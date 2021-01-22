import React  from 'react';
const keysHeads = [
    "School Name",
    "Degree/Program",
    "Emphasis",
    "Compleated",
    "Location"
   ];

class CSVtable extends React.Component {
    state = {
        addClass: false,
        navClass: "",
    }

    renderTableHeader() {
      return keysHeads.map((key, index) => {
         return <th key={index}>{key}</th>
      })
    }
 
    renderTableData() {
       return this.props.edu.map((edus, index) => {

          const { SchoolName,DegreeProgram,Emphasis,Compleated,Location} = edus //destructuring
          return (
             <tr key={index}>
                <td>{SchoolName}</td>
                <td>{DegreeProgram}</td>
                <td>{Emphasis}</td>
                <td><i className="far fa-check-circle"></i></td>
                <td>{Location}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div className='EduTable' >
             <table className='eduHistory'>
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