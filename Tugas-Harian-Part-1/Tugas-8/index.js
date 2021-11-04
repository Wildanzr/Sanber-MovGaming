var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

const reading = (time, i) => {
    readBooks(time, books[i], (sisaWaktu) => {
        if(sisaWaktu > 0)
            reading(sisaWaktu, i+1)
    })
}

reading(10000, 0)