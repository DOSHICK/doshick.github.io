function multi(){
    var multi_1, multi_2, result;
	multi_1 = document.getElementById('inp_1').value;
	multi_1 = parseInt(multi_1);
	
	multi_2 = document.getElementById('inp_2').value;
	multi_2 = parseInt(multi_2);
	//alert(multi_1*multi_2);
	
	result = multi_1*multi_2;
    document.getElementById('result_multi').innerHTML = result;
}
function separate(){
    var multi_1, multi_2, result;
	multi_1 = document.getElementById('inp_1').value;
	multi_1 = parseInt(multi_1);
	
	multi_2 = document.getElementById('inp_2').value;
	multi_2 = parseInt(multi_2);
	//alert(multi_1*multi_2);
	
	result = multi_1/multi_2;
    document.getElementById('result_multi').innerHTML = result;
}
function minus(){
    var multi_1, multi_2, result;
	multi_1 = document.getElementById('inp_1').value;
	multi_1 = parseInt(multi_1);
	
	multi_2 = document.getElementById('inp_2').value;
	multi_2 = parseInt(multi_2);
	//alert(multi_1*multi_2);
	
	result = multi_1-multi_2;
    document.getElementById('result_multi').innerHTML = result;
}
function sum(){
    var multi_1, multi_2, result;
	multi_1 = document.getElementById('inp_1').value;
	multi_1 = parseInt(multi_1);
	
	multi_2 = document.getElementById('inp_2').value;
	multi_2 = parseInt(multi_2);
	//alert(multi_1*multi_2);
	
	result = multi_1+multi_2;
    document.getElementById('result_multi').innerHTML = result;
}