// Kalkulasi
function penjumlahan() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const hasil = angka1 + angka2;
  document.getElementById("hasil").textContent = `Hasil: ${hasil.toFixed(2)}`;
}

function pengurangan() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const hasil = angka1 - angka2;
  document.getElementById("hasil").textContent = `Hasil: ${hasil.toFixed(2)}`;
}

function perkalian() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const hasil = angka1 * angka2;
  document.getElementById("hasil").textContent = `Hasil: ${hasil.toFixed(2)}`;
}

function pembagian() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  if (angka2 === 0) {
    document.getElementById("hasil").textContent =
      "Error: Pembagian dengan nol tidak diperbolehkan!";
  } else {
    const hasil = angka1 / angka2;
    document.getElementById("hasil").textContent = `Hasil: ${hasil.toFixed(2)}`;
  }
}

// Fungsi Clear untuk mengosongkan inputan
function clearInput() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").textContent = "Hasil:";
}
