import axios from "axios";
import { useState } from "react";

const SaveData = (props) => {
  const [inputData, setInputData] = useState([]);
  const inputField = props.inputFields;
  const inputFieldArray = inputField.map((current, index) => (
    <input
      key={index} // Add a unique key to each input element
      onChange={(event) => inputHandler(event, index)}
      placeholder={current.name}
    ></input>
  ));

  const inputHandler = (event, index) => {
    const newInputData = [...inputData]; // Create a copy of the inputData array
    newInputData[index] = event.target.value; // Update the corresponding index in the copied array
    setInputData(newInputData); // Update the state with the modified array
  };
  
  const tabledataHandler = (e) => {
    e.preventDefault();
    const stringyfyArray=inputData.map((current)=>{
      return (`"${current}"`)
    })
    // console.log(stringyfyArray)
    axios.post("http://localhost:5000/saveuser", {
      tableData: stringyfyArray,
      tableName:props.dbname
     
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
   
  };
  return (
    <div>
      <form onSubmit={tabledataHandler}>
        {inputFieldArray}
        <button type="submit">Add data to {props.dbname}</button>
      </form>
    </div>
  );
};
export default SaveData;
