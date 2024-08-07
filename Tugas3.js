// Data tinggi badan dalam cm dan berat badan dalam kg
let tinggiBadan = 170; // cm
let beratBadan = 90; // kg

// Mengonversi tinggi badan dari cm ke meter
let tinggiBadanMeter = tinggiBadan / 100;

// Menghitung BMI
let bmi = beratBadan / (tinggiBadanMeter ** 2);

// Menentukan status berat badan berdasarkan nilai BMI
let statusBeratBadan;
if (bmi < 18.5) {
    statusBeratBadan = "Kekurangan berat badan";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    statusBeratBadan = "Normal (ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    statusBeratBadan = "Kelebihan berat badan";
} else {
    statusBeratBadan = "Kegemukan (Obesitas)";
}

console.log("Tinggi Badan: " + tinggiBadan + " cm");
console.log("Berat Badan: " + beratBadan + " kg");
console.log("BMI: " + bmi.toFixed(2));
console.log("Status Berat Badan: " + statusBeratBadan);
