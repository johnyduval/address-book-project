module.exports = {
    phonebook: getPhonebookContent
};

var importEntry = require('./new-entry.js').display;

var phonebookContent = [];

function getPhonebookContent (){
    phonebookContent.push(importEntry());
}