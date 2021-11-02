// soal ke-1
const luasLingkaran = (jariJari) => {
    return Math.ceil(Math.PI * (Math.pow(jariJari, 2)))
}

const kelilingLingkaran = (jariJari) => {
    return Math.ceil(2 * Math.PI * jariJari)
}

console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))


// soal ke-2
const introduce = (...intro) => {
    let [nama, umur, gender, pekerjaan, ...lain] = intro
    let jenis = gender === 'Perempuan' ? "Bu" : "Pak"
    return `${jenis} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun ${lain}`
}

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan)

//soal ke-3
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: () => {
        console.log(`${firstName} ${lastName}`)
      }
    }
  }
    
  // kode di bawah ini jangan diubah atau dihapus sama sekali
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)
  newFunction("William", "Imoh").fullName()

// soal ke-4
let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}

let {brand: phoneBrand, name: phoneName, year, colors} = phone
let [colorBronze, , colorBlack] = colors
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze)

// soal ke-5
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}

buku.warnaSampul.push(...warna)
buku = {
  ...buku, ...dataBukuTambahan
}

console.log(buku)