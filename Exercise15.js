function groupAnimals(animals) {
    var result = []
    var hurufHewan = 'abcdefghijklmnopqrstuvwxyz'
    // console.log(hurufHewan[25]);
    for (var i = 0; i < hurufHewan.length; i++) {
        var namaHewan = []
        for (var j = 0; j < animals.length; j++) {
            if (hurufHewan[i] == animals[j][0]) {
                namaHewan.push(animals[j])
            }
        }
        if (namaHewan.length !== 0) {
            result.push(namaHewan)
        }

    }
    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

