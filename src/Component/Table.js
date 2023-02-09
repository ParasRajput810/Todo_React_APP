import React , {Component} from "react";
import "./Table.css"

const Thead = ()=>{
    return(
        <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Todo Description</th>
        </tr>
  </thead>
    )
   
}
const Tbody = (props)=>{
    console.log(props.character[1]);
    const rows = props.character.map((row,index)=>{
        return (
            <tr key={index}>
                <td>{row.FirstName}</td>
                <td>{row.Lastname}</td>
                <td>
                    <button onClick = {()=>props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    })
    return <tbody>{rows}</tbody>
    
}

class Table extends Component{
    render(){
        const {characterData , removeCharacter} = this.props;
        return (<table className="table  container customcc">
        <Thead/>
        <Tbody character = {characterData} removeCharacter = {removeCharacter}/>
      </table>
        )
    }
}

export default Table;