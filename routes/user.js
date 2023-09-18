const express = require("Express");
const db = require("../util/database");

const router = express.Router();

router.post("/newtable", (req, res) => {
  db.query(`create table ${req.body.table}(${req.body.fields})`)
    .then((response) => {
      console.log(response);
      res.status(200).json({ msg: "table succeessfully created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
});
router.post("/allTable", (req, res) => {
  const dbname = req.body.dbname;
  db.query(
    `SELECT table_name FROM information_schema.tables WHERE table_schema = '${dbname}'`
  )
    .then((result) => {
      const tables = result[0].map((row) => {
        return row["TABLE_NAME"];
      });

      res.json({ tables });
    })
    .catch((err) => {
      console.log(err);
    });
  ``;
});
router.post("/allFields", (req, res) => {
  const userTable = req.body.dbname;

  db.query(`select * from ${userTable}`)

    .then((result) => {
      console.log(result);
      res.status(200).json({ tabledata: result[0], tableheader: result[1] });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/saveuser", (req, res) => {
  const dbtable = req.body;
  db.query("insert into shivamdb VALUES ('shivam', '5676', 'mobile')")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/getuser", (req, res) => {
  const userTable = req.body.dbname;

  db.query(`select * from ${userTable}`)
    .then((result) => {
      console.log(result[0]);
      res.status(200).json({ data: result[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
