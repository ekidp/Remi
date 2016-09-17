var noOfClicks = 0;
function sum() {
       var txtj1 = document.getElementById('jpoin').value;
       var txtj2 = document.getElementById('jtotal').value;
       var txtr1 = document.getElementById('rpoin').value;
       var txtr2 = document.getElementById('rtotal').value;
	   var txts1 = document.getElementById('spoin').value;
       var txts2 = document.getElementById('stotal').value;
	   var txtf1 = document.getElementById('fpoin').value;
       var txtf2 = document.getElementById('ftotal').value;

       var resultj = parseInt(txtj1) + parseInt(txtj2);
	   var resultr = parseInt(txtr1) + parseInt(txtr2);
	   var results = parseInt(txts1) + parseInt(txts2);
	   var resultf = parseInt(txtf1) + parseInt(txtf2);
	   
       document.getElementById('jtotal').value = resultj;
	   document.getElementById('rtotal').value = resultr;
	   document.getElementById('stotal').value = results;
	   document.getElementById('ftotal').value = resultf;
	   
	   document.getElementById('jpoin').value = ('');
	   document.getElementById('rpoin').value = ('');
	   document.getElementById('spoin').value = ('');
	   document.getElementById('fpoin').value = ('');
	   
	   noOfClicks++;
       document.getElementById('klik').value = noOfClicks;
   }


function kluir() {
	noOfClicks = 0;
}

var q=0;

function ganti1(){
if(q==0){
document.getElementById("player1").setAttribute('src','img/J.png');
q++;
}
else if (q==1){
document.getElementById("player1").setAttribute('src','img/F.png');
q++;
}
else if (q==2){
document.getElementById("player1").setAttribute('src','img/K.png');
q++;
}
else if (q==3){
document.getElementById("player1").setAttribute('src','img/R.png');
q++;
}
else if (q==4){
document.getElementById("player1").setAttribute('src','img/S.png');
q++;
}
else if (q==5){
document.getElementById("player1").setAttribute('src','img/E.png');
q=0;
}
}

function ganti2(){
if(q==0){
document.getElementById("player2").setAttribute('src','img/J.png');
q++;
}
else if (q==1){
document.getElementById("player2").setAttribute('src','img/F.png');
q++;
}
else if (q==2){
document.getElementById("player2").setAttribute('src','img/K.png');
q++;
}
else if (q==3){
document.getElementById("player2").setAttribute('src','img/R.png');
q++;
}
else if (q==4){
document.getElementById("player2").setAttribute('src','img/S.png');
q++;
}
else if (q==5){
document.getElementById("player2").setAttribute('src','img/E.png');
q=0;
}
}

function ganti3(){
if(q==0){
document.getElementById("player3").setAttribute('src','img/J.png');
q++;
}
else if (q==1){
document.getElementById("player3").setAttribute('src','img/F.png');
q++;
}
else if (q==2){
document.getElementById("player3").setAttribute('src','img/K.png');
q++;
}
else if (q==3){
document.getElementById("player3").setAttribute('src','img/R.png');
q++;
}
else if (q==4){
document.getElementById("player3").setAttribute('src','img/S.png');
q++;
}
else if (q==5){
document.getElementById("player3").setAttribute('src','img/E.png');
q=0;
}
}

function ganti4(){
if(q==0){
document.getElementById("player4").setAttribute('src','img/J.png');
q++;
}
else if (q==1){
document.getElementById("player4").setAttribute('src','img/F.png');
q++;
}
else if (q==2){
document.getElementById("player4").setAttribute('src','img/K.png');
q++;
}
else if (q==3){
document.getElementById("player4").setAttribute('src','img/R.png');
q++;
}
else if (q==4){
document.getElementById("player4").setAttribute('src','img/S.png');
q++;
}
else if (q==5){
document.getElementById("player4").setAttribute('src','img/E.png');
q=0;
}
}