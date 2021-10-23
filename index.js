const express = require('express');
const cors = require('cors');
const app= express()
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('I know you yes you know me')
})

const users =  [ {
    id:0,
    name:'mithun',
    email:"jkflaksjd.@gfla.com",
    age:"I don't know"
},
    {
    id:1,
    name:'kancy',
    email:"jkflaksjd.@gfla.com",
    age:"I don't know"
},
    {
    id:2,
    name:'kriti sharma',
    email:"jkflaksjd.@gfla.com",
    age:"I don't know"
},
    {
    id:3,
    name:'illeana d cruz',
    email:"jkflaksjd.@gfla.com",
    age:"I don't know"
},];
app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
    console.log('hitting post', req.body);
    
});

app.get('/users',(req,res)=>{
    const search = req.query.search;
    if(search){
        const searhResult = users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searhResult)

    } else{
        res.send(users)
    }
})
app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id];

    res.send(user)
    
})

app.listen(port, ()=>{
    console.log('listening from', port);
})