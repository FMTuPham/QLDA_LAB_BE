const express = require('express');
const db = require('./config/database'); 
const app = express();
const Movie = require('./models/movie.model')
const movieRoutes = require('./routes/movieRoutes')
const port = 3000;

async function startApp() {
  try {
    await db.authenticate();
    console.log('Connection to the database has been established successfully.');

    await db.sync();
    await Movie.sync();
    console.log('All models were synchronized successfully.');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Gọi hàm startApp() để bắt đầu ứng dụng
startApp();

app.use(express.json());
app.use('/api', movieRoutes)
