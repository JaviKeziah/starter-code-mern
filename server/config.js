import {config} from 'dotenv'
config()

const PORT = process.env.PORT
const MONGO_CNN = process.env.MONGO_CNN

export {PORT, MONGO_CNN}