function targetTerdekat(arr) {
    var tempO = 0
    var tempX = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            tempO += i
        }
        else if (arr[i] == 'x') {
            tempX.push(i)
        }
    }
    if(arr.indexOf('x') === -1){
        return 0
    }
    var pembandingAngka = []

    for (var j = 0; j < tempX.length; j++) {

        pembandingAngka.push(Math.abs(tempX[j] - tempO))
    }
    var hasil = pembandingAngka[0]
    for (var k = 0; k < pembandingAngka.length; k++) {
        if (hasil > pembandingAngka[k]) {
            hasil = pembandingAngka[k]
        }
    }
    return hasil
}


//TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
 console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2