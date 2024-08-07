// Fungsi untuk menghitung total biaya pembelian tanah termasuk PPN
function hitungBiayaTanah(panjang, lebar, hargaPerMeter, ppn) {
    // Menghitung luas tanah
    let luas = panjang * lebar;
    
    // Menghitung harga tanah sebelum PPN
    let hargaTanah = luas * hargaPerMeter;
    
    // Menghitung nilai PPN
    let nilaiPPN = hargaTanah * (ppn / 100);
    
    // Menghitung total biaya termasuk PPN
    let totalBiaya = hargaTanah + nilaiPPN;
    
    return totalBiaya;
}

// Nilai-nilai yang diberikan
let panjangTanah = 20.5; // dalam meter
let lebarTanah = 30; // dalam meter
let hargaPerMeterPersegi = 1500000; // dalam rupiah
let ppn = 15; // dalam persen

// Memanggil fungsi dan mencetak hasilnya
let totalBiaya = hitungBiayaTanah(panjangTanah, lebarTanah, hargaPerMeterPersegi, ppn);
console.log("Total biaya yang harus dibayarkan Pak Arman adalah Rp " + totalBiaya.toLocaleString('id-ID') + ",-");