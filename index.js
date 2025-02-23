const express = require('express')
var cors = require('cors')
  const  players = require('./player.json');
const app = express()
const port = 3000

app.use(cors())

app.get('/phones',(req,res)=>{
    res.send(players)
})


app.get('/phones/:id' , (req,res)=>{
    const id= req.params.id
    console.log(`i need data for id ,' ${id} `);
    const player = players.find(player => player.playerId==id)
    res.send(player)
    
})







app.get('/', (req, res) => {
  res.send('Hello World! again by again')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})