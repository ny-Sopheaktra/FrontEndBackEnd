const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

//middleware
app.use(bodyParser.json());
app.use(cors());

const posts=require('./routes/api/tasklist'); 
app.use('/api/tasklist', posts);

//Handle Production
if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

}

const port=process.env.PORT||5000;

app.listen(port, ()=>console.log(`server started on port ${port}`));
