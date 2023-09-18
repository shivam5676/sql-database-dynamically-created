
import AllTable from "./components/table/allTable";
import Table from "./components/table/createTable";
import React, { useState } from "react";
import GetUserTable from "./components/table/getUserDBtable";
function App() {
  const[dbname,setDbname]=useState()

  const userdbHandler=(db)=>{
setDbname(db) 
  }
  return (
    <div className="App">
      <AllTable getDB={userdbHandler}></AllTable>
      <Table></Table>
      
      <GetUserTable dbname={dbname}></GetUserTable>
    </div>
  );
}

export default App;
