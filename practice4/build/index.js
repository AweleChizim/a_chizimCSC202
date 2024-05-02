"use strict";
console.log('testing\n1...\n2...');
var readlineSync = require('readline-sync');
var answer;
do {
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
    console.log('You asked me to ' + answer);
} while (answer != 'exit');
