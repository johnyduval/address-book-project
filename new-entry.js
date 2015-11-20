module.exports = {
    display: newEntry
}; 

var inquirer = require('inquirer');

var questions = [{
        type: 'input',
        name: 'first_name',
        message: 'First Name'
    }, {
        type: 'input',
        name: 'last_name',
        message: 'Last Name'
    }, {
        type: 'input',
        name: 'birthday',
        message: 'Birthday (optional)'
    }, {
        type: 'checkbox',
        message: 'Choose the type(s) of address(es) you would like to add',
        name: 'addresses',
        choices: ['home', 'work', 'other']
    }, {
        message: 'Enter your home address',
        name: 'home_address',
        type: 'input',
        when: function(answers) {
            if (answers.Addresses.indexOf('home') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        message: 'Enter your work address',
        name: 'work_address',
        type: 'input',
        when: function(answers) {
            if (answers.Addresses.indexOf('work') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        message: 'Enter your other address',
        name: 'other_address',
        type: 'input',
        when: function(answers) {
            if (answers.Addresses.indexOf('other') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        type: 'checkbox',
        message: 'Choose the type(s) of email(s) you would like to add',
        name: 'emails',
        choices: ['home', 'work', 'other'],
    }, {
        message: 'Enter your home email',
        name: 'home_email',
        type: 'input',
        when: function(answers) {
            if (answers.Emails.indexOf('home') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        message: 'Enter your work email',
        name: "work_email",
        type: "input",
        when: function(answers) {
            if (answers.Emails.indexOf('work') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        message: "Enter your other email",
        name: "other_email",
        type: "input",
        when: function(answers) {
            if (answers.Emails.indexOf('other') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        type: "checkbox",
        message: "Choose the type(s) of phone number(s) you would like to add",
        name: "number",
        choices: ["home", "work", "other"],
    }, {
        message: "Enter your home phone number",
        name: "home_number",
        type: "input",
        when: function(answers) {
            if (answers.Number.indexOf('home') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        message: "Enter your work phone number",
        name: "work_number",
        type: "input",
        when: function(answers) {
            if (answers.Number.indexOf('work') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        message: "Enter your other phone number",
        name: "other_number",
        type: "input",
        when: function(answers) {
            if (answers.Number.indexOf('other') === -1) {
                return false;
            }
            else {
                return true;
            }
        }
    }, {
        type: 'input',
        name: 'home_city',
        message: 'Home City'
    }, {
        type: 'input',
        name: 'home_province',
        message: 'Home Province'
    }, {
        type: 'input',
        name: 'home_postal',
        message: 'Home Postal Code'
    }, {
        type: 'input',
        name: 'home_country',
        message: 'Home Country'
    },

];

function newEntry() {

    inquirer.prompt(questions, function(response) {
        console.log(response);
        return response;
    });
}