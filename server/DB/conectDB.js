import mongoose from 'mongoose';
import {MONGO_CNN} from '../config.js';

// !connection DB
mongoose.set('strictQuery', false)
const connectDB = async () => {
  try {
    mongoose.connect(MONGO_CNN)
    console.log('Connected to DB')
  } catch (error) {
    console.log(`No se pudo conectar a la DB por el error: ${error}`)
  }
}

export default connectDB