let isim = prompt("Adınız Soyadınızı Yazınız");

let test = document.querySelector("#myName");

test.innerHTML = `${isim}`;

let date = new Date();
var minute = date.getMinutes();
var hour = date.getHours();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

let clock = document.querySelector("#myClock");

clock.innerHTML = `Saat : ${hour} : ${minute} , Tarih : ${day}.${month}.${year}`;