function buttoncancelclient(){
	var r = confirm("Apakah anda yakin ingin membatalkan pekerjaan?");
	if(r == true){
		alert("Pekerjaan dibatalkan!");
		location.replace("sraboetclienthomepage.html");
		return true;
	}
	else{
		return false;
	}
}
