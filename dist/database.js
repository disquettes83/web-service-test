import { MongoClient } from 'mongodb';
const mongoUri = 'mongodb://localhost:27017'; // Indirizzo del server MongoDB
const dbName = 'wordpress-posts'; // Nome del database
const client = new MongoClient(mongoUri);
export const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connesso al database MongoDB');
    }
    catch (err) {
        console.error('Errore durante la connessione al database', err);
    }
};
export const getDatabase = () => {
    return client.db(dbName);
};
