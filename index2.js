/*
function removeLastCat() {
    let cats = ['Gene', 'Milo', 'Otis', 'Garfield']
    let copyOfCats = cats.splice()
    copyOfCats.pop(0, 1)
    return copyOfCats
}

function removeFirstCat() {
    let cats = ['Gene', 'Milo', 'Otis', 'Garfield']
    let copyOfCats = cats.splice()
    copyOfCats.shift(0, 1)
    return copyOfCats
}

*/

function removeFirstCat() {
    let cats = ["Milo", "Otis", "Garfield"]
    let copyOfCats = cats.splice()
    copyOfCats.shift("Milo")
    return copyOfCats
}

function removeFirstCat() {
    let cats = ['Milo', 'Otis', 'Garfield']
    let copyOfCats = cats.splice()
    copyOfCats.shift('Milo')
    return copyOfCats
}