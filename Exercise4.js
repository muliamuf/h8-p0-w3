function dataHandling2(input){
  // input.push("SMA Internasional Metro");
  // for (var i = 0; i<input.length;i++){
    input.splice(1,5,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria","SMA Internasional Metro");
    console.log(input);
    var hari = '';
    var tahun = '';
    var bulan = 05;
    switch(bulan){
    case 1 : {console.log(hari+ ' '+ 'Januari'+ ' ' +tahun); break;}
    case 2 : {console.log(hari+ ' '+ 'Februari'+ ' ' +tahun); break;}
    case 3 : {console.log(hari+ ' '+ 'Maret'+ ' ' +tahun); break;}
    case 4 : {console.log(hari+ ' '+ 'April'+ ' ' +tahun); break;}
    case 5 : {console.log(hari+ ' '+ 'Mei'+ ' ' +tahun); break;}
    case 6 : {console.log(hari+ ' '+ 'Juni'+ ' ' +tahun); break;}
    case 7 : {console.log(hari+ ' '+ 'Juli'+ ' ' +tahun); break;}
    case 8 : {console.log(hari+ ' '+ 'Agustus'+ ' ' +tahun); break;}
    case 9 : {console.log(hari+ ' '+ 'September'+ ' ' +tahun); break;}
    case 10 : {console.log(hari+ ' '+ 'Oktober'+ ' ' +tahun); break;}
    case 11 : {console.log(hari+ ' '+ 'November'+ ' ' +tahun); break;}
    case 12 : {console.log(hari+ ' '+ 'Desember'+ ' ' +tahun); break;}
    default:  { console.log('Tidak terjadi apa-apa'); }
    }
    var tanggal = input[3];
    var tanggalSplit = tanggal.split('/');
    var tanggalSort = tanggalSplit.sort(function (a,b){
      return b-a;})
  console.log(tanggalSort);
  var tanggalSplit = tanggal.split("/");
  var tanggalNew = tanggalSplit.join("-")
  console.log(tanggalNew);

  var nama = input[1];
  var namaSlice = nama.slice(0, 15);
  console.log(namaSlice);
}

var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];
dataHandling2(input);

// var tanggal = '21/12/2012';
// var tanggalBaru = tanggal.split('/');
// console.log(tanggalBaru);
