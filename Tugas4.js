// Suku pertama (a) dan rasio (r)
let a = 4;
let r = 3;

// Jumlah suku pertama yang akan dihitung
let n = 10;

// Variabel untuk menyimpan jumlah deret
let jumlah = 0;

// Menghitung jumlah 10 suku pertama menggunakan perulangan
for (let i = 0; i < n; i++) {
    jumlah += a * Math.pow(r, i);
}

console.log("Jumlah 10 suku pertama dari deret geometri adalah: " + jumlah);
