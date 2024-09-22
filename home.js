document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashAmount = document.getElementById('amout').value;
    const pin = document.getElementById('pin-number').value;
    const balance = document.getElementById('balance').innerText;
   
    if(cashAmount >0 && pin === '1234'){
        const addAmount = parseFloat(cashAmount);
        const oldbalance = parseFloat(balance);
       const newBalance = addAmount + oldbalance;
       document.getElementById('balance').innerText = newBalance ;
       console.log(newBalance)
        
    }
})