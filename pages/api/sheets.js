import { google } from 'googleapis';
import privateKey from '../../key/google';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { body } = req;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        private_key: privateKey.replace(/\\n/g, '\n'),
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

    let values = [];

    body.guests.forEach((guest,_i) => {
      let arr = Object.values(guest)
      const date = new Date();
      console.log(date.toLocaleDateString('en-GB'))
      arr = [...arr, date.toLocaleDateString('en-GB')]
      values = [...values, arr]
     })
   
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'planning!A1:H5',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        range: 'planning!A1:H5',
        majorDimension: 'ROWS',
        values: values,
      },
    });


    res.status(200).json({ POST: response });
  }

  if (req.method === 'GET') {
    res.status(200).json({ GET: 'Hey!' });
  }
}

export default handler;
