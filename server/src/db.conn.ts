import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const client = mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.error('Error: ', error);
    return error;
  });

export default client;
