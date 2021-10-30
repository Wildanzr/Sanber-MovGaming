// soal ke-1
function luasPersegiPanjang(p, l) {
    return p * l
}
function kelilingPersegiPanjang(p, l) {
    return (p + l) * 2
}
function volumeBalok(p, l, t) {
    return p * l * t
}

var panjang= 12
var lebar= 4
var tinggi = 8
 
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)


// soal ke-2
function introduce(nama, umur, alamat, hobi) {
    var temp = "\"Nama saya " + nama + ", umur saya " +umur + " tahun, alamat saya di " +alamat + ", dan saya punya hobby yaitu " +hobi + "!\""
    return temp
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)


// soal ke-3

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

function makeObject(array) {
    var temp = {
        nama: array[0],
        jenisKelamin: array[1],
        hobi: array[2],
        tahunLahir: array[3]
    }
    return temp
}

var johnDoe = makeObject(arrayDaftarPeserta)
console.log(johnDoe)

// soal ke-4
var buahBuahan = [
    {nama: "Nanas", warna: "Kuning", "ada bijinya": false, harga:9000}, 
    {nama: "Jeruk", warna: "Oranye", "ada bijinya": true, harga:8000}, 
    {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": true, harga:10000},
    {nama: "Pisang", warna: "Kuning", "ada bijinya": false, harga:5000},
]

var buahTakBerbiji = buahBuahan.filter(function(takBerbiji) {
    return takBerbiji["ada bijinya"] == false
})

console.log(buahTakBerbiji)

// soal ke-5

function tambahDataFilm(title, duration, genre, year) {
    dataFilm.push({
        nama: title,
        durasi: duration,
        genre: genre,
        tahun: year
    })
}
var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)