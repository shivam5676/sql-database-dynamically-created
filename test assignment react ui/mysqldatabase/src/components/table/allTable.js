import axios from "axios";
import { useEffect, useState } from "react";
const AllTable = (props) => {
  const [tableArray, setTableArray] = useState([]);
  const buttonHandler = (dbtablename) => {
    props.getDB(dbtablename);
  };
  const schema = "expense-database";
  
  useEffect(() => {
    axios
      .post("http://localhost:5000/alltable", { dbname: schema })
      .then((response) => {
        
        const newarray = response.data.tables.map((current) => {
          return (
            <button
              key={current}
              onClick={() => {
                buttonHandler(current);
              }}
            >
              {current}
            </button>
          );
        });
        setTableArray(newarray);
        // console.log(response.data.tables)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>{tableArray}</div>;
};
export default AllTable;
