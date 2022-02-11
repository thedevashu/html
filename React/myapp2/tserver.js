var express = require('express');
var app = express();





app.get('/', (request, response) => {
    return response.send('OK mara boke');
});

app.get('/data', (request, response) => {
    return response.send({ "name": "prachi", "gender": "female" });
});

//path parameter
app.post('/pop/:num1/:num2', (req, res) => {
    var n = req.params.num1;
    n = parseInt(n)
    var n1 = parseInt(req.params.num2)
    res.send(`${n} + ${req.params.num2}=` + `${n + n1}`)
})

// path parametres using query
app.put("/putpath", (req, res) => {
    var a = req.query.name;
    res.send("inside put" + a);
})


// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
