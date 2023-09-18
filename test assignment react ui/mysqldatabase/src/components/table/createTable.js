import { useRef, useState } from "react";
import axios from "axios";
const Table = () => {
  const [inputFieldsCount, setInputFieldsCount] = useState(1);
  const [tableName, setTableName] = useState();
  const [data, setData] = useState([{ fname: "", ftype: "" }]); //for storing input fields data
  const inputFieldArray = []; //for storing input fields count values

  const fieldIncreaser = () => {
    setInputFieldsCount(inputFieldsCount + 1);
    setData([...data, { fname: "", ftype: "" }]); // Add an empty object for the new input pair
  };
  const inputfieldsShower = () => {
    for (let index = 0; index < inputFieldsCount; index++) {
      inputFieldArray.push(
        <div key={index}>
          <input
            placeholder="fields name"
            name="fname"
            onChange={(e) => inputDataHandler(index, e)}
            required
          ></input>
          <input
            placeholder="TYPE"
            name="ftype"
            onChange={(e) => inputDataHandler(index, e)}
            required
          ></input>
        </div>
      );
    }
  };
  const inputDataHandler = (index, e) => {
    e.preventDefault();

    const newData = [...data]; // Create a copy of the data array
    newData[index][e.target.name] = e.target.value; // Update the corresponding property in the copied object
    setData(newData); // Update the state with the modified array
  };

  const dataSubmitter = (e) => {
    e.preventDefault();
    let str = "";
    for (let i = 0; i < data.length; i++) {
      
      str = str + data[i].fname + " " + data[i].ftype + ",";
    }
    str=str.slice(0, -1)
   
    axios.post("http://localhost:5000/newtable", {
      table: tableName,
      fields: str,
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    // const create = `create table ${tableName}(${str})`;

    // console.log(create);
  };
  const tableNameHandler = (event) => {
    setTableName(event.target.value);
  };
  return (
    <div>
      
      <form onSubmit={dataSubmitter}>
        <h3>Table Name</h3>
        <input
          placeholder="table name"
          onChange={tableNameHandler}
          required
        ></input>

        {inputfieldsShower()}

        <div>field name</div>

        <div>type</div>

        {inputFieldArray}

        <button onClick={fieldIncreaser}>add more fields</button>
        <button type="submit">create table</button>
      </form>
    </div>
  );
};
export default Table;
