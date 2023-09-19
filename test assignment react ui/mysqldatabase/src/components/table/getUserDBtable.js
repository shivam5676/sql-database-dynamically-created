import axios from "axios";
import { useEffect, useState } from "react";

const GetUserTable = (props) => {
  const [tableData, setTableData] = useState("");
  useEffect(() => {
    axios
      .post("http://localhost:5000/allFields", {
        dbname: props.dbname,
      })
      .then((response) => {
        props.sendColumns(response.data.tableheader)
        let header = "<tr>";
        response.data.tableheader.map((current) => {
          header = `${header}<th>${current.name}</th>`;
        });
        header = header + "</tr>";

        let footer = "";
        response.data.tabledata.map((current) => {
          footer = footer + "<tr>";
          for (const key in current) {
            footer = `${footer}<td>${current[key]}</td>`;
          }
          footer = footer + "</tr>";
        });

        const tableView = `<table>${header}${footer}</table>`;
        setTableData(tableView);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.dbname]);

  return (
    <div>
      UserDB
      <div dangerouslySetInnerHTML={{ __html: tableData }}></div>
    </div>
  );
};
export default GetUserTable;
