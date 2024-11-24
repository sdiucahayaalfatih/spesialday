function initengahan(){
    kadoIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1.5);";
  }
  
  async function mulainama() {
    //window.location.replace("https://www.feeldream.my.id/2023/01/script-html-bucin.html");
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,200);
    setTimeout(kethalo,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function kethalo(){new TypeIt("#halo", {strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function(){halo.innerHTML = vketikhalo;setTimeout(bqmuncul,200);},}).go();}

  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";if(fungsi==2){By.innerHTML="&#128140; Balas"}}
  document.getElementById("By").onclick = function() {if(fungsi==1){Tombol.style="";fthilang();fungsi=0;pertanyaan();} if(fungsi==2){Tombol.style="";menuju();}}
  
  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";}
  else{ucapan = "Selamat Malam, ";}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    aktiopsL();
  },}).go();
  }
  
  opsLclick=0;opsLcheck=0;defopsL=opsL.innerHTML;
  document.getElementById("bq").onclick = function() {
    if(opsLclick==1){
      if(opsLcheck==1){setTimeout(aktipesan1,400);fthilang();ftganti=1;setTimeout(ftmuncul,300);}
      if(opsLcheck==2){mulaiketik3();}
      if(opsLcheck==3){mulaiketik4();}
      if(opsLcheck==4){mulaiketik5();}
      if(opsLcheck==5){kethalo2();}
      otomatis();opsL.style.opacity="0";opsLclick=0;
    }
  }
  function aktiopsL(){opsL.innerHTML=defopsL;opsL.style.opacity=".8";opsLclick=1;opsLcheck+=1;}
  function gantiopsL(){opsL.innerHTML="[ Klik beberapa LOVE-nya ]";opsL.style.opacity=".8";}
  function otomatis(){pesan3.style="transition:none";pesan8.style="display:none";kalimat.style="opacity:0";if(otoaktipesan==0){setTimeout(otolanj,400)}}
  function otolanj(){kalimat.style="opacity:1";}

  function aktipesan1(){kalimat.innerHTML=pesan1.innerHTML;kolombaru.style="position:relative;opacity:1;transform:scale(1);";}
  vketik2=pesan2.innerHTML;
  function aktipesan2(){
    wallpaper.style="transform: scale(1.5);";
    kolombaru.style="";
    kalimat.innerHTML = "Terimakasih sudah memecahkan balonnya, Harap Tunggu 😊...";
    new TypeIt("#kalimat", {
      strings: [kalimat.innerHTML],
      startDelay: 20,
      speed: 40,
      cursor: true,
      deleteSpeed: 20,
      breakLines: false,
      waitUntilVisible: true,
      lifelike: true,
      afterComplete: function(){
        setTimeout(aktipesan3, 500);  // Melanjutkan ke pesan berikutnya
      },
    }).go();
  }
// Elemen audio
const popSound = document.getElementById("popSound");

// Menghasilkan 20 balon
const kolombaru = document.getElementById("kolombaru");
for (let i = 1; i <= 20; i++) {
    const balon = document.createElement("li");
    balon.id = "lv" + i;
    balon.textContent = "🎈";
    balon.style.cursor = "pointer";
    balon.style.fontSize = "30px";
    balon.style.margin = "8px";

    // Tambahkan event listener klik untuk memutar suara
    balon.addEventListener("click", () => {
        popSound.currentTime = 0; // Reset waktu audio
        popSound.play(); // Mainkan suara
        balon.textContent = "💥"; // Ganti balon dengan efek ledakan

        // Tambahkan kelas untuk animasi ledakan
        balon.classList.add("balon-ledakan");

        // Nonaktifkan klik lebih lanjut
        balon.style.pointerEvents = "none"; 

        // Mengubah balon menjadi transparan setelah efek ledakan ditampilkan
        setTimeout(() => {
            balon.style.opacity = "0"; // Membuat balon transparan setelah efek ledakan muncul
        }, 500); // Setelah 500ms (waktu tampil efek 💥)
    });

    kolombaru.appendChild(balon);
}


