///this component is just to check the load in condition 

import React from 'react';
import Greetings from './Greetings';
import Bye from './Bye';
let ageArray = [2,3,4,5,6,7];
const listItem = ageArray.map((age)=>{ return (<li key={age.toString()}> {age} </li>)})
class loadCondition extends React.Component{

    constructor(){
        super();
        this.signedButton = this.signedButton.bind(this);
        this.unSignedButtton = this.unSignedButtton.bind(this);
        this.state={
           SignedOut : true,
        }
    }
    signedButton()
    {
      this.setState({SignedOut: true}); 
    }
    unSignedButtton()
    {
        this.setState({SignedOut : false});
    }


    render() 
    {
     
     let returnDiv = null;
     if(this.props.isLogged)
      returnDiv = <Greetings/>;
     else
     returnDiv = <Bye/>;
      return(<div> <div>{returnDiv}</div><div>{listItem} </div> </div>); 
    }
}

export default loadCondition;