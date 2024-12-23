import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: '1234', 
  database: 'contact_form',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Check if required fields are present
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      // Insert form data into the database
      const query = 'INSERT INTO contact (name, email, message) VALUES (?, ?, ?)';
      const [results] = await pool.query(query, [name, email, message]);

      console.log('Database insert results:', results);

      // Respond with success
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Database error:', error); // Log error details for troubleshooting
      res.status(500).json({ message: 'An error occurred while saving your message.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}