function dataHandling2(arr){

arr.splice(1, 2, "Roman Alamsyah Elsharawy");
arr.splice(2, 0, "Provinsi Bandar Lampung")
arr.splice(4, 1, "SMA Internasional Metro")
arr.splice(4, 0, "Pria")
console.log(arr);

//Menampilkan nama bulan dalam array
var bulanSplit = arr[3].split('/')

  switch (bulanSplit[1]){
  
    case '01':console.log(' Januari '); break;
    case '02':console.log(' Februari ');break;
    case '03':console.log (' Maret ');break;
    case '04':console.log (' April ');break;
    case '05':console.log(' Mei ');break;
    case '06':console.log(' Juni ');break;
    case '07':console.log(' Juli ');break;
    case '08':console.log(' Agustus ');break;
    case '09':console.log(' September ');break;
    case '10':console.log(' Oktober ');break;
    case '11':console.log(' November ');break;
    case '12':console.log(' Desember ');break;
   
  }
//join tanggal yg uda displit dengan '-'
  var UdaDiJoin = bulanSplit.join(('-'))
  console.log(UdaDiJoin);
 
//sorting descending pada elemen tanggal bulan dan tahun yg udah displit
  UdaDiSort = bulanSplit.sort(function(a, b){return b-a})
console.log(UdaDiSort)

//membatasi index[1] 15 karakter
var str = ''
var str = arr[1].slice(0, 15);
console.log(str);

}


var input =["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
 console.log(dataHandling2(input));



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

