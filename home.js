document.getElementById('show-cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById("show-add-money-form").classList.add('hidden') 
    document.getElementById("show-cash-out-form").classList.remove('hidden') 
    document.getElementById('show-add-money-btn').style.backgroundColor = 'gray'
    document.getElementById('show-cash-out-btn').style.backgroundColor = 'green'
})
document.getElementById('show-add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('show-add-money-form').classList.remove('hidden')
    document.getElementById('show-cash-out-form').classList.add('hidden')
    document.getElementById('show-add-money-btn').style.backgroundColor = 'green'
    document.getElementById('show-cash-out-btn').style.backgroundColor = 'gray'
})




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
       document.getElementById('amout').value ='';
       document.getElementById('pin-number').value ='';
    }
})

document.getElementById('cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashAmount = document.getElementById('amount').value;
    const pin = document.getElementById('cashOut-pin-number').value;
    const balance = document.getElementById('balance').innerText;
    if(pin === '1234'){
        const cashAmountNumber = parseFloat(cashAmount);
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber - cashAmountNumber ;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('amount').value ='';
        document.getElementById('cashOut-pin-number').value ='';

    }
})

