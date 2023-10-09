import React  from 'react';
const keysHeads = [
    "Badge Title",
    "Badge Authority",
    "Badge Number",
    "Date Compleated"
   ];

class BADGEtable extends React.Component {
   state = {
      addClass: false,
      navClass: "",
   }

   renderTableHeader() {
   return keysHeads.map((key, index) => {
      return <th key={index}><h6>{key}</h6></th>
   })
   }
 
   renderTableData() {
      return this.props.edu.map((edus, index) => {

         const { BadgeName,BadgeAuthority,BadgeNum,Compleated,Image} = edus //destructuring
         return (
            <tr key={index}>
               <td><img src={Image} alt={BadgeName}/><br />{BadgeName}</td>
               <td>{BadgeAuthority}</td>
               <td>{BadgeNum}</td>
               <td>{Compleated}</td>
               {/* <td><img src={Image}/></td> */}
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