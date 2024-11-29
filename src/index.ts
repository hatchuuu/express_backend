import { routes } from './../routes/index';
import express, { Application } from "express"
import dotenv from "dotenv"

const app: Application = express()
dotenv.config()


const port = process.env.PORT
routes(app)

app.listen(port, () => console.log(`Server Running on port ${port}`))