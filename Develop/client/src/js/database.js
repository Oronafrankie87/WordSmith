import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('PUT to WordSmith database');
const smithDB = await openDB('pwa', 1);
const tx = smithDB.transaction('pwa','readwrite');
const store = tx.objectStore('pwa');
const request = store.put({text: content});
const result = await request;
console.log( "🎸 Data Saved!", results.value );
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.log('GET from database');
const smithDB = await openDB('pwa', 1);
const tx = smithDB.transaction('pwa', 'readonly');
const store = tx.objectStore('pwa');
const request = store.getAll();
const result = await request;
console.log('result.value', result);
return result.value;

};
initdb();
