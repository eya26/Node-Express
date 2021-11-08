const express = require('express');
const app = express();

students = [
    {id: 1, FN: 'Eya', LN:'Chafter',email:'eyachaftar@gmail.com', class:'CS1'},
    {id: 2, FN: 'Amal', LN:'Chafter',email:'amalchaftar@gmail.com', class:'CS1'},
    {id: 3, FN: 'Chaima', LN:'Rajah',email:'chaimarajah@gmail.com', class:'CS1'},
    {id: 4, FN: 'Amine', LN:'Karoui',email:'Aminekaroui@gmail.com', class:'CS1'}
]

app.get('/students',(req,res)=> {
    res.send(students);
});

app.post('/students', (req,res) => {
    const student = {
        id: students.length +1,
        FN : req.body.FN,
        LN : req.body.LN,
        email : req.body.email,
        class : req.body.class

    };

    students.push(student);
    res.send(student);
});

app.delete('/students/:id', (req,res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('The student with the given ID was not found.');
    const index =students.indexOf(student);
    students.splice(index,1);
    res.send(students);
});

app.put('/students/:id', (req,res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('The student with the given ID was not found.');
    student.class= req.body.class;
    res.send(student);
})



const port = process.env.PORT || 3000;
app.listen(port,() => console.log (`listening on  port ${port} `));