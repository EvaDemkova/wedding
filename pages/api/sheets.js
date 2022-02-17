import { google } from 'googleapis';
import privateKey from '../../key/google'

async function handler(req, res) {
  if (req.method === 'POST') {
    const {body} = req
  
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        private_key: privateKey.replace(/\\n/g, "\n")
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    
    const sheets = google.sheets({
      auth,
      version: 'v4',
    });
    

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'falala!A1:H5',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        range: "falala!A1:H5", 
        majorDimension: "ROWS", 
        values:[[body.title, body.slug , body.body] ]
      }
    });

    console.log(response)

    res.status(201).json(response);
    // res.send()
   }
  // res.status(200).json({ message: 'Hey!' });
}

export default handler;