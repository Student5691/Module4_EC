// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while (isNaN(investment)) {
    investment = parseFloat(prompt('Non-numeric entry detected, please try again. Enter investment amount as xxxx.xx'));
}
rate = parseFloat(prompt('Enter interest rate as xx.x between 0% and 10%'));
while (isNaN(rate) || rate > 10 || rate < 0) {
    rate = parseFloat(prompt('Entry is non-numeric or outside the range of 0-10%, please try again. Enter interest rate as xx.x'));
}
years = parseInt(prompt('Enter the number of years, between 1 and 30, you want to invest for'));
while (isNaN(years) || years > 30 || years < 1) {
    years = parseInt(prompt('Entry is non-numeric or outside the range of 1-30, please try again. Enter the number of years, between 1 and 30, you want to invest for'));
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);