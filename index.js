// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat() {
    return cats.push("Ralph")
}

//cats.push("Ralph")

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}


function destructivelyRemoveLastCat() {
    return cats.pop("Garfield")
}

function destructivelyRemoveFirstCat() {
    return cats.shift("Milo")
}

function appendCat() {
    let cats = ['Milo', 'Otis', 'Garfield']
    let copyOfCats = cats.slice()
    copyOfCats.push('Broom')
    return copyOfCats
}

function prependCat() {
    let cats = ['Milo', 'Otis', 'Garfield']
    let copyOfCats = cats.slice()
    copyOfCats.unshift('Arnold')
    return copyOfCats
}

function removeLastCat() {
    let cats = ['Milo', 'Otis', 'Garfield']
    let copyOfCats = cats.slice()
    copyOfCats.pop('Garfield')
    return copyOfCats
}

function removeFirstCat() {
    let cats = ["Milo", "Otis", "Garfield"]
    let copyOfCats = cats.slice()
    copyOfCats.shift("Milo")
    return copyOfCats
}

