var err = document.getElementById('err_msg');

function validateaccount(){
	var email = document.getElementById('emailrgs').value;	 
	var username = document.getElementById('usernamergs').value;
	var password = document.getElementById('passwordrgs').value;
	var ktp = document.getElementById('KTPrgs').value;
	var phones = document.getElementById('phonergs').value;
	var desc = document.getElementById('descarea').value; 

	if(email == ""){
		err.innerHTML = "Email harus diisi!"
	}

	else if(username == ""){
		err.innerHTML = "Nama harus diisi!"
	}

	else if(password == ""){
		err.innerHTML = "Password harus diisi!"
	}

	else if(ktp == ""){
		err.innerHTML = "Nomor ktp harus diisi!"
	}

	else if(!+(ktp)){
		err.innerHTML = "nomor ktp harus angka!";
	}

	else if(phones == ""){
		err.innerHTML = "Nomor telepon harus diisi!"
	}

	else if(!+(phones)){
		err.innerHTML = "Nomor telepon harus angka!";
	}

	else if(desc == ""){
		err.innerHTML = "deskripsi harus diisi!"
	}

	else {
		 alert("Account diperbarui!");
	}
}