import express from 'express';

const app = express()
const PORT = 3000;


app.get('/', (req, res) => {
  res.json({msg : "Hello World!"})
})

//CRUd functionality of movies


//R - Read movies
app.get('/movies', (req, res) => {

})



//C - for creating movies
app.post('/movies', (req, res) => {
  
})

//U - Update movies
app.put('/movies/:id', (req, res) => {
  
})  

//D - Delete movies
app.delete('/movies/:id', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
