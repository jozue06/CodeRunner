'use strict';

// require('babel-register');
// import superagent from 'superagent';

// let day;
// let classCode;
// let apiUrl;
// let dayName;

document.getElementById('nav-home').addEventListener('click', () => {
  // if (!window.sessionStorage.jwt) return alert('please sign up / log in first');
  // clearDiv();
  $('#home').show();
  $('#new-class').show();
  // superagent.get('http://localhost:3000/api/v1/user');
  // // superagent.get('http://api.commando.ccs.net/api/v1/user')
  // .set({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${window.sessionStorage.jwt}` })
  // .then(data => {
  //   console.log(data.body.courses);
  //   data.body.courses.forEach(course => {
  //     $('#courses').append(`<br /><a href=# id="${course.apiLink}" class="course-class">${course.classCode}</a><br />`);
  //   });
  // });
});


// superagent.get(`http://localhost:3000/api/v1/code/${day}?classCode=` + classCode)
//   .set({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${window.sessionStorage.jwt}` })
//   .then(data => {
//     $('#files').append(`<ul id="files"></ul>`);
//     console.log(data.body);
//     let files = data.body;
//     for (let i = 0; i < files.length; i++) {
//       $('#files ul').append(`<br /><li id="${files[i].link}">${files[i].file}</li>`);
//     }
//     $('#files ul').append(`<br /><li id="new-file">Create A New File</li>`);
//   });
// });

// function clearDiv() {
//   $('#run').hide();
//   $('#resultWindow').hide();
//   $('#days').hide();
//   let obj = document.getElementsByClassName('clearDiv');
//   Object.values(obj).forEach(div => {
//     div.innerHTML = '';
//   });
// }


// const port = process.env.PORT || 3005;
// require('./server.js').start(port);