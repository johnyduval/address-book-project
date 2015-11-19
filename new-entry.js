/*module.exports = {
    display: newEntry
}; */

var request = require('request');
var prompt = require('prompt');
var inquirer = require('inquirer');
var Table = require('cli-table');

var questions = [{
        type: 'input',
        name: 'First Name',
        message: 'First Name'
    }, {
        type: 'input',
        name: 'Last Name',
        message: 'Last Name'
    }, {
        type: 'input',
        name: 'Birthday',
        message: 'Birthday (optional)'
    }, {
        type: 'checkbox',
        message: 'Choose the type(s) of address(es) you would like to add',
        name: 'Addresses',
        choices: ['home', 'work', 'other']
    }, {
        message: 'Enter your home address',
        name: 'Home address',
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
        name: 'Work address',
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
        name: 'Other address',
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
        name: 'Emails',
        choices: ['home', 'work', 'other'],
    }, {
        message: 'Enter your home email',
        name: 'Home email',
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
        name: "Work email",
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
        name: "Other email",
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
        name: "Number",
        choices: ["home", "work", "other"],
    }, {
        message: "Enter your home phone number",
        name: "Home phone number",
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
        name: "Work phone number",
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
        name: "Other phone number",
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
        name: 'Home City',
        message: 'Home City'
    }, {
        type: 'input',
        name: 'Home Province',
        message: 'Home Province'
    }, {
        type: 'input',
        name: 'Home Postal Code',
        message: 'Home Postal Code'
    }, {
        type: 'input',
        name: 'Home Country',
        message: 'Home Country'
    },

];

//function newEntry() {

    inquirer.prompt(questions, function(response) {
        console.log(response);
        return response;
    });
//}