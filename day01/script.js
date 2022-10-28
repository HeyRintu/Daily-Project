
const prime = () => {
    let j = parseInt(document.querySelector("#from").value);
    let num = parseInt(document.querySelector("#to").value);
    let sum = 0;
    let arr = [];
    
    for (j; j <= num; j++){
        var isPrime = true;
        
        for (let i = 2; i < j; i++){
            if(j % i == 0){
                isPrime = false;
                break;
            }
        }
        
        if(isPrime ){
            console.log("this is prime: "+ j);
            arr.push(j)
            
            sum = sum + j;
        }
    }
    document.querySelector("#numbers").innerText = arr;
    document.querySelector("#ans").innerHTML = sum;

}
