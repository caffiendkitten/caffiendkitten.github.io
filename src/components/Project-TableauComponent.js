import React from 'react'
import Loading from '../containers/Loading'


class ProjectTableau extends React.Component {
  state = {
    loadedz: false 
  }


  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;

    document.body.appendChild(script);
}



  render() {
    if (this.state.loaded === false){
      return (<span>
        <img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/Se/SeattleCrimeDashboard2017_0/Dashboard1/1_rss.png' style={{border: "none"}} />
        <Loading/>
      hi in span 137
     </span>    
              

    )
    } else{
      return (     
        <span>
          Check out the project on Tableau at <a href="https://public.tableau.com/profile/daneil.coulthard#!/vizhome/SeattleCrimeDashboard2017_0/Dashboard" target="_blank" rel="noopener noreferrer">https://public.tableau.com/profile/daneil.coulthard#!/vizhome/SeattleCrimeDashboard2017_0/Dashboard</a>
        </span>  
      )
    }
    
  }
}
  
  
export default ProjectTableau;