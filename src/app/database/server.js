const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){    
   res.send('Hello from server');
})

// app.route('/').get((req, res) => {
//     const Name = req.params['name']
//     const email = req.params['email']
//     res.send({ name: Name })
//     res.send({ email: email })
//   })

app.post('/',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data received"});
})

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});