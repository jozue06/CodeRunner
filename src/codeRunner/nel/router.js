import express from 'express';
const router = express.Router();
import nel from 'nel';
// import superagent from 'superagent';
let compileRun = require  ('compile-run');
// require('../../../nock/code.js');
// import fs from 'fs-extra';
// import auth from '../../auth/middleware.js';
// import Classes from '../../models/classes.js';

/*
Declare nel package solution object and stdOut and stdErr arrays
*/
let solution = {};
let onStdoutArray = [];
let onStderrArray = [];
var fileName;
/*
  change following repo in future depending on github repo
 */
let fileExtension;
let dirPath = `${__dirname}/../../../code`;
// router.get('/api/v1/code/:id', auth, (req, res) => {
//   if (req.query.classCode) {
//     Classes.find({
//       classCode: req.query.classCode,
//     })
//       .then(results => {
//         let dayId = req.params.id;
//         return superagent.get(`${results[0].apiLink}`)
//           .set({
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${req.cookies.jwt}`,
//           })
//           .then(arr => {
//             // console.log(arr.body[dayId-1].url);
//             let day = arr.body[dayId - 1].url;
//             return superagent.get(day)
//               .set({
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${req.cookies.jwt}`,
//               })
//               .then(data => {
//                 let filtered = data.body.filter((e) => e.name.split('.')[1] === 'js');
//                 //console.log('filtered --> ', filtered);
//                 let file = filtered.map((e) => {
//                   return {
//                     link: e.download_url,
//                     file: e.name,
//                     sha: e.sha,
//                   };
//                 });
//                 //console.log('file -->', file);
//                 res.send(file);
//                 res.end();
//               });
//           });
//       });
//   }
// });
/**
 * 
 * POST or PUT request from front end to execute the given code and save data on github class repo
 */
router.post('/api/v1/code', auth, (req, res) => {
  let code = req.body.code;

  if (req.body.language === 'javascript') {
    fileExtension = '.js';
  }
  else if (req.body.language === 'python') {
    fileExtension = '.py';
  }
  else if (req.body.language === 'java') {
    fileExtension = '.java';
  }

  fileName = req.body.fileName ||
    new Date().toString().replace(/\s+/g, '').slice(3, 18) + Math.random().toString(36).substr(2, 10) + `${fileExtension}`;

  //get day name information from original electron request after login and append day to github post request
  // let day = req.body.day;
  /**
   * Following code is written if incase the code file is heavy and needs to be copied to local folder first and then stream to github. Can be used in future or scrap if no future scope is seen
   * 
   *let file = `${__dirname}/../tmp/${fileName}.js`;
    let text = code;
    fs.writeFile( file, text, (err) => {
      if(err) { return(err); }
      console.log('file Saved to temp!');
      */
  /***************/
     

/*
   * base 64 encoding of code recieved from front end
   */
// let encodedBuffer = new Buffer(code);
// let base64Encoded = encodedBuffer.toString('base64');

/**
   * Build github file object
   * Change committer details
   */
// let githubObject = {
//   'message': 'updated from code commando code runner',
//   'committer': {
//     'name': 'MR',
//     'email': 'madhu.rebbana@gmail.com',
//   },
//   'content': base64Encoded,
// };
// if (req.body.sha) {
//   githubObject.sha = req.body.sha;
// }
/**
   * Make a PUT request to github now. 'Github API considers POST and PUT both as PUT request.
   * 'POST' a new file to github requires just the SHA of Repo that you will be posting to
   * 'PUT' request is to update existing file and request body should have SHA specific to the file that you are trying to update
   */
// if (req.query.classCode) {
//   Classes.find({
//     classCode: req.query.classCode,
//   }).then(results => {
//     superagent.put(`${results[0].apiLink}${day}/${fileName}`)
//       .set({
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${req.cookies.jwt}`,
//       })
//       .send(githubObject)
//       .then(response => console.log(response.text))
//       .catch(err => console.log('error', err));
//   });
// }
/*
    NEL package work starts here. Compile & execute the code and return response to client
  */
 
});
export default router;