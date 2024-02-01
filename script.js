const inputValue = document.getElementById("text");
const toFahrenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

console.log(inputValue.value)

function covert() {
    if(toFahrenheit.checked) {
        temp = Number(inputValue.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)} °F`;
    } else if(toCelcius.checked) {
        temp = Number(inputValue.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp.toFixed(1)} °C`
    } else {
        result.textContent = "Select a Unit"
    }
}