/* module.exports = {
    display: mainMenu
}; */



var inquirer = require('inquirer');

function newEntry (){
    console.log("newEntry ran!");
}

function search (){
    console.log("search ran!");
}

function editEntry (){
    console.log("editEntry ran!");
}

function deleteEntry (){
    console.log("deleteEntry ran!");
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
            newEntry();
            
            var question = [{
                type: 'list',
                name: 'followUp',
                message: 'What do you want to do?',
                choices: ['Edit the current entry', 'Delete the current entry', 'Go back to main menu']
            }];
            
            
            inquirer.prompt(question, function(answer){
                if(answer.followUp.indexOf('Edit the current entry') > -1){
                    editEntry();
                    mainMenu();
                } else if (answer.followUp.indexOf('Delete the current entry') > -1){
                    deleteEntry();
                    mainMenu();
                } else if (answer.followUp.indexOf('Go back to main menu') > -1){
                    mainMenu();
                }
            });
            
        }
        else if (response.start.indexOf('Search for existing address book entries') > -1){
            search();
            
            var quest = [{
                type: 'list',
                name: 'follow',
                message: 'What do you want to do?',
                choices: ['Edit the current entry', 'Delete the current entry', 'Go back to main menu']
            }];
            
            
            inquirer.prompt(quest, function(ans){
                if(ans.follow.indexOf('Edit the current entry') > -1){
                    editEntry();
                    mainMenu();
                } else if (ans.follow.indexOf('Delete the current entry') > -1){
                    deleteEntry();
                    mainMenu();
                } else if (ans.follow.indexOf('Go back to main menu') > -1){
                    mainMenu();
                }
            });
        }
        else if (response.start.indexOf('Exit the program') > -1){
        }
        
    });
}



mainMenu();
