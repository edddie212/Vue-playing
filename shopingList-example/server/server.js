
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => {
 const products =  [
    {
        id: 1,
        description: 'Green elegent Shows',
        longDescription: 'Black Alegent Shows made of the best quality you can get',
        image: 'blackShoes.jpg'
        },
       {
        id: 2,
        description: 'Funny T-shirts',
        longDescription: 'Funny T-shirts made of the best quality you can get',
        image: 'funnyTshirt.jpg'
       },
      {
       id: 3,
      description: 'Cool Golden Chain',
      longDescription: 'Cool Golden Chain made of the best quality you can get',
      image: 'gChain.jpg'
    },
    {
      id: 4,
      description: 'Black Alegent Shows',
      longDescription: 'Black Alegent Shows made of the best quality you can get',
      image: 'blackShoes.jpg'
      },
     {
      id: 5,
      description: 'Funny T-shirts',
      longDescription: 'Funny T-shirts made of the best quality you can get',
      image: 'funnyTshirt.jpg'
     },
    {
     id: 6,
    description: 'Cool Golden Chain',
    longDescription: 'Cool Golden young Chain made of the best quality you can get',
    image: 'gChain.jpg'
  },
 ];
 res.send(products) 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
