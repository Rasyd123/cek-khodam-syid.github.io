document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;

    if (nama) {
        const result = calculateKhodam(nama);
        document.getElementById('result').innerText = `Khodam untuk ${nama} adalah: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Silakan isi nama Anda.';
    }
});

function calculateKhodam(nama) {
    // Placeholder function to simulate khodam calculation
    // You can replace this with actual logic if available
    const khodams = ['Jin Pengawal', 'Roh Penjaga', 'Malaikat Pelindung', 'tuyul botak', 'sapu terbang', 'pocong', 'macan putih', 'macan kumbang', 'galon', 'mobil terbang', 'cacing', 'sendal emak', 'peler', 'batu bata', 'keramik', 'seblak', 'sepeda', 'angin', 'toples', 'es teh', 'jangkrik', 'ambatron', 'elang', 'ular', 'karpet terbang', 'jawir', 'helm', 'balmond', 'kucing', 'biawak', 'pisau', 'ultramen', 'gunting', 'obat nyamuk'];
    const index = nama.length % khodams.length;
    return khodams[index];
}
