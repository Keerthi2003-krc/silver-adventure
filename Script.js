function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    
    let valueInMeters;

    // Convert input value to meters first
    switch(inputUnit) {
        case "meters":
            valueInMeters = inputValue;
            break;
        case "centimeters":
            valueInMeters = inputValue / 100;
            break;
        case "millimeters":
            valueInMeters = inputValue / 1000;
            break;
        case "decimeters":
            valueInMeters = inputValue / 10;
            break;
        case "decameters":
            valueInMeters = inputValue * 10;
            break;
        case "hectometers":
            valueInMeters = inputValue * 100;
            break;
        case "kilometers":
            valueInMeters = inputValue * 1000;
            break;
        case "miles":
            valueInMeters = inputValue * 1609.34;
            break;
        case "feet":
            valueInMeters = inputValue * 0.3048;
            break;
        default:
            valueInMeters = inputValue;
    }

    let convertedValue;

    // Convert meters to the desired output unit
    switch(outputUnit) {
        case "meters":
            convertedValue = valueInMeters;
            break;
        case "centimeters":
            convertedValue = valueInMeters * 100;
            break;
        case "millimeters":
            convertedValue = valueInMeters * 1000;
            break;
        case "decimeters":
            convertedValue = valueInMeters * 10;
            break;
        case "decameters":
            convertedValue = valueInMeters / 10;
            break;
        case "hectometers":
            convertedValue = valueInMeters / 100;
            break;
        case "kilometers":
            convertedValue = valueInMeters / 1000;
            break;
        case "miles":
            convertedValue = valueInMeters / 1609.34;
            break;
        case "feet":
            convertedValue = valueInMeters / 0.3048;
            break;
        default:
            convertedValue = valueInMeters;
    }

    document.getElementById('outputValue').innerText = `Converted Value: ${convertedValue}`;
}
