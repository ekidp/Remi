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

