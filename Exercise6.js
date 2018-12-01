function angkaPalindrome(num) {
    var isPalindrome = false 
    while( isPalindrome === false ) {
        num++
       var angkaStr = String(num)
       var tampung = ''
       for(var i = angkaStr.length-1; i >= 0; i--) {
           tampung += angkaStr[i]
       }
       var hasilAngka = Number(tampung)
       if(hasilAngka === num) {
        isPalindrome = true 
       }
     
    }
    return hasilAngka
  }

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

  