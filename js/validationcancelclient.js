function buttoncancelclient(){
	var r = confirm("Apakah anda yakin?");
	if(r == true){
		alert("Pekerjaan dibatalkan!");
		location.replace("sraboetclienthomepage.html");
		return true;
	}
	else{
		return false;
	}
}