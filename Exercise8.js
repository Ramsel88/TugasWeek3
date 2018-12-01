function pasanganTerbesar(num) {
  var angka = num.toString()
  var angkaStr = angka.split('')
  //membuat array var kelompok angka
  var kelompokAngka = [];
  for(var i = 0; i < angkaStr.length - 1; i++){
    kelompokAngkaStr= (angkaStr[i] + angkaStr[i+1])
    kelompokAngka.push(Number(kelompokAngkaStr)) 
    
  }
  
var pembandingAngka = kelompokAngka[1] //kelompok angka [1] = 41, hanya sebagai contoh pembanding, boleh sembarang index 
for(var j = 0; j<kelompokAngka.length; j++){
    if(pembandingAngka < kelompokAngka[j]){
        pembandingAngka = kelompokAngka[j];
    }
}
return (pembandingAngka);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99