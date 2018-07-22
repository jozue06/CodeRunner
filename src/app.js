'use strict';

const nel = require('nel');
// const compileRun = require('compile-run');
// import fs from 'fs-extra';
// import auth from '../../auth/middleware.js';
// import Classes from '../../models/classes.js';



const run = (obj) => {
  let solution = {};
  let onStdoutArray = [];
  let onStderrArray = [];
  console.log('in runner -->  ', obj);
  let code = obj.code;
  var session = new nel.Session();
  session.execute(code, {
      
    onSuccess: (output) => {
      console.log('in session -->');
      solution.return = output.mime['text/plain'];
    },
      
    onError: (output) => {
      console.log('in session --> ');
      solution.error = output.error;
    },
    onStdout: (output) => {
      console.log('in session --> ');
      onStdoutArray.push(output);
      solution.log = onStdoutArray;
    },
    onStderr: (output) => {
      console.log('in session --> ');
      onStderrArray.push(output);
      solution['console.error'] = onStderrArray;
    },
    afterRun: () => {
      onStdoutArray = [];
      let outputResult = {};
      if (solution.error) {
        outputResult.error = solution.error;
      } if (solution.log && !solution.return) {
        outputResult.log = solution.log;
        solution.log = null;
        let resultArray = outputResult.log;
        for (let val of resultArray) {
          resultArray[val] += resultArray[val];
        }
      } if (solution.log && solution.return) {
        outputResult.log = solution.log;
        outputResult.return = solution.return;
        solution.log = null;
        let resultArray = outputResult.log;
        for (let val of resultArray) {
          resultArray[val] += resultArray[val];

        }
        let finalResult = resultArray + '\n' + outputResult.return;
        console.log('final results -->  ', finalResult);

      } if (!solution.log && solution.return) {
        outputResult.return = solution.return;
      }console.log('in session --> solution2 ', outputResult);
    },
  });

};