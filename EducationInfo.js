// this component is going to have info about education  

import React from 'react';

class EducationInfo extends React.Component {
    render()
    {
        return(
            <div>
                <h2> Education infomration </h2>
                <div>
                    <table>
                    <tbody>
                        <tr>
                            <td> Degree : {this.props.eduInfo.degree}</td>
                        </tr>
                
                        <tr>
                            <td> College : {this.props.eduInfo.college}</td>
                        </tr>
                        
                        <tr>
                            <td> Exp : {this.props.eduInfo.exp}</td>
                        </tr>
                        
                        <tr>
                            <td> Company : {this.props.eduInfo.company}</td>
                        </tr>
                    </tbody>                    
                    </table>
                
                </div>
                <div>
                    <button onClick={this.props.greet}>  hi </button>
                    </div>
            </div>
        );
    }
}


export default EducationInfo;
