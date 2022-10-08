function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
    }
function Validation(){
    const v = document.getElementById('people').value;
    if(v === "" || v > 0){
        document.querySelector('.p').classList.remove('active');
        document.querySelector('.zero').classList.remove('valid');
    }
    else{
        document.querySelector('.p').classList.add('active');
        document.querySelector('.zero').classList.add('valid');
    }
}

document.getElementById('val5').addEventListener('click',function(){
    document.querySelector('#val5').classList.toggle('select');
})
document.getElementById('val10').addEventListener('click',function(){
    document.querySelector('#val10').classList.toggle('select');
})
document.getElementById('val15').addEventListener('click',function(){
    document.querySelector('#val15').classList.toggle('select');
})
document.getElementById('val25').addEventListener('click',function(){
    document.querySelector('#val25').classList.toggle('select');
})
document.getElementById('val50').addEventListener('click',function(){
    document.querySelector('#val50').classList.toggle('select');
})
