const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.options('http://localhost:8080', cors());

app.get('/users', (req, res) => {
  
  const {offset = 0 , limit = 10} = req.query || {};

  fs.readFile(__dirname + '/users.json', (err, data) => {
      const users = JSON.parse(data);
      const items = users.splice(+offset, +limit);
      res.send({items, total:users.length});
  });

});

app.get('/users/:id', (req, res) => {
     
  fs.readFile(__dirname + '/users.json', (err, data) => {
    const users = JSON.parse(data);    
    const id = req.params.id;
    const user = users.filter(item => item.id === id);
    res.send(user);
  });

});


app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});