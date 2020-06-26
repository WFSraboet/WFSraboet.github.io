function buttondone(){
	var r = confirm("Apakah anda yakin ingin menyelesaikan pekerjaan?");
	if(r == true){
		alert("Pekerjaan telah selesai!");
		location.replace("sraboetclienthomepage.html");
		return true;
	}else{
		return false;
	}
}
