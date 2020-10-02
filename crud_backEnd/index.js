import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "dotenv/config";
import initMongo from "./config";

//routes
import router from "./routes";

// moongose.Promise = global.Promise
// moongose.connect(config.db,{
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })
// .then(moongose => console.log('Conectando a la BD en el puerto', config.port))

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);

//router
app.use("/api", router);

//Puerto
app.set("port", process.env.PORT || 3000);

//Abrimos el puerto a operar la app
app.listen(app.get("port"));

//Conexion base de datos
initMongo.connect();
// mongoose.connection.on('error', console.log)
mongoose.connection.on("disconnected", initMongo.connect);
