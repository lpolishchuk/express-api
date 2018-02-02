const express = require('express');
const app = express();
let calculator = require('./calculator');

app.post('/calculator', function (req, res) {
    let result =[];
    let statement = req.body.expressions;
    let idd = req.body.id;
    let timeout = setTimeout (function () {
    	res.json({id : idd, passed : false});
    },10000);
    for (var i = 0; i < statement.length; i++) {
    	result.push(calculator(statement[i]));//calling function for each small expression
    };
    clearTimeout(timeout);
    res.json({id : idd, results: result });
}

app.listen(4000, function(err){
	if(err)
		console.log(err);
    else 
    console.log('now port 4000 listening for requests');
});


