const app = require('./app');
const db = require('./config/db')

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World!!!!!1")
})



app.listen(port,()=>{
    console.log('Server Listening on port http://localhost:${port}');
})