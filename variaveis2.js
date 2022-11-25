const human = {
    name: "Lucas",
    age: 26,
    weight: 63,
    isAthlete: false,
    walk: function walking() {

        console.log('Eu ando bastante!')
    } // objeto
}

console.log("O humano " + human.name + " tem a idade " + human.age)
console.log(`O humano ${human.name} tem a idade ${human.age}`)

const animals = [
    "Elefante",
    "Gato",
    "Leão",
    "Cachorro",
    {
        name: "Moacir",
        age: 2,
        weight: 4,

    }
]
console.log("animals:", animals[4].weight)




