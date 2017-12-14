document.getElementById("button1").onclick = function () {
        location.href = "sub_page_CST_E.html";
    }

document.getElementById("button2").onclick = function () {
        location.href = "sub_page_PB.html";
    }


document.getElementById("button3").onclick = function () {
    location.href = "sub_page_QB.html";
};


document.getElementById("button4").onclick = function () {
    location.href = "sub_page_Ls.html";
};




var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");

var chosen = "chosen.png";
var notChosen = "notchosen.png";

document.getElementById("img1").src="Cornelia_.jpg";
btn1.addEventListener("mouseover", function(){
	
	img1.src = "Chappy.jpg";
	img2.src = "Psad.jpg";
	img3.src = "Qsad.jpg";
	img4.src = "Lsad.jpg";

	btn1.addEventListener("mouseout", function(){
		img1.src = "Cornelia_.jpg";
		img2.src = "Primoz.jpg";
		img3.src = "Qais.jpg";
		img4.src = "lidye.jpg";
	});
});


btn2.addEventListener("mouseover", function(){
	img1.src = "Csad.jpg";
	img2.src = "Phappy.jpg";
	img3.src = "Qsad.jpg";
	img4.src = "Lsad.jpg";

	btn2.addEventListener("mouseout", function(){
		img1.src = "Cornelia_.jpg";
		img2.src = "Primoz.jpg";
		img3.src = "Qais.jpg";
		img4.src = "lidye.jpg";
	});
});


btn3.addEventListener("mouseover", function(){
	img1.src = "Csad.jpg";
	img2.src = "Psad.jpg";
	img3.src = "Qhappy.jpg";
	img4.src = "Lsad.jpg";

	btn3.addEventListener("mouseout", function(){
		img1.src = "Cornelia_.jpg";
		img2.src = "Primoz.jpg";
		img3.src = "Qais.jpg";
		img4.src = "lidye.jpg";
	});
});


btn4.addEventListener("mouseover", function(){
	img1.src = "Csad.jpg";
	img2.src = "Psad.jpg";
	img3.src = "Qsad.jpg";
	img4.src = "Lhappy.jpg";

	btn4.addEventListener("mouseout", function(){
		img1.src = "Cornelia_.jpg";
		img2.src = "Primoz.jpg";
		img3.src = "Qais.jpg";
		img4.src = "lidye.jpg";
	});
	
});



