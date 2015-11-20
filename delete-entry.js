

var inquirer = require('inquirer');



var questions = [{
    type: 'confirm',
    name: 'confirmation',
    message: 'Are you sure?'
}];


function deleteEntry() {
    
    inquirer.prompt(questions, function(response) {
        if (response.confirmation === true){
        console.log('yes');
        } else {
        console.log('no');
        }
});
}

deleteEntry();