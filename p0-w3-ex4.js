var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(a) {
    a.splice(1,1,"Roman Alamsyah Elsharawy",)
    a.splice(2,1,"Provinsi Bandar Lampung")
    a.splice(4,1,"Pria","SMA Internasional Metro")
    console.log(a)
    var tanggalan=a[3].split("/")
    switch(tanggalan[1]) {
        case '01': { console.log("Januari"); break; }
        case '02': { console.log("Februari"); break; }
        case '03': { console.log("Maret"); break; }
        case '04': { console.log("April"); break; }
        case '05': { console.log("Mei"); break; }
        case '06': { console.log("Juni"); break; }
        case '07': { console.log("Juli"); break; }
        case '08': { console.log("Agustus"); break; }
        case '09': { console.log("September"); break; }
        case '10': { console.log("Oktober"); break; }
        case '11': { console.log("November"); break; }
        case '12': { console.log("Desember"); }
    }
    // console.log(tanggalan.sort(function(aa,bb) {return aa<bb}))
    var ngurutTgl = []
    for (var i=0; i<tanggalan.length; i++) {
        ngurutTgl.push(Number(tanggalan[i]))
    }
    ngurutTgl.sort()
    var hasil = []
    for (var i=0; i<tanggalan.length; i++) {
        hasil.push(ngurutTgl[i].toString())
    }
    
    console.log(hasil)
    console.log(tanggalan.join('-'))
    var nama=a[1].slice(0,15)
    console.log(nama)
}

dataHandling2(input);

/*
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */