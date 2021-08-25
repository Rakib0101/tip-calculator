document.getElementById('tip-button').addEventListener('click', function (event) {
    var $input = event.target.value;
    if ($input === 'Custom') {
        document.getElementById('custom-tip-div').style.display = "block";
    }
    else {
        let bill = parseFloat(document.getElementById('bill').value);
        let people = parseInt(document.getElementById('people').value);

        let [billPerPerson, tipPerPerson]
            = calculateTip(bill, people, parseFloat($input), true);

        document.getElementById('total-tip').innerText = billPerPerson.toFixed(2);
        document.getElementById('per-person').innerText = tipPerPerson.toFixed(2);
    }
});

// Catch Custom Tip Button and Reset Button
const customButtonTip = document.getElementById('custom-tip-btn');
const resetButton = document.getElementById('reset')

customButtonTip.addEventListener('click', function () {
    let bill = parseFloat(document.getElementById('bill').value);
    let people = parseInt(document.getElementById('people').value);
    let tipAmount = parseFloat(document.getElementById('custom-tip').value);

    let [billPerPerson, tipPerPerson] = calculateTip(bill, people, tipAmount);

    document.getElementById('total-tip').innerText = billPerPerson.toFixed(2);
    document.getElementById('per-person').innerText = tipPerPerson.toFixed(2);
})

resetButton.addEventListener('click', function () {
    document.getElementById('total-tip').innerText = "0.00";
    document.getElementById('per-person').innerText = "0.00";
})

function calculateTip(bill = 0, people = 0, tip = 0, percentage = false) {
    if (percentage) {
        tip = (bill * tip) / 100;
    }
    let billPerPerson = (bill + tip) / people;
    let tipPerPerson = tip / people;

    return [billPerPerson, tipPerPerson];
}