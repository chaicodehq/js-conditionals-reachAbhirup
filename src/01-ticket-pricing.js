/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  let ticketPrice = 0;
  const weekendPriceHike = 3;

  // if age is -ve or NaN
  if(age < 0 || isNaN(age) || typeof isWeekend !== "boolean"){
    return -1;
  }

  if(isWeekend){
    ticketPrice = weekendPriceHike;
    if(age <=12 ){
      ticketPrice += 8; 
    }else if( age >= 13 && age <= 17 ){
      ticketPrice += 12;
    }else if(age > 17 && age < 60){
      ticketPrice += 15;
    }else {
      ticketPrice += 10;
    }
  }else{
    if(age <=12 ){
      ticketPrice += 8; 
    }else if( age >= 13 && age <= 17 ){
      ticketPrice += 12;
    }else if(age > 17 && age < 60){
      ticketPrice += 15;
    }else {
      ticketPrice += 10;
    }
  }
  
  return ticketPrice;
}

// // unit tests
// console.log(getTicketPrice(5, false));
// console.log(getTicketPrice(5, true));
// console.log(getTicketPrice('five', false));
// console.log(getTicketPrice(11, 2));
// console.log(getTicketPrice(-11, true));
// console.log(getTicketPrice(13,false));