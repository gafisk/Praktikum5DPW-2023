function kehome() {
  document.querySelector('.home').style.display = "block";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.getElementById('title').innerHTML = "HOME | Mangrove Kedatim";
  
  home = document.getElementById('home').style.color = "yellow";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "white";
}

function keevent() {
  document.querySelector('.event').style.display = "block";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.getElementById('title').innerHTML = "Event | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "yellow";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "white";
}

function keabout() { 
  document.querySelector('.about').style.display = "block";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.getElementById('title').innerHTML = "About | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "yellow";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "white";
}

function kegallery() {
  document.querySelector('.gallery').style.display = "block";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.querySelector('.contact').style.display = "none";
  document.getElementById('title').innerHTML = "Gallery | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "yellow";
  kontak = document.getElementById('contact').style.color = "white";
}

function kecontact() {
  document.querySelector('.contact').style.display = "block";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.event').style.display = "none";
  document.querySelector('.home').style.display = "none";
  document.querySelector('.about').style.display = "none";
  document.getElementById('title').innerHTML = "Contact | Mangrove Kedatim";

  home = document.getElementById('home').style.color = "white";
  eventt = document.getElementById('event').style.color = "white";
  about = document.getElementById('about').style.color = "white";
  galery = document.getElementById('gallery').style.color = "white";
  kontak = document.getElementById('contact').style.color = "yellow";
}

function tampilgambar(x, y) {
  document.getElementById("ketgambar").style.display= "block";
  if (x == 1) {
    document.getElementById("ketgambar").innerHTML= y;
  } else if (x == 2) {
    document.getElementById("ketgambar").innerHTML= y
  } else if (x == 3) {
    document.getElementById("ketgambar").innerHTML= y
  } else {
    document.getElementById("ketgambar").innerHTML= y
  }
}

function hilanggambar(x) {
  document.getElementById("ketgambar").style.display = "none";
}

function carigoogle() {
  key = document.getElementById("cari").value;
  if (key == "") {
    key = "Wisata mangrove kedatim";
  }
  url ='http://www.google.com/search?q=' + key;
  window.open(url, '_blank');
  document.getElementById("cari").value = "";
}

function bukamenu() {
  var menuBtn = document.getElementById('menubar');
  if (menuBtn.style.display === "block") {
    menuBtn.style.display = "none";
  } else {
    menuBtn.style.display = "block";
  }
}