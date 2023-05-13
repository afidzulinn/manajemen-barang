// // Ambil elemen tabel
// var table = document.querySelector('table');

// document.addEventListener('DOMContentLoaded', function() {
//   // Ambil semua elemen <td> yang ada pada kolom expired
//   var expiredCells = document.querySelectorAll('tbody tr td:nth-child(3)');

//   // Loop melalui setiap elemen <td> untuk menentukan warna background
//   expiredCells.forEach(function(cell) {
//     // Ambil nilai dari elemen <td>
//     var expiredValue = parseFloat(cell.innerText);

//     // Tambahkan warna background merah jika nilai expired 0 sampai 1
//     if (expiredValue >= 0 && expiredValue < 1) {
//       cell.style.backgroundColor = 'red';
//     }
//     // Tambahkan warna background kuning jika nilai expired 1 sampai 2
//     else if (expiredValue >= 1 && expiredValue < 2) {
//       cell.style.backgroundColor = 'yellow';
//     }
//     // Tambahkan warna background hijau jika nilai expired lebih dari 2
//     else if (expiredValue >= 2) {
//       cell.style.backgroundColor = 'green';
//     }
//   });
// });

// // Ambil elemen tabel
// var table = document.querySelector('table');

// // Tambahkan event listener untuk event "DOMSubtreeModified"
// table.addEventListener('DOMSubtreeModified', function() {
//   // Ambil semua elemen <td> yang ada pada kolom expired
//   var expiredCells = document.querySelectorAll('tbody tr td:nth-child(3)');

//   // Loop melalui setiap elemen <td> untuk menentukan warna background
//   expiredCells.forEach(function(cell) {
//     // Ambil nilai dari elemen <td>
//     var expiredValue = parseFloat(cell.innerText);

//     // Tambahkan warna background merah jika nilai expired 0 sampai 1
//     if (expiredValue >= 0 && expiredValue < 1) {
//       cell.style.backgroundColor = 'red';
//     }
//     // Tambahkan warna background kuning jika nilai expired 1 sampai 2
//     else if (expiredValue >= 1 && expiredValue < 2) {
//       cell.style.backgroundColor = 'yellow';
//     }
//     // Tambahkan warna background hijau jika nilai expired lebih dari 2
//     else if (expiredValue >= 2) {
//       cell.style.backgroundColor = 'green';
//     }
//   });
// });



