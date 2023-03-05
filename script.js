/*contoh pop up
alert("Selamat Datang");
var lagi = true;

while (lagi) {
  var nama = prompt("Masukkan Nama: ");
  alert("Halo  " + nama);
  lagi = confirm("Coba lagi?");
}

alert("Terima Kasih");*/

/*let stringLogin = prompt("Masukkan jumlah login anda");
let intLogin = parseInt(stringLogin);
while (intLogin <= 6) {
  console.log("Anda sudah login sebanyak " + intLogin);
  intLogin++;
}*/

/*latihan angkot
var jmlAngkot = parseInt(prompt("Masukkan Jumlah angkot yang anda punya : "));
var angkotBeroperasi = parseInt(prompt("Masukkan Jumlah angkot yang sedang beroperasi : "));
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " berjalan denggan baik");
  noAngkot++;
}
for (noAngkot > angkotBeroperasi; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}*/

/*percabangan dengan switch
var makanan = prompt("Masukkan nama makanan / minuman : \n (cth : nasi, daging, susu, hamburger, softdrink");

switch (makanan) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT!");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan / minuman TIDAK SEHAT");
    break;
  default:
    alert("anda memasukkan nama makanan / minuman yang tidak terdaftar");
    break;
}*/

/* bintang berurut dari kecil ke besar (increment)
var s = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);*/

/*bintang berururt dari besar ke kecil  (increment)
var s = "";
var a = parseInt(prompt("Masukkan jumlah baris bintang yang diinginkan :"));
for (var i = 0; i <= a; i++) {
  for (var j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);*/
//Suit batu gunting kertas
var tanya = true;
while (tanya) {
  //Inputan User
  var user = prompt("Masukkan pilihan anda [gunting, batu, kertas] :");

  //Menangkap pilihan komputer
  //membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "batu";
  } else {
    comp = "kertas";
  }
  var hasil = "";

  //Menentukan rules
  if (user == comp) {
    hasil = "SERI";
  } else if (user == "gunting") {
    hasil = comp == "batu" ? "KALAH" : "MENANG";
  } else if (user == "batu") {
    hasil = comp == "gunting" ? "MENANG" : "KALAH";
  } else if (user == "kertas") {
    hasil = comp == "batu" ? "MENANG" : "KALAH";
  } else {
    hasil = "Pilihan tidak ada";
  }

  //Menampilkan hasil
  alert("Kamu memilih " + user + " dan komputer memilih " + comp + "\nMaka Hasilnya Kamu " + hasil);
  tanya = confirm("Apakah anda ingin melanjutkan?");
}
alert("Terima kasih sudah bermain");
