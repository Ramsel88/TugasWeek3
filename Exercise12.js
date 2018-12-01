function tentukanDeretGeometri(arr) {
    var pembandingBagi = arr[2] / arr[1]

    for (var i = arr.length - 1; i >= 1; i--) {
        var bagiSementara = arr[i] / arr[i - 1]
        if (pembandingBagi !== bagiSementara) {
            return false
        }
        //kalo retuen disini maka pada saat ada looping true pada salah satu loopingan langsung ngeluarin true tanpa ngecek lopingan lain lagi
    }
    return true

}
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false