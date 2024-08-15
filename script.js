let apna_convertor = document.querySelector('#convertBtn')
let convertForm =document.querySelector("#ConvertForm")
// Temperature convertion function
convertForm.addEventListener('submit',(e)=> {
    e.preventDefault()
    const temperature = +(document.querySelector('#temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            result = temperature + 273.15;
        }

    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            result = ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            result = ((temperature - 273.15) * 9/5) + 32;
        }
    }

    let outputs = document.getElementById('output')
    outputs.innerText = ` ${result.toFixed(2)} is equal to ${toUnit}`;
    
    let temperaturekiHistory = (temp, from, result, to) => {
        const historyDiv = document.createElement('div');
        historyDiv.innerText = `${temp} ${from} = ${result.toFixed(2)} ${to}`;
        document.getElementById('output').appendChild(historyDiv);
    }
    temperaturekiHistory(temperature, fromUnit, result, toUnit);
})