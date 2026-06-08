// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if(!name) return;
  
  let nameNormalized = name.trim().toLowerCase();

  let time;
  
  switch (nameNormalized) {
    case 'pure strawberry joy':
      time = 0.5;
      break;
    case 'energizer':
      time = 1.5;
      break;
    case 'green garden':
      time = 1.5;
      break;
    case 'tropical island':
      time = 3;
      break;
    case 'all or nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if(wedgesNeeded < 1) return 0;
  
  let index = 0;
  let sumLimes = 0;
  let cutedWedges = 0;
  
  while (index < limes.length) {
    sumLimes += 1;

    let normalizedSizeName = limes[index].trim().toLowerCase();

    switch (normalizedSizeName){
      case 'small':
        cutedWedges += 6;
        break;
      case 'medium':
        cutedWedges += 8;
        break;
      case 'large':
        cutedWedges += 10;
        break;
    }

    index++;
    
    if (wedgesNeeded <= cutedWedges ) {
      break;
    }
  } 

  return sumLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let index = 0;
  let time = timeLeft;
  
  do {
    time -= timeToMixJuice(orders[index]);
    orders.shift();
  } while (index > orders.length || time > 0)
  
  return orders;
}
