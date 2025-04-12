// Temperature Conversion Program
const text = document.getElementById("text");

const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){
    temp = Number(text.value);
    if(toFahrenheit.checked){
        // temp = Number(text.value);
        temp = ((temp * (9/5)) + 32);
        if(temp >= 90){result.textContent = `${temp.toFixed(1)}F°🔥🌡`;}
        else if(temp <= 32){result.textContent = `${temp.toFixed(1)}F°🧊🌡`;}
        else{result.textContent = `${temp.toFixed(1)}F°🌡`;}
    }
    else if(toCelsius.checked){
        
        temp = (temp - 32)*(5/9);
        if(temp >= 30){result.textContent = `${temp.toFixed(1)}C°🔥🌡`;}
        else if(temp <= 0){result.textContent = `${temp.toFixed(1)}C°🧊🌡`;}
        else{result.textContent = `${temp.toFixed(1)}C°🌡`;}
    }
    else{
        result.textContent = "Select a temperature unit...";
    }

}