const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ariHealthDatabase'
});
const app = express()
app.use(cors())

app.get('/ariHealthDatabase', (req, res)=> {
    const sqlInsert = "INSERT INTO occurrencesTable (occurrence, activity, details, date, time) VALUES (?,?,?)"
    // const values = [occurrence, activitiy, details, date, time]; needs tweaking
    db.query(sqlInsert, (err, result)=> {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'An error occurred while inserting data' });
      }
    })
    return res.json("From the backend")
});

app.listen(8081, ()=> {
    console.log("Server is running")
})

// Medication CRUD for MedicationForm
const { pool } = require('./ariHealthDatabase');

// Function to insert medication data into the Medications table
async function insertMedicationData(genericName, brandName, dosage, dosageUnit, instructions, reminder, medication_id) {
  try {
    const query = 'INSERT INTO MedicationsData (generic_name, brand_name, dosage, dosage_unit, instructions, reminder) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [genericName, brandName, dosage, dosageUnit, instructions, reminder];

    const connection = await pool.getConnection();
    await connection.query(query, values);
    connection.release();

    console.log('Medication data saved successfully');
  } catch (error) {
    console.error('Error saving medication data:', error);
    throw new Error('An error occurred while saving medication data');
  }
}

// Function to insert user data into the Users table
async function insertUserData(name, email, password) {
  try {
    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
    const values = [name, email, password];

    const connection = await pool.getConnection();
    await connection.query(query, values);
    connection.release();

    console.log('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
    throw new Error('An error occurred while saving user data');
  }
}

module.exports = {
  insertMedicationData,
  insertUserData,
};
