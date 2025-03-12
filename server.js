const express = require('express');
const app = express();
const port = 3000;

// základná odpoveď pre testovanie
app.get('/', (req, res) => {
  res.send('Server funguje!');
});


app.listen(3000, () => {
  console.log('Server beží na porte 3000');
});

