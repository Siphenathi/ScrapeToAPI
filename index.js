const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const picknpay = require('./routes/api/picknpay');
const game = require('./routes/api/game');
const checkers = require('./routes/api/checkers');
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{

    res.send('Scrape To API Running...')

});

app.use('/api/picknpay',picknpay);
app.use('/api/game',game);
app.use('/api/checkers',checkers);

app.listen(port,()=>{

    console.log(`Server running on port ${port}`);

});

