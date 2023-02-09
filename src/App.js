/* eslint-disable no-undef */
import React ,{useState} from "react";
import Table from './Component/Table';
import "./App.css"
import Form from "./Component/Form";
function App (){
    const [characterData , setData] = useState([{
        FirstName : "Paras",
        Lastname : "Rajput"
    }])

    const newData = (index)=>{
        setData(characterData.filter((character ,i)=>{
            return i!== index;
        }))
    }
    const onsubmithandle = (newEntry)=>{
        setData(newEntry);
    }

    return (<>
    <h1 className="my-4">React Based Table</h1>
    <Table characterData = {characterData} removeCharacter = {newData}/>
    <Form  characterData = {characterData} onsubmithandle = {onsubmithandle}/>
    </>
    );        
}

export default App;