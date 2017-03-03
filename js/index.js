var tx = document.getElementById("tx");
var ye = document.getElementById("yuer").innerHTML;
var num = document.getElementById("num");
var reg = /^\s+|\s+$/g;

//num.onkeydown = function(e){
//	console.log(e);
//	var e = e||window.event;
//          if(!((e.keyCode >= 48 && e.keyCode <= 57)||(e.keyCode >=96 && e.keyCode <=105))){
//              e.returnValue=false; 
//          }
//      }
tx.onclick = function(){
	if(num.value){
		if(num.value<ye){
			window.location.href="pz.html";
		}else{
			alert("余额不足");
		}
	}
	
}
