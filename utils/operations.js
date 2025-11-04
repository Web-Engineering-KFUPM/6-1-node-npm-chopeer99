import { forEach } from "lodash"

export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((sub, num) => sub - num, 0);

export function multiply(numbers) {
  return numbers.reduce((mult, num) => mult * num, 0);
}

export function divide(numbers) {
  if(//divided by zero ){
    return numbers.reduce((div, num) => div / num, 0);
  }
  else{
    return console.log("You cant divide by zero");
  }
}