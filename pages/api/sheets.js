import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'POST') {
    const {body} = req
  
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6/i6combzKrwC\njltFQwmfePXupY63NtofExL8rrOrqDXKI1pQlTc4W71mf91rSItVo9aK9F5u5RfV\nC3n3QlG5/4YWhA7gKbpUM+C4FgET1nGQxN5wYq5PpE4xPb+DpNbOLPAdapU32goA\nhXYgAkQukhpLojokXplyt+n+icwuHiOwUJQRRo4CRx9IhDk6EjkGYXyf7whluToV\nRSg28xihNULZ0QfFWh0lhGqz+5sotRZy9hvgkSrzsW8lkNUH/lwDqkK8shstgV7n\nX0YDk/xRqG8DZeTjcHjXLuvW6xlSYPSqGCxPySMlrIzcYjlCv4UpU9HpbADxsEF+\nrdB5MfoxAgMBAAECggEAGkwBwRxjrwHNA+0CL+jgExG/QEr/GYv4u9MCYg+ti8/x\nlJZJLrj1VZMtPRtxR5OhqK8MTmlUWHMWWWsuQVQNy0MAl+0FbIfhwNK04R6TEzee\nq/XLtHFkQyX/qxQceUZ2wPL356MkDgE3U+Bw/spizUvVr9pGI/Q7zzLHEPlPAhMU\ndDWienFbUcvblY19G8tu7wjC8p8mKcfy6d9uOi7MkucvAb+D4BFgYJDX7cTYtQ8y\nHJlcCxk8jsaVvH7UploGj8QjPHFIz0v4BU1as8ugdLokkjodXZ6qXv8U77Zsbl8k\nQaQnPaIzIwT+LThaifl8WFY62KtHxTsmByM40kXjOQKBgQDe2OCN9Jmok6JnYWbj\nlOttwa+TbXwCTIyb1MW10QERnE0LNedp/VCDlPpe9g5Z/U3A7V7aDZkcZS497pVQ\ndLWHV4zaJ5I6NZKXo4OdBUdIUX5twpI/ipkUN9c+eRMryyVG7b75hfh5OQ6/gryo\neAvKIKw74r/yr8BnxRZBRsWTdQKBgQDWz8vxuNofYhVo9xHti7GEKXgDBLL4hIbG\nSFI5bQqhS/5JwJdIttnTgew8McmwDhanNCNCbCW3ek0gGjRUh/0SyS1drZhIK0Fq\n+IvRLnRcVDLNO10RAFhmc3+7gqowsmxW0OCqoo4Tl8/V7Vihy6/8XlekDk6apwRb\nJ4mWyz4gTQKBgGVe2qc4gT2CCvpkAF2+PGotFSVHRIX3NG8eluFiNc5A/3r+Bkrc\nhGeWuV3BKD4fT+NXFzKxxNh53lMl2J5EuN7cIKKMJaR9AjYgl5ox8H8hMxXS0Jw+\n++uKi0tL4ECnpEljlOAE5Uafgen0GsW39gT4X+DOAOrwr+GEcd83xmCRAoGBAIle\nfTdpVOO436QuS+Ky8KRpuHuFp8XRSjbGzP44QxH+/PDBHn27oPTnIuEjnazedZIb\nf2jcrAn3Rhb/avObuzUmPcKoXrfYIY98vjzZDkR0+7/O9KcIp39s4QRSfO+DSlEC\nZon4Rg81iA1wKLve+/3Rfw5Er/OqVtjMIeqysloJAoGAOBmDmxw39QhabZzh2rIu\npJPb8X1GS4iQbSRitdPXn+NCtA5a7X6YM557F4SiAkqZUyNJdq5qX7YXDnSk9VrR\n/kqY/Gfmm7tzQ1668TehFZ12e+DHabZlvxUCHQ3LVtRmjDwMmdk0pBTIGQQvS6EZ\n2dLN6L88A7QYJxJTqgP8PSY=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n")
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