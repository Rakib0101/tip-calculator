document.getElementById('tip-button').addEventListener('click', function (event) {
    if (event.target.value == 'Custom') {
        document.getElementById('custom-tip-div').style.display = "block";
    }
    else {
        if (event.target.value != NaN || event.target.value == null) {
            document.getElementById('total-tip').innerText = "Invalid Input";
            document.getElementById('per-person').innerText = "Invalid Input";
        }
        else {
            const bill = parseFloat(document.getElementById('bill').value);
            const people = parseInt(document.getElementById('people').value);
            const tipPersentage = parseFloat(event.target.value);
            const tip = (bill * tipPersentage)/100;
            let totalTip = (bill+ tip);
            let totalTipPerPerson = tip / people;
            let totalBillPerPerson = totalTip / people;
            document.getElementById('total-tip').innerText = totalBillPerPerson.toFixed(2);
            document.getElementById('per-person').innerText = totalTipPerPerson.toFixed(2); 
        }   
    }
})
// Catch Custom Tip Button and Reset Button 

const customButtonTip = document.getElementById('custom-tip-btn');
const resetButton = document.getElementById('reset')

customButtonTip.addEventListener('click', function () {
        const bill = parseFloat(document.getElementById('bill').value);
        const people = parseInt(document.getElementById('people').value);
        const tip = parseFloat(document.getElementById('custom-tip').value);
        const totalTip = (bill+ tip);
        const totalTipPerPerson = tip / people;
        const totalBillPerPerson = totalTip / people;
        document.getElementById('total-tip').innerText = totalBillPerPerson.toFixed(2);
        document.getElementById('per-person').innerText = totalTipPerPerson.toFixed(2);
})
resetButton.addEventListener('click', function () {
    document.getElementById('total-tip').innerText = "0.00";
    document.getElementById('per-person').innerText = "0.00";
})
