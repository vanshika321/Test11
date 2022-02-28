import React, { Component } from 'react';
import{getData} from "./data"; 

class Countries extends Component {
    state = {
        data   : getData(),
        searchTerm:""

      } 
    render() { 
        return (
            <div>
                 <input type="text"placeholder="Search" 
        onChange={(e)=>{
          this.setState({searchTerm:e.target.value})
        }}/>
                {this.state.data.filter((val)=>{
            if(this.state.searchTerm==="")
                return val
                else if(val.country.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                    return val
          }).map((obj) => (
           <table>
               <tr>Country Name</tr>
               <td>{obj.country}</td>
               <tr> Name</tr>
               <td>{obj.name}</td>
           </table>
          ))}
                
            </div>
        );
    }
}
 
export default Countries;