var otoaktipesan = 0;

function toaktipesan() {
    kalimat.innerHTML = vketik10;
    kalimat.style = "transform:scale(1);font-size:24px;font-family:var(--gaya-font2)";
}

var slov = 0;

function checkslov() {
    document.getElementById("jumlah_balon").textContent = slov; // Perbarui tampilan jumlah balon yang dipecahkan
    if (slov == 20) {
        kolombaru.style = "position:relative;transform:scale(1)";
        otomatis();
        setTimeout(aktipesan2, 400);  // Menampilkan pesan setelah semua balon dipecahkan
    }
}

// Menambahkan event listener untuk setiap balon
for (let i = 1; i <= 20; i++) {
    document.getElementById("lv" + i).onclick = function () {
        this.textContent = "💥"; // Menampilkan efek ledakan 💥
        this.style.opacity = "0"; // Membuat balon transparan setelah dipecahkan
        slov += 1;
        this.onclick = null; // Menghindari event listener diaktifkan kembali
        checkslov();
    }
}




  vketik3=pesan3.innerHTML;pesan3.innerHTML="";
  function generateLoveHearts() {
    const loveContainer = document.getElementById("love-container");
    let heartInterval;
    let wallpaperIndex = 1; // Mulai dari image1
    const totalImages = 25; // Total gambar dari image1 sampai image25
  
    // Start changing wallpaper every 2 seconds
    const wallpaper = document.getElementById("wallpaper");

    setInterval(() => {
        // Ubah gambar berdasarkan index yang meningkat
        wallpaper.src = `Walapaper/image${wallpaperIndex}.jpeg`;

        // Update index untuk gambar berikutnya, balik lagi ke 1 setelah gambar terakhir
        wallpaperIndex = (wallpaperIndex % totalImages) + 1;
    }, 2000); // Ganti gambar setiap 2 detik
  
    // Start generating love hearts
    heartInterval = setInterval(() => {
        const loveHeart = document.createElement("div");
        loveHeart.classList.add("love-heart");
        loveHeart.textContent = "❤️"; // Heart symbol
    
        // Position hearts randomly across the screen
        loveHeart.style.left = `${Math.random() * 100}vw`;
        loveHeart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
    
        loveContainer.appendChild(loveHeart);

        // Play the magic wand sound whenever a heart appears
        const magicSound = document.getElementById("magicS");
        magicSound.play();
    
        // Remove heart after its animation is complete
        setTimeout(() => {
            loveHeart.remove();
        }, 5000); // Hearts disappear after 5 seconds
    }, 100); // A new heart every 100ms
  
    // Stop the rain of hearts after 5 seconds
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 5000); // Stop generating hearts after 5 seconds
}



