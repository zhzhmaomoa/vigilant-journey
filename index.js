import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname,"src")));
app.listen(80,()=>{
    console.log("http://127.0.0.1")
})