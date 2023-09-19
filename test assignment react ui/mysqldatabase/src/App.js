
import AllTable from "./components/table/allTable";
import Table from "./components/table/createTable";
import React, { useState } from "react";
import GetUserTable from "./components/table/getUserDBtable";
import SaveData from "./components/table/saveData";
function App() {
  const[dbTablename,setDbTablename]=useState()
const [fieldCol,setFieldCol]=useState([])
  const userdbHandler=(db)=>{
    setDbTablename(db) 
  }
  const columnHandler=(col)=>{
setFieldCol(col)
  }
  return (
    <div className="App">
      <AllTable getDB={userdbHandler}></AllTable>
      <Table></Table>
      
      <GetUserTable dbname={dbTablename} sendColumns={columnHandler}></GetUserTable>
      <SaveData dbname={dbTablename} inputFields={fieldCol}></SaveData>
    </div>
  );
}

export default App;
