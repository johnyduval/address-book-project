module.exports = {
    display: editEntry
};

var inquirer = require('inquirer');
var entryContent = require('./new-entry').display;
var entryContent = require('./search').display;

/*var phoneBookContent = { 'first_name': 'sdfgh',
  'last_name': 'sdfg',
  Birthday: 'sdfg',
  Addresses: [ 'home' ],
  'home_address': 'dfg',
  Emails: [ 'home' ],
  'home_email': 'fg',
  Number: [ 'home' ],
  'home_number': 'sdfg',
  'home_city': 'dfg',
  'home_province': 'dfgh',
  'home_postal': 'dfg',
  'home_country': 'dfg' }; */


var questions = [{
        type: 'input',
        name: 'first_Name',
        message: 'First Name',
        default: entryContent().first_name
    }, {
        type: 'input',
        name: 'last_name',
        message: 'Last Name',
        default: entryContent.last_name
    }, {
        type: 'input',
        name: 'birthday',
        message: 'Birthday (optional)',
        default: entryContent.birthday
    }, {
        message: 'Home address',
        name: 'home_address',
        type: 'input',
        when: function(answers) {
            if (entryContent.Addresses.indexOf('home') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.home_address
    }, {
        message: 'Enter your work address',
        name: 'work_address',
        type: 'input',
        when: function(answers) {
            if (entryContent.Addresses.indexOf('work') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.work_address
    }, {
        message: 'Enter your other address',
        name: 'other_address',
        type: 'input',
        when: function(answers) {
            if (entryContent.Addresses.indexOf('other') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.other_address
    }, {
        message: 'Enter your home email',
        name: 'home_email',
        type: 'input',
        when: function(answers) {
            if (entryContent.Emails.indexOf('home') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.home_email
    }, {
        message: 'Enter your work email',
        name: "work_email",
        type: "input",
        when: function(answers) {
            if (entryContent.Emails.indexOf('work') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.work_email
    }, {
        message: "Enter your other email",
        name: "other_email",
        type: "input",
        when: function(answers) {
            if (entryContent.Emails.indexOf('other') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.other_email
    }, {
        message: "Enter your home phone number",
        name: "home_number",
        type: "input",
        when: function(answers) {
            if (entryContent.Number.indexOf('home') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.home_number
    }, {
        message: "Enter your work phone number",
        name: "work_number",
        type: "input",
        when: function(answers) {
            if (entryContent.Number.indexOf('work') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.work_number
    }, {
        message: "Enter your other phone number",
        name: "other_number",
        type: "input",
        when: function(answers) {
            if (entryContent.Number.indexOf('other') === -1) {
                return false;
            }
            else {
                return true;
            }
        },
        default: entryContent.other_number
    }, {
        type: 'input',
        name: 'home_city',
        message: 'Home City',
        default: entryContent.home_city
    }, {
        type: 'input',
        name: 'home_province',
        message: 'Home Province',
        default: entryContent.home_province
    }, {
        type: 'input',
        name: 'home_postal',
        message: 'Home Postal Code',
        default: entryContent.home_postal
    }, {
        type: 'input',
        name: 'home_country',
        message: 'Home Country',
        default: entryContent.home_country
    },

];

function editEntry() {

    inquirer.prompt(questions, function(response) {
        return response;
    });
};