function aktipesan3() {
    kalimat.style = "display:none";
    pesan3.style = "position:relative;opacity:1;transform: scale(1)";
    wallpaper.style = "transform: scale(1)";
    fthilang();
    ftganti = 2;
    setTimeout(ftmuncul, 300);
    
    new TypeIt("#pesan3", {
      strings: ["" + vketik3],
      startDelay: 1,
      speed: 45,
      cursor: true,
      waitUntilVisible: true,
      lifelike: true,
      afterComplete: function() {
        pesan3.innerHTML = vketik3;
        setTimeout(otomatis, 600);
        setTimeout(aktipesan4, 1010);
        
        // Start the love-heart rain effect when the message appears
        generateLoveHearts();
      },
    }).go();
}

  function aktipesan4(){
    wallpaper.style="transform: scale(1.5);";kalimat.innerHTML=pesan4.innerHTML + "Sayang" + " 🥳";kalimat.style="transform:scale(1.2)";setTimeout(aktipesan5,1000);
  }
  vketik5=pesan5.innerHTML;pesan5.innerHTML="";
  function aktipesan5(){
  fthilang();ftganti=3;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan5", {
  strings: ["" + vketik5], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan5.innerHTML=vketik5 + " ><";setTimeout(aktipesan6,800);
  },}).go();
  }
  vketik6=pesan6.innerHTML;pesan6.innerHTML="";
  function aktipesan6(){
  wallpaper.style="transform: scale(1.5);";
  new TypeIt("#pesan6", {
  strings: ["" + vketik6], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan6.innerHTML=vketik6;setTimeout(aktipesan7,800);
  },}).go();
  }
  vketik7=pesan7.innerHTML;pesan7.innerHTML="";
  function aktipesan7(){
  fthilang();ftganti=1;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan7", {
  strings: ["" + vketik7], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan7.innerHTML=vketik7;fungsi=1;setTimeout(tombol,400);
  },}).go();
  }
  //Pemisah
  vketik81=pesan8.innerHTML;pesan8.innerHTML="";
  vketik9=pesan9.innerHTML;pesan9.innerHTML="";
  vketik10=pesan10.innerHTML;pesan10.innerHTML="";
  function aktipesan8() {
    pesan5.style="display:none";
    pesan6.style="display:none";
    pesan7.style="display:none";
    pesan8.style="";
    wallpaper.style="transform: scale(1);";
    ftganti = 4;
    ftmuncul();

    new TypeIt("#pesan8", {
        strings: ["" + vketik8, "" + vketik9],
        startDelay: 20,
        speed: 45,
        cursor: true,
        deleteSpeed: 30,
        breakLines: false,
        waitUntilVisible: true,
        lifelike: true,
        afterComplete: function() {
            pesan8.innerHTML = vketik9;
            setTimeout(otomatis, 1300);
            setTimeout(aktipesan10, 1710);
        },
    }).go();
}

function aktipesan10() {
    wallpaper.style = "transform: scale(1.5);";
    fthilang();
    ftganti = 5;
    setTimeout(ftmuncul, 300);
    otoaktipesan = 1;
    otomatis();
    setTimeout(toaktipesan, 300);

    // Start generating balloons after typing message 9 is complete
    generateBalloons();

    fungsi = 2;
    setTimeout(tombol, 2000);
}

// Modify generateBalloons function to trigger only after pesan9 finishes typing
function generateBalloons() {
    const balloonContainer = document.getElementById("balloon-container");
    let balloonInterval;

    // Start generating balloons
    balloonInterval = setInterval(() => {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.textContent = "🎈"; // Emoji balon

        // Mengatur posisi acak di bawah layar
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durasi acak untuk animasi

        balloonContainer.appendChild(balloon);

        // Play both sounds when a balloon appears
        const clapHandSound = document.getElementById("claphand");
        const hornPartySound = document.getElementById("hornparty");

        clapHandSound.play();  // Play clapping sound
        hornPartySound.play(); // Play birthday horn sound

        // Remove balloon after its animation is complete (5 seconds)
        setTimeout(() => {
            balloon.remove();
        }, 5000); // Balloon disappears after 5 seconds
    }, 100); // A new balloon every 100ms

    // Stop the rain of balloons after 5 seconds
    setTimeout(() => {
        clearInterval(balloonInterval);
        balloonContainer.innerHTML = ""; // Remove all balloons after 5 seconds
    }, 5000); // Stop generating balloons after 5 seconds
}

  async function pertanyaan(){var { isConfirmed: prtanya } = await swals.fire({title: nama + ' ' + tanya, text: '' + opstanya, imageUrl: '' + fotostiker6.src, showCancelButton: true, confirmButtonText: '' + tompositif, cancelButtonText: '' + tomnegatif,});
    if(prtanya){
  await swalst.fire({title: '' + katatambahan.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
      vketik8=vketik81;aktipesan8();
    } else {
	await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
      vketik8="";aktipesan8();
    }
    }

    