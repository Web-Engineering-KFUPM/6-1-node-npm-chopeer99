import { forEach } from "lodash"

export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  let sum;
  for (number in numbers){
    sum -= number;
  }
  return sum; 
}

export function multiply(numbers) {
  let sum;
  for (number in numbers){
    sum += number;
  }
  return sum; 
}

export function divide(numbers) {
  let sum;
  for (number in numbers){
    sum += number;
  }
  return sum; 
}

