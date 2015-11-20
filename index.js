/* module.exports = {
    display: mainMenu
}; */

var inquirer = require('inquirer');

function newEntry (){
    console.log("newEntry ran!")
}

function search (){
    console.log("search ran!")
}

var prompts = [{
    type: 'list',
    name: 'start',
    choices: ['Create a new address book entry', 'Search for existing address book entries', 'Exit the program'],
    message: 'What do you want to do?'
}];

function mainMenu() {

    inquirer.prompt(prompts, function(response) {
        
        if (response.start.indexOf('Create a new address book entry') > -1) {
        newEntry()
        }
        else if (response.start.indexOf('Search for existing address book entries') > -1){
        search()
        }
        else if (response.start.indexOf('Exit the program') > -1){
        mainMenu()
        }
        
    });
};

mainMenu();
