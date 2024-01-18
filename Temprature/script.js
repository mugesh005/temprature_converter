function convertTemperature() {
    // Get user input
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unitInput = document.getElementById('unit').value;
  
    // Check if the input is valid
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid temperature.');
      return;
    }
  
    // Perform conversions
    let celsius, fahrenheit, kelvin;
  
    switch (unitInput) {
      case 'celsius':
        celsius = temperatureInput;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        break;
      case 'fahrenheit':
        fahrenheit = temperatureInput;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        break;
      case 'kelvin':
        kelvin = temperatureInput;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        break;
      default:
        alert('Invalid unit selected.');
        return;
    }
  
    // Display the results
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>${celsius.toFixed(2)} &#8451;</p>
      <p>${fahrenheit.toFixed(2)} &#8457;</p>
      <p>${kelvin.toFixed(2)} K</p>
    `;
  }
  