var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
]

const reading = (time, i) => {
    readBooksPromise(time, books[i]).then(function (hasil) {
        if(i >= books.length-1)
            return hasil
        else if(hasil >= 0)
            reading(hasil, i+1)
       
    }).catch(function (err) {
        console.log(err.message)
    })
}

reading(10000, 0)