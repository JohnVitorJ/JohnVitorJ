import mongoose from "mongoose";
import seedDB from "./src/seed/db.seeder";
const dbUri = `mongodb://root:1234@db:27017/dev?authSource=admin`;
const connection = mongoose.connect(dbUri);

connection
  .then(async (db) => {
    console.log(`server ${db}`);
    await seedDB(200);
  })
  .catch((err) => console.log(err));

export default connection;
