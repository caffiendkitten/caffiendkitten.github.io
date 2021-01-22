import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class THMB extends Component {
 
    render() {
        return (<ScriptTag isHydrating={true} type="text/javascript" src="https://tryhackme.com/badge/106028" />);
    }
}
        
export default THMB