document.getElementById('tip-button').addEventListener('click', function (event) {
    var $input = event.target.value;
    if ($input === 'Custom') {
        document.getElementById('custom-tip-div').style.display = "block";
    }
    else {
        const [status, errors] = validateInputs(['bill', 'people']);

        if (status) {
            alert("Required input fields are missing");
        } else {
            let bill = parseFloat(document.getElementById('bill').value);
            let people = parseInt(document.getElementById('people').value);

            let [billPerPerson, tipPerPerson]
                = calculateTip(bill, people, parseFloat($input), true);

            document.getElementById('total-tip').innerText = billPerPerson.toFixed(2);
            document.getElementById('per-person').innerText = tipPerPerson.toFixed(2);
        }
    }
});

// Catch Custom Tip Button and Reset Button
const customButtonTip = document.getElementById('custom-tip-btn');
const resetButton = document.getElementById('reset')

customButtonTip.addEventListener('click', function () {
    const [status, errors] = validateInputs(['bill', 'people', 'custom-tip']);
    if (status) {
        alert("Required input fields are missing");
    } else {
        let bill = parseFloat(document.getElementById('bill').value);
        let people = parseInt(document.getElementById('people').value);
        let tipAmount = parseFloat(document.getElementById('custom-tip').value);

        let [billPerPerson, tipPerPerson] = calculateTip(bill, people, tipAmount);

        document.getElementById('total-tip').innerText = billPerPerson.toFixed(2);
        document.getElementById('per-person').innerText = tipPerPerson.toFixed(2);
    }
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

// validation rules

var decimalInputs = document.getElementsByClassName('decimal-only');
for (let i = 0; i < decimalInputs.length; i++) {
    decimalInputs[i].addEventListener('keyup', function (event) {
        let input = event.target.value;
        let expr = /^\d{0,8}(\.\d{0,2})?$/;
        if (!expr.test(input)) {
            decimalInputs[i].value = input.slice(0, -1);
        }
    });
}

var integerInputs = document.getElementsByClassName('integer-only');
for (let i = 0; i < integerInputs.length; i++) {
    integerInputs[i].addEventListener('keyup', function (event) {
        let input = event.target.value;
        let expr = /^\d{0,3}?$/;
        if (!expr.test(input)) {
            integerInputs[i].value = input.slice(0, -1);
        }
    });
}

function validateInputs(inputs = []) {
    let errorMessages = {};
    for (let i = 0; i < inputs.length; i++) {
        let attribute = inputs[i];
        let input = document.getElementById(attribute).value;

        if (!hasInput(input)) {
            errorMessages[attribute] = "Input " + attribute + " is required";
        }
    }

    return [(Object.entries(errorMessages).length > 0), errorMessages];
}

function hasInput(input) {
    return !((isNaN(input) || input == null || input == '' || input == 'undefined'));
}