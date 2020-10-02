import mongoose from "mongoose";

const DB_URL = process.env.MONGO_URI;
const PORT = process.env.PORT;

export default {
  connect: () => {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(DB_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      })
      .then(() => {
        let dbStatus;
        dbStatus = `*    DB Connection: OK\n****************************\n`;
        console.log("****************************");
        console.log("*    Starting Server");
        console.log(`*    Port: ${PORT || 3000}`);
        console.log(`*    Database: MongoDB`);
        console.log(dbStatus);
      })
      .catch(err => {
        console.log("*******************************************");
        console.log(
          `* Error connecting to DB: 
          \n${err}\n*******************************************\n`
        );
      });
  }
};
