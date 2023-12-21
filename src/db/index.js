import { connect } from "mongoose";

const connetDb = async () => {
  try {
    const connection = await connect(process.env.DB_URI);
    console.log(`Connecting to database done`);
  } catch (err) {
    console.log(`while connecting the database ${err.message}`);
  }
};
export default connetDb;
