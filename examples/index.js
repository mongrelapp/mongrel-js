// import mongrelDB from "@mongrelapp/mongreljs";
const mongrelDB = require("@mongrelapp/mongreljs");

// create database instance
const db = mongrelDB({
  database: "DATABASE_ID",
  token: "API_TOKEN",
});

  // insert/update item
  db.put("example", "this is an example value")
    .then((resp) => console.log(resp.value))
    .catch(console.error);
  
  // get item
  db.get("example")
    .then((resp) => console.log(resp.value))
    .catch(console.error);
  
  // delete item
  db.delete("example")
    .then((resp) => console.log(resp))
    .catch(console.error);
