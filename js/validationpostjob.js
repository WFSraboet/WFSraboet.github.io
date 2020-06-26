var err = document.getElementById('err_msg');

function validateappointment(){
	var title = document.getElementById('titlearea').value;
	var desc = document.getElementById('descarea').value;

	if(title == ""){
		err.innerHTML = "judul harus diisi!"
	}

	else if(desc == ""){
		err.innerHTML = "deskripsi harus diisi!"
	}
	else{
		err.innerHTML = "";
		alert("post berhasil dibuat!");
	}
}
