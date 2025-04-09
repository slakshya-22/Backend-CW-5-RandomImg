const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Random Image API!');
});

app.get('/api/image/random', (req, res) => {
  res.json({
    message: "Random img below",
    image: "https://picsum.photos/500"
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
