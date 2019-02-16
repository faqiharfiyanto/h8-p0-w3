//var arrayyy = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
var result = ''
// var splitTanggal = arrayyy[3].split('/')
function dataHandling2(input) {
    input.splice(1, 1, 'Roman Alamsyah Elsharawy')
    input.splice(2, 1, 'Provinsi Bandar Lampung')
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    return input  
}
result = dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])
var tanggalanBefore = result[3].split('/')
var bulanBefore = tanggalanBefore[1]
var bulanAfter = ''
switch(bulanBefore) {
    case '01': { bulanAfter = 'Januari'; break; }
    case '02': { bulanAfter = 'Februari'; break; }
    case '03': { bulanAfter = 'Maret'; break; }
    case '04': { bulanAfter = 'April'; break; }
    case '05': { bulanAfter = 'Mei'; break; }
    case '06': { bulanAfter = 'Juni'; break; }
    case '07': { bulanAfter = 'Juli'; break; }
    case '08': { bulanAfter = 'Agustus'; break; }
    case '09': { bulanAfter = 'September'; break; }
    case '10': { bulanAfter = 'Oktober'; break; }
    case '11': { bulanAfter = 'November'; break; }
    case '12': { bulanAfter = 'Desember'; }
}
console.log(result) //oke
console.log(bulanAfter) //oke
// console.log(tanggalanBefore) // cuma patokan
var tanggalanAngka = [Number(tanggalanBefore[0]), Number(tanggalanBefore[1]), Number(tanggalanBefore[2])]
// console.log(tanggalanAngka) // cumapatokan
tanggalanAngka.sort(function(value1, value2) { return value1 < value2 })
// console.log(tanggalanAngka) //cuma patokan
var tanggalanString = [tanggalanAngka[0].toString(), tanggalanAngka[1].toString(), ('0' + tanggalanAngka[2].toString()).slice(-2)]
console.log(tanggalanString) // 50%
var tanggalanStrip = tanggalanBefore.join('-')
console.log(tanggalanStrip) // oke

var namaOrang = result.slice(1, 2).toString()
console.log(namaOrang) // oke