
// // const express = require('express');
// // const app = express();
// // const PORT = 3000;

// // app.use((req, res, next) => {
// //   res.header('Access-Control-Allow-Origin', '*');
// //   next();
// // });

// // app.get('/api/courses', async (req, res) => {
// //   const clientId = 'sPvELj9EieMzpgwYZxEVncW8sWFTF8aTKub5J2gJ';
// //   const clientSecret = '4xpwMapojihPVoQdDwjET9StERujuqppTvDeQGTuQLF5qHJFzDXDex69kweUe9RdxJVDnWUdHuE8CQQx5TWPHsW5617sfTbpbRT8IDOkI7Y6V0UhtmnW5l6401DTn0DY';
// //   const apiUrl = 'https://www.udemy.com/api-2.0/courses/';

// //   try {
// //     // Use dynamic import for node-fetch
// //     const fetch = await import('node-fetch');

// //     const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

// //     const response = await fetch.default(apiUrl, {
// //       headers: {
// //         Authorization: `Basic ${basicAuth}`,
// //       },
// //     });

// //     if (!response.ok) {
// //       throw new Error('Network response was not ok.');
// //     }

// //     const data = await response.json();
// //     res.json(data);
// //   } catch (error) {
// //     console.error('Error fetching courses:', error);
// //     res.status(500).json({ error: 'Error fetching courses' });
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });


// const express = require('express');
// const fetch = require('node-fetch'); // CommonJS version
// const app = express();
// const PORT = 3000;onstonstonstonstonstonstonstonstonstonstonstonstonstonstonstonst

// app.use((req, res, next) => {
//   res.header('A'Access-Control-Allow-Origin''A'Access-Control-Allow-Origin'ccess-Control-Allow-Origin'ccess-Control-Allow-Origin', '*');

//   next();
// });

// app.get('/api/courses', async (req, res) => {

//   const clientId = '	sPvELj9EieMzpgwYZxEVncW8sWFTF8aTKub5J2gJ';

//   const clientSecret = '4xpwMapojihPVoQdDwjET9StERujuqppTvDeQGTuQLF5qHJFzDXDex69kweUe9RdxJVDnWUdHuE8CQQx5TWPHsW5617sfTbpbRT8IDOkI7Y6V0UhtmnW5l6401DTn0DY';
//   const apiUrl = 'https://www.udemy.com/api-2.0/courses/';

//   try {

//     const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

//     const response = await fetch(apiUrl, {

//       headers: {
//         Authorization: `Basic ${basicAuth}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok.');

//     }

//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     res.status(500).json({ error: 'Error fetching courses' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');

const axios = require('axios');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/courses', async (req, res) => {

    const clientId = '	sPvELj9EieMzpgwYZxEVncW8sWFTF8aTKub5J2gJ';
  const clientSecret = '4xpwMapojihPVoQdDwjET9StERujuqppTvDeQGTuQLF5qHJFzDXDex69kweUe9RdxJVDnWUdHuE8CQQx5TWPHsW5617sfTbpbRT8IDOkI7Y6V0UhtmnW5l6401DTn0DY';


  const apiUrl = 'https://www.udemy.com/api-2.0/courses/';

  try {
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');


    const response = await axios.get(apiUrl, {

      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
    });


    res.json(response.data);

  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
