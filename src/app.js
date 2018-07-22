'use strict';

import nel from 'nel';
let compileRun = require('compile-run');
// import fs from 'fs-extra';
// import auth from '../../auth/middleware.js';
// import Classes from '../../models/classes.js';

let solution = {};
let onStdoutArray = [];
let onStderrArray = [];

const run = (obj) => {

  if (obj.language === 'javascript') {
    var session = new nel.Session();
    session.execute(obj.code, {
      onSuccess: (output) => {
        solution.return = output.mime['text/plain'];
      },
      onError: (output) => {
        solution.error = output.error;
      },
      onStdout: (output) => {
        onStdoutArray.push(output);
        solution.log = onStdoutArray;
      },
      onStderr: (output) => {
        onStderrArray.push(output);
        solution['console.error'] = onStderrArray;
      },
      afterRun: () => {
        onStdoutArray = [];
        let outputResult = {};
        if (solution.error) {
          outputResult.error = solution.error;
          res.send(outputResult);
        } else if (solution.log && !solution.return) {
          outputResult.log = solution.log;
          solution.log = null;
          let resultArray = outputResult.log;
          for (let val of resultArray) {
            resultArray[val] += resultArray[val];
          }
          res.send(resultArray);
        } else if (solution.log && solution.return) {
          outputResult.log = solution.log;
          outputResult.return = solution.return;
          solution.log = null;
          let resultArray = outputResult.log;
          for (let val of resultArray) {
            resultArray[val] += resultArray[val];
          }
          let finalResult = resultArray + '\n' + outputResult.return;
          res.send(finalResult);
        } else if (!solution.log && solution.return) {
          outputResult.return = solution.return;
          res.send(outputResult.return);

        } else if (obj.language === 'python') {
          let input = null;
          compileRun.runPython(obj.code, input, function (stdout, stderr, err) {
            if (!stderr) {
              // fs.remove(dirPath, err => {
              //   if (err) return console.error(err);
              //   console.log('Successfully removed the code dir');
              // });
              res.send(stdout);
            } else {
              console.log(err);
              // fs.remove(dirPath, err => {
              //   if (err) return console.error(err);
              //   console.log('Successfully removed the code dir');
              // });
              res.send(stderr);
            }
          });
        } else if (obj.language === 'java') {
          let input = null;
          compileRun.runJava(obj.code, input, function (stdout, stderr, err) {
            if (!stderr) {
              // fs.remove(dirPath, err => {
              //   if (err) return console.error(err);
              //   console.log('Successfully removed the code dir');
              // });
              res.send(stdout);
            } else {
              // fs.remove(dirPath, err => {
              //   if (err) return console.error(err);
              //   console.log('Successfully removed the code dir');
              // });
              console.log(err);
              res.send(stderr);
            }
          });
        }
      },
    });
  }
};
export default {run};