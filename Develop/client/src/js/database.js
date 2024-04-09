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


// CRUD methods from miniproject 28, modified.  
// TODO: Add logic to a method that accepts some content and adds it to the database. 
// putDB is a poor choice if you are "adding" ... this is intended to update (almost for sure). 
// export const putDb = async (content) => console.error('putDb not implemented');
// Note that this DB appears to only, ever have ONE record => no id
export const putDb = async (content) => {
// export const putDb = async (id, content) => {
  console.log('PUT to the database');
  const jatesDb = await openDB('jates', 1);
  const tx = jatesDb.transaction('jates', 'readwrite');
  const store = tx.objectStore('jates');
  // const request = store.put({ id: id, jate: content });
  const request = store.put({ jate: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

// Export a function we will use to POST to the database. 
// Example: NOT used. 
export const postDb = async (name, home, cell, email)  => {
  console.log('Post to the database');
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .add() method on the store and pass in the content.
  const request = store.tadd({ name: name, home_phone: home, cell_phone: cell, email: email });
  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);
};  // end postDb  

// TODO: Add logic for a method that gets all the content from the database
// Export a function we will use to GET to the database.
export const getDb = async () => {
  console.log('GET from the database');
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};  // end getDb

// Export a function we will use to DELETE to the database.
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB('jate', 1);
  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store.
  const store = tx.objectStore('jate');
  // Use the .delete() method to get all data in the database.
  const request = store.delete(id);
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};  // end deleteDb 

// initialize the database 
initdb();


