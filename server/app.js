import express from "express";
import path, {dirname} from 'path'
import {fileURLToPath} from "url";

import tourRoutes from './routes/tours.js';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// connection DB 

// middlewares
app.use('/', express.static(path.join(__dirname, '../client', 'dist/')))
app.use(express.json())

// routes
app.use('/', tourRoutes)

export default app
