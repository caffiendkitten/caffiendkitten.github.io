import React  from 'react';
const keysHeads = [
    "School Name",
    "Degree",
    "Relevant Classes",
    "Compleated"
   ];

class EDUtable extends React.Component {
   state = {
      addClass: false,
      navClass: ""
   }

   renderTableHeader() {
   return keysHeads.map((key, index) => {
      return <th key={index}><h6>{key}</h6></th>
   })
   }

   processClasses = (classList)=> {
      if(classList.length > 0){
         let listss = classList.split(",")

         return listss.map((Cl, index) => (
            <li key={index}>{Cl.replace(/-/g, ',')}
            </li>
         ))        
      }






   }

   renderTableData() {
      return this.props.edu.map((edus, index) => {

         const { SchoolName,DegreeType,Major,Emphasis,Compleated,Location,Classes} = edus //destructuring
         return (
            <tr key={index}>
               <td>
                  <b>{SchoolName}</b><br />
                  &nbsp;&nbsp;&nbsp;{Location}
               </td>
               <td>
                  <b>Degree Type:</b> {DegreeType}<br />
                  <b>Major:</b> {Major}<br />
                  <b>Emphesis:</b> {Emphasis}
               </td>
               <td><ul>{this.processClasses(Classes)}</ul></td>
               <td>
                  <i className="far fa-check-circle"></i>{Compleated}
               </td>
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
 export default EDUtable