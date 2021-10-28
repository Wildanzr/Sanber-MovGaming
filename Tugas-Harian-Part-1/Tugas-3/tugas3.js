//soal ke-1
{
    var kataPertama = "saya"
    var kataKedua = "senang"
    var kataKetiga = "belajar"
    var kataKeempat = "javascript"

    kataKedua = kataKedua.substring(0,1).toUpperCase().concat(kataKedua.substring(1))
    kataKetiga = kataKetiga.substring(0, (kataKetiga.length-1)).concat(
        kataKetiga.substring(kataKetiga.length-1).toUpperCase())

    console.log(kataPertama.concat(" ", kataKedua, " ", kataKetiga, " ", kataKeempat.toUpperCase()))
}

//soal ke-2
{
    var panjangPersegiPanjang = "8"
    var lebarPersegiPanjang = "5"
    var alasSegitiga = "6"
    var tinggiSegitiga = "7"

    var kelilingPersegiPanjang = (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang)) * 2
    var luasSegitiga = 0.5 * parseInt(alasSegitiga) * parseInt(tinggiSegitiga)

    console.log(`Keliling Persegi Panjang = ${kelilingPersegiPanjang}`)
    console.log(`Luas Segitiga = ${luasSegitiga}`)
}
//soal ke-3
{
    var sentences = "wah javascript itu keren sekali"

    var firstWord = sentences.substring(0,3)
    var secondWord = sentences.substring(3,14)
    var thirdWord = sentences.substring(14,18)
    var fourthWord = sentences.substring(18,25)
    var fifthWord = sentences.substring(25,sentences.length)

    console.log('Kata Pertama: ' + firstWord); 
    console.log('Kata Kedua: ' + secondWord); 
    console.log('Kata Ketiga: ' + thirdWord); 
    console.log('Kata Keempat: ' + fourthWord); 
    console.log('Kata Kelima: ' + fifthWord);
}

// soal ke-4
{
    var nilaiJohn = 80
    var nilaiDoe = 50

    if (nilaiJohn >= 80)
        console.log("Nilai John A")
    else if (nilaiJohn >= 70 && nilaiJohn < 80)
        console.log("Nilai John B")
    else if (nilaiJohn >= 60 && nilaiJohn < 70)
        console.log("Nilai John C")
    else if (nilaiJohn >= 50 && nilaiJohn < 60)
        console.log("Nilai John D")
    else 
        console.log("Nilai John E")

    if (nilaiDoe >= 80)
        console.log("Nilai Doe A")
    else if (nilaiDoe >= 70 && nilaiDoe < 80)
        console.log("Nilai Doe B")
    else if (nilaiDoe >= 60 && nilaiDoe < 70)
        console.log("Nilai Doe C")
    else if (nilaiDoe >= 50 && nilaiDoe < 60)
        console.log("Nilai Doe D")
    else 
        console.log("Nilai Doe E")
}

// soal ke-5
{
    var tanggal = 24
    var bulan = 2
    var tahun = 2001

    switch(bulan) {
        case 1:
            console.log(`${tanggal} Januari ${tahun}`)
            break
        case 2:
            console.log(`${tanggal} Februari ${tahun}`)
            break
        case 3:
            console.log(`${tanggal} Maret ${tahun}`)
            break
        case 4:
            console.log(`${tanggal} April ${tahun}`)
            break
        case 5:
            console.log(`${tanggal} Mei ${tahun}`)
            break
        case 6:
            console.log(`${tanggal} Juni ${tahun}`)
            break
        case 7:
            console.log(`${tanggal} Juli ${tahun}`)
            break
        case 8:
            console.log(`${tanggal} Agustus ${tahun}`)
            break
        case 9:
            console.log(`${tanggal} September ${tahun}`)
            break
        case 10:
            console.log(`${tanggal} Oktober ${tahun}`)
            break
        case 11:
            console.log(`${tanggal} November ${tahun}`)
            break
        case 12:
            console.log(`${tanggal} Desember ${tahun}`)
            break
        default:
            console.log(`${tanggal} invalid ${tahun}`)
    }
}