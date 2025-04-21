import express from 'express';
import moviesRoute from './routes/movies.route.js';

const app = express()
const PORT = 3000;


app.get('/', (req, res) => {
  res.json({msg : "Hello World!"})
})

app.use('/movies', moviesRoute)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
