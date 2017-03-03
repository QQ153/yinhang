var tx = document.getElementById("tx");
var ye = document.getElementById("yuer").innerHTML;
var num = document.getElementById("num");
var del = document.getElementById("del");
var reg = /^\s+|\s+$/g;

//num.onkeydown = function(e){
//	console.log(e);
//	var e = e||window.event;
//          if(!((e.keyCode >= 48 && e.keyCode <= 57)||(e.keyCode >=96 && e.keyCode <=105))){
//              e.returnValue=false; 
//          }
//      }

del.onclick = function(){
	num.value = "";
}

tx.onclick = function(){
	var yez = parseFloat(ye);
	var tjnum = parseFloat(num.value);
	console.log(tjnum);
	if(tjnum){
		if(tjnum<=yez){
			window.location.href="pz.html";
		}else{
			alert("余额不足");
			num.value = "";
		}
	}else{
		alert("请输入正确的数字");
		num.value = "";
	}
	
}
