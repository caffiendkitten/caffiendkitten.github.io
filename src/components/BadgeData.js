import React  from 'react';
const keysHeads = [
    "Badge Title",
    "Badge Authority",
    "BadgeNum",
    "Date Compleated",
    "Experation",
    "CPES?"
   ];

class BADGEtable extends React.Component {
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

         const { BadgeName,BadgeAuthority,BadgeNum,Compleated,Experation,CPECEUs} = edus //destructuring
         return (
            <tr key={index}>
               <td>{BadgeName}</td>
               <td>{BadgeAuthority}</td>
               <td>{BadgeNum}</td>
               <td><i className="far fa-check-circle"></i>{Compleated}</td>
               <td><i className="fas fa-infinity"></i></td>
               <td>{CPECEUs}</td>
            </tr>
          )
      })
   }

   render() {
      return (
         <div className='EduTable' >
            <table className='badgeHistory'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}
export default BADGEtable