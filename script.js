const inputTemp = document.getElementById("inputTemp");
const celsiusRadio = document.querySelector("input[value='celsius']");
const convertBtn = document.getElementById("convertBtn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    const tempValue = parseFloat(inputTemp.value);

    if (isNaN(tempValue)) {
        output.textContent = "Please enter a valid number.";
        return;
    }

    if (celsiusRadio.checked) {
        const convertedTemp = (tempValue * 9/5) + 32;
        output.textContent = `Converted temperature: ${convertedTemp.toFixed(2)} °F`;
    } else {
        const convertedTemp = (tempValue - 32) * 5/9;
        output.textContent = `Converted temperature: ${convertedTemp.toFixed(2)} °C`;
    }
});
