import React, { Component , useState} from "react";
import  "./Form.css"

const FormSetup = (props)=>{
  const [firstname , setfirstname] = useState("");
  const [lastname , setlastname] = useState("");

  const firstnamehandler = (event)=>{
    setfirstname(event.target.value);
  }

  const lastnamehandler = (event)=>{
    setlastname(event.target.value);
  }


  const onclickhandler = ()=>{
    let result = {FirstName : firstname , Lastname : lastname};
    props.onsubmithandle([...props.character , result]);
  }

  return(
    <>
      <div className="mb-3 container my-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Todo Title"
            onChange={firstnamehandler}
            name="FirstName"
          />
        </div>
        <div className="mb-3 container my-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Todo Description
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Your Todo Description"
            onChange={lastnamehandler}
          />
          
        </div>
        <button type="button" className="btn btn-primary btnmarg my-4" onClick={onclickhandler} >Submit</button>
    </>
  )
}

class Form extends Component {
  render() {
    const {onsubmithandle,characterData } = this.props;
    return (
      <>
        <FormSetup  character = {characterData} onsubmithandle = {onsubmithandle} />
      </>
    );
  }
}

export default Form;
