import {initializeApp} from 'firebase/app';
import {getDatabase} from "firebase/database";

import databaseSecrets from '../databaseSecrets';

const app = initializeApp(databaseSecrets);
const database = getDatabase(app);

export {database};