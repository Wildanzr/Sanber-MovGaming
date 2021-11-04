var filterBooksPromise = require('./promise2.js')

const execute = async () => {
    var soalPertama = [true, 40]
    var soalKedua = [false, 250]
    var soalKetiga = [true, 30]

    let kondisi1 = filterBooksPromise(...soalPertama).then(function (hasil) {
        console.log(hasil)
    }).catch(function (err) {
        console.log(err.message)
    })

    let kondisi2 = await filterBooksPromise(...soalKedua).then(function (hasil) {
        console.log(hasil)
    }).catch(function (err) {
        console.log(err.message)
    })
    let kondisi3 = async () => {
        let result = await filterBooksPromise(...soalKetiga).then(function (hasil) {
            console.log(hasil)
        }).catch(function (err) {
            console.log(err.message)
        })
    }
}

execute()