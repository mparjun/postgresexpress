const express = require('express')
const studentroute = require('./src/student/routes')
const app = express();
const port =3000;


app.use(express.json())

app.get('/',(req,res)=>{
    res.send('helllo world')
})


app.use('/api/v1/students', studentroute)
app.listen(port, ()=>{
    console.log(`app is listening to ${port} port`)
})