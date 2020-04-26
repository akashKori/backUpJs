//this componenet is just  to keep the local state 

import React from 'react';

class WeeklyUpdate extends React.Component{
    constructor(){
     super();
     this.state ={
         playingTime : 0,
         gamePlayed : ''
     };  
     this.updateStatus = this.updateStatus.bind(this);    
    }
    
    updateStatus()
    {
        this.setState({
            playingTime : this.state.playingTime + 2,
            gamePlayed : this.state.games + 'ckt'
        })
    }

    //execute immediately after componenet render first time
    componentDidMount()
    {
        console.log('component has been mounted ');
    }

    compowillUnmount()
    {
      console.log('componenet has been un mounted successfully');
    }


    render(){
        return(
         <div>
             <h3> WeeklyUpdate for : {this.props.name}</h3>
             <div>
              <button label='update' onClick= {this.updateStatus}  className= 'updateBtn'/>
             </div>
             <div>
                 
              <table>
                  <tbody>
                      <tr>
                      <td>
                        {this.state.playingTime}
                          </td>
                          </tr>
                      </tbody>
                  </table>
              
                 </div>
          </div>
        ); 
    }

}

export default WeeklyUpdate;
