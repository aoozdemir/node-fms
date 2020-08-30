
// $(document).ready(function () {
//   $('.delete-form').on("submit", function (e) {
//     e.preventDefault();
//     let path = $('#path').val();

//     $.ajax({
//       type: 'DELETE',
//       url: '?path=' + path,
//       success: (data) => {
//         console.log(data);
//       },
//       error: (err) => {
//         console.log(error);
//       }
//     });
//   });
// });

// const axios = require('axios');
// let argv = require('../utils/argv');

// const deleteForm = document.getElementsByClassName('.delete-form');

// console.log(deleteForm)

// function deletePath() {
//   let path = document.getElementById('path').val();

//   axios.delete(`http://localhost:${+argv.port}/api`, {
//     params: {
//       path: path
//     }
//   })
//     .then(function (response) {
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// }

// deleteForm.addEventListener('submit', deletePath)
