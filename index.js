
const app     = express();  // app is an object with a bunch of methods
// to build a server


app.get('/', (request, response) => {
  response.send('Hi Im the information the server has sent to the client')
})

app.get('/tacos', (req, res) => {
  res.json({
    "taco": 52,
    "type": "carne asada"
  })
})

app.get('/burritos', (req, res) => {
  console.log(req)
  res.send('I want a burrito, Im so Loco for burritos')
})

app.get('/charizo', (req, res) => {
  res.send('im thirsty')
})

app.listen(3000, () => {
  console.log('I am listening on port 3000')
})

