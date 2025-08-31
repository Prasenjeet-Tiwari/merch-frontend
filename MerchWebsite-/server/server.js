import {app} from './app.js';
import dotenv from 'dotenv';


dotenv.config();

const server = app.listen(process.env.PORT || 8000,()=>{
    console.log(`Your App is running on port ${process.env.PORT}`)
})
