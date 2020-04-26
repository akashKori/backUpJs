//this component is going to have basic information
import React from 'react';

class BasicInfo extends React.Component {
    render()
    {
        return(
            <div>
                <h1> Basic information of : {this.props.basicInfo.name} </h1>
                <div>
                <table>
                    <tbody>
                        <tr>
                            <td> name : {this.props.basicInfo.name}</td>
                        </tr>
                
                        <tr>
                            <td> surname : {this.props.basicInfo.surname}</td>
                        </tr>
                        
                        <tr>
                            <td> age : {this.props.basicInfo.age}</td>
                        </tr>
                        
                        <tr>
                            <td> hobbies {this.props.basicInfo.hobbies.map((hobby,i)=>{ return <li key={i}> {hobby} </li>})}</td>
                        </tr>
                    </tbody>                    
                    </table>
                    </div>
            </div>
        );
    }
}

export default BasicInfo;