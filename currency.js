let fromCurrency = document.getElementById('from-currency');
let toCurrency = document.getElementById('to-currency');
let amountInput = document.getElementById('amount');
let output = document.getElementById('output');


let exchangeRates = {};


function getExchangeRate(baseCurrency) {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("Exchange rates fetched:", data);
            exchangeRates = data.rates;
            convertCurrency();
        })
        .catch(function(error) {
            console.error("Error fetching exchange rates:", error);
            output.textContent = "Error";
        });
}



function convertCurrency() {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        output.textContent = "0";
        return;
    }

    const toCurrencyCode = toCurrency.value;
    const rate = exchangeRates[toCurrencyCode];

    if (rate) {
        const convertedAmount = amount * rate;
        updateUI(convertedAmount);
        updateDetailedResult(amount, fromCurrency.value, rate, toCurrency.value, convertedAmount);

    } else {
        output.textContent = "N/A";
    }
}


function updateUI(value) {
    output.textContent = value.toFixed(2);
}

function updateDetailedResult(amount, from, rate, to, converted) {
    const resultFinal = document.getElementById('conversion-result');
    if (!resultFinal) return;

    resultFinal.innerHTML = `
        1 ${from} = ${rate.toFixed(2)} ${to} <br>
        ${amount} ${from} = ${converted.toFixed(2)} ${to}
    `;
}



fromCurrency.addEventListener("change", () => {
    getExchangeRate(fromCurrency.value);
});

toCurrency.addEventListener("change", convertCurrency);

amountInput.addEventListener("input", convertCurrency);

getExchangeRate(fromCurrency.value);



