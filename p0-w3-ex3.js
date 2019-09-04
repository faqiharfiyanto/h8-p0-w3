var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(a) {
    for(var i=0; i<a.length; i++) {
        var result="Nomor ID: "+a[i][0]+"\n"+"Nama Lengkap: "+a[i][1]+"\n"+"TTL: "+a[i][2]+", "+a[i][3]+"\n"+"Hobi: "+a[i][4]+"\n"
        console.log(result)
    }
}
dataHandling(input)