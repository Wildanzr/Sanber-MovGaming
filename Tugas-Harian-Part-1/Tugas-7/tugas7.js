// soal ke-1
class Animal {
    constructor(nama) {
        this.name = nama
        this.legs = 4
        this.cold_blooded = false
    }

    get aName() {
        return this.name
    }
    get aLegs() {
        return this.legs
    }
    get aCold_Blooded() {
        return this.cold_blooded
    }

    set aName(nama) {
        this.name = nama
    }
    set aLegs(legs) {
        this.legs = legs
    }
    set aCold_Blooded(cold_blooded) {
        this.cold_blooded = cold_blooded
    }
}

var sheep = new Animal("shaun");
console.log(`-----Release 0-----`)
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)


class Frog extends Animal {
    jump() {
        console.log(`hop hop`)
    }
}

class Ape extends Animal {
    yell() {
        console.log(`Auooo`)
    }
}


console.log(`-----Release 1-----`)
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

//soal ke-2
class Clock {
    constructor({template}) {
        this.template = template
        this.date = null
        this.hours = null
        this.mins = null
        this.secs = null
    }
    render() {
        this.date = new Date()
        this.hours = this.date.getHours();
        this.mins = this.date.getMinutes();
        this.secs = this.date.getSeconds();

        if (this.hours < 10) 
            this.hours = '0' + this.hours;
        if (this.mins < 10) 
            this.mins = '0' + this.mins;
        if (this.secs < 10) 
            this.secs = '0' + this.secs;

        var output = this.template.replace('h', this.hours).replace('m', this.mins).replace('s', this.secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer)
    }
    start() {
        this.timer = setInterval(() => this.render(), 1000)
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  