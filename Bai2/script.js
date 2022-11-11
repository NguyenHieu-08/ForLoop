function sum(){
    let number = +(document.getElementById('number').value);
    let result = document.getElementById('result');

    let sum = 0;
    for(let i = 0; i <= number; i++) {
        sum += i;
    }
    result.innerHTML = sum;
}