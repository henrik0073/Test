function insertText(){
	document.getElementById("Content").innerHTML="Some new text: <br>Hello<br>"; 
}

function calculate(){
	var t = widthBox.value; //read from the textboxes
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	//Convert to float
	w=parseFloat(w);
	l=parseFloat(l);
	h=parseFloat(h);
	var result = w*l*h; //show the result in div
	document.getElementById("result").innerHTML = result;
}

function multiplication(){
	//read from textBox
	document.getElementById("mult-tb").innerHTML="";
	var f = document.getElementById("factor").value;
	for(var i =1;i<=10;i++){
		var res = f*i;
		//show result in div
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}

