//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  let lastDigt = number.toString().slice(-1);
  let lastTwoDigits = number.toString().slice(-2);
  
  if (lastDigt === "1" && lastTwoDigits !== "11") {
    return `${name}, you are the ${number}st customer we serve today. Thank you!`
  } else if (lastDigt === "2" && lastTwoDigits !== "12") {
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`
  } else if (lastDigt === "3" && lastTwoDigits !== "13") {
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`
  } else {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`
  }
};
