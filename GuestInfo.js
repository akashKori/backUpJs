// this component we are createing to keep all guest information 
// so basically we are going to segregate guest info into 
//basic info and education info 

import React from 'react';
import BasicInfo from './BasicInfo';
import EducationInfo from './EducationInfo';
import WeeklyUpdate from './WeeklyUpdate';
import LoadCondition from './LoadCondition';

class GuestInfo extends React.Component
{
    /// testing greet function

    greet()
    {
        alert('hi buddy');
    }


   render()
    {
    let guestInfo =
        {
        basicInfo :{
            name : 'akash',
            surname : 'kori',
            age : 30,
            hobbies : ['cricket','football','dance']
        },
        educationInfo :{
            degree :'B. Tech',
            college : 'NIT Raipur',
            exp: '4 yrs',
            company : 'IncReve' 
        },
        isLogged : true
        }
    
    
        return(
            <div>
                <BasicInfo basicInfo = {guestInfo.basicInfo}/>
                <EducationInfo eduInfo = {guestInfo.educationInfo} greet={this.greet}/>
                <LoadCondition  isLogged = {guestInfo.isLogged} />                
            </div>
        );
    }
}

GuestInfo.PropTypes= {
    guestInfo : React.PropTypes.object,      
}

export default GuestInfo;

