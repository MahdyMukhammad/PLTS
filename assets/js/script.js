// function hitungLuas() {
//   var panjang = parseFloat(document.getElementById("panjang").value);
//   var lebar = parseFloat(document.getElementById("lebar").value);

//   var luas = panjang * lebar;

//   document.getElementById("luas").value = luas.toFixed(2);
// }

// function hitungDaya() {
//   var irradiance = parseFloat(document.getElementById("irradiance").value);
//   var luas = parseFloat(document.getElementById("luas").value);

//   var daya = irradiance * luas;

//   alert("Daya Yang Diterima: " + daya.toFixed(2) + " watt");
// }

function hitungListrik() {
  var watt = parseFloat(document.getElementById("watt").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var jam = parseFloat(document.getElementById("jam").value);

  var listrik = watt * jumlah * jam;
  document.getElementById("hasil").value = listrik + " Wh";
}
