import "dotenv/config";
import  express  from "express";
import cors from "cors";
 import { router } from "./routes/item";
import db from "./config/mongo";
// import { Router } from "express";
// const router = Router();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(()=>{
    console.log("Conexion ready");
})
// router.get('/',(req,res)=>{
//     res.send("Hola");
// })
app.listen(PORT,()=>{
    console.log(`Listo por el puerto ${PORT}`);
});