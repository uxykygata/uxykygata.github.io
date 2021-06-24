$(function(){
  $("#phone2").mask("+389999999999");
});



function ValidName() {
	document.getElementById('errmsgall2').style.display = 'none';
	document.getElementById('errmsg2').innerHTML = '';
    var re = /^([а-яА-ЯёЁа-щА-ЩЬьЮюЯяЇїІіЄєҐґ'a-zA-Z0-9 -]+){0,50}$/;
    var myName = document.getElementById('name2').value;
    var valid = re.test(myName);
    if ((valid)&&(myName != '')) {}
    else {
		document.getElementById('errmsgall2').style.display = 'block';
		output = 'Имя введено неправильно';
		document.getElementById('errmsg2').innerHTML = output;
	}
	return valid;
}
 
function ValidPhone() {
    var re = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;
    var myPhone = document.getElementById('phone2').value;
    var valid = re.test(myPhone);
    if (valid) {}
    else {
		document.getElementById('errmsgall2').style.display = 'block';
		output = 'Телефон введен неправильно';
		xxx2 = document.getElementById('errmsg2').innerHTML
		if (xxx2 == '') {
			document.getElementById('errmsg2').innerHTML = output;
		} else {
			document.getElementById('errmsg2').innerHTML = document.getElementById('errmsg2').innerHTML+'<br />'+output;
		}
	}
	return valid;
}  

function ValidDate() {
    var myDate = document.getElementById('date2').value;
    if (!myDate) {
		document.getElementById('errmsgall2').style.display = 'block';
		output = 'День рождения не введен';
		xxx2 = document.getElementById('errmsg2').innerHTML
		if (xxx2 == '') {
			document.getElementById('errmsg2').innerHTML = output;
		} else {
			document.getElementById('errmsg2').innerHTML = document.getElementById('errmsg2').innerHTML+'<br />'+output;
		}
		return false;
	} else {
		return true;
	}
} 