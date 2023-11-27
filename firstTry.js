//the kelvin degree is constant
const Kelivn = 293;
//celsius is 273 degrees less than kelvin
const celsius = Kelivn-273;
var Newton = Math.floor( celsius*(33/100));
//now calculating fehrenheit 
var fehrenheit;
//flooring the reuslts bc this usually will give a decimal val
fehrenheit = Math.floor( celsius * (9/5) + 32);

console.log(`The temperature is ${fehrenheit} degrees Fahrenheit.`);
console.log(Newton);