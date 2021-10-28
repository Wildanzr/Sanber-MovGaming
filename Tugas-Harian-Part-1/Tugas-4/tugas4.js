// soal ke-1
var i = 0;
console.log("LOOPING PERTAMA");
while(i <= 20) {
    if(i % 2 == 0 && i != 0)
        console.log(i, " -  I love coding");
    i+=2;
}

i = 20;
console.log("LOOPING KEDUA");
while(i != 0) {
    if(i % 2 == 0)
        console.log(i, " -  I will become a frontend developer");
    i-=2;
}

// soal ke-2
for(i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 != 0)
        console.log(i, " - I love coding");
    else if (i % 2 != 0)
        console.log(i, " - Santai");
    else
        console.log(i, " - Berkualitas")
}

// soal ke-3
i = 1;
var isi = "";
while (i <= 7) {
    for(var j = 0; j < i; j++) {
        isi += "#";
    }
    console.log(isi);
    isi = "";
    i++;
}

// soal ke-4
var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"];
kalimat.shift();
kalimat.splice(1,1);
console.log(kalimat.join(" "));


// soal ke-5
var sayuran=[];
sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

sayuran.sort();

for (var i = 0; i < sayuran.length; i++) {
    console.log((i+1)+".", sayuran[i])
}