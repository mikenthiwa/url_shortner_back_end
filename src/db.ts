import { IMonkManager, ICollection } from "monk";
import monk from 'monk';
import dotenv from 'dotenv';


dotenv.config()


const db: IMonkManager = monk(`${process.env.DB}`)
const urls: ICollection = db.get('urls');

export default urls;
