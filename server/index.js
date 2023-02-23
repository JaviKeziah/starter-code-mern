
import app from './app.js'
import connectDB from './DB/conectDB.js'
import {PORT} from './config.js'

connectDB()
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))