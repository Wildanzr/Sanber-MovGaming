var filterBooksPromise = require('./promise2.js')

const execute = async () => {
    let soal = [
        {berwarna: true, halaman:40},
        {berwarna: false, halaman:250},
        {berwarna: true, halaman:30}
    ]
    for(let kondisi of soal) {
        filterBooksPromise(kondisi.berwarna, kondisi.halaman).then(function (hasil) {
            console.log(hasil)
        }).catch(function (err) {
            console.log(err.message)
        })
    }
}

execute()