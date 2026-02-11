/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let finalPrice = 0.00;
  let lowerCaseSize = size.toLocaleLowerCase();
  let lowerCaseType = type.toLocaleLowerCase();

  // edge case
  if(!["small","medium","large"].includes(lowerCaseSize) || !["regular","latte","cappuccino","mocha"].includes(lowerCaseType)){
    return -1;
  }

  switch(lowerCaseSize){
    case "small":
      switch(lowerCaseType){
        case "regular":
          if (extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 3.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 0.75;
          } else {
            finalPrice = 3.00;
          }
          break;
        case "latte":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 1.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 3.00 + 1.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 1.00 + 0.75;
          } else {
            finalPrice = 3.00 + 1.0;
          }
          break;
        case "cappuccino":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 1.50 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 3.00 + 1.50 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 1.50 + 0.75;
          } else {
            finalPrice = 3.00 + 1.50;
          }
          break;
        case "mocha":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 2.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 3.00 + 2.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 3.00 + 2.00 + 0.75;
          } else {
            finalPrice = 3.00 + 2.00;
          }
          break;
      }
      break;
    case "medium":
      switch(lowerCaseType){
        case "regular":
          if (extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 4.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 0.75;
          } else {
            finalPrice = 4.00;
          }
          break;
        case "latte":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 1.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 4.00 + 1.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 1.00 + 0.75;
          } else {
            finalPrice = 4.00 + 1.0;
          }
          break;
        case "cappuccino":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 1.50 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 4.00 + 1.50 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 1.50 + 0.75;
          } else {
            finalPrice = 4.00 + 1.50;
          }
          break;
        case "mocha":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 2.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 4.00 + 2.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 4.00 + 2.00 + 0.75;
          } else {
            finalPrice = 4.00 + 2.00;
          }
          break;
      }
      break;
    case "large":
      switch(lowerCaseType){
        case "regular":
          if (extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 5.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 0.75;
          } else {
            finalPrice = 5.00;
          }
          break;
        case "latte":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 1.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 5.00 + 1.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 1.00 + 0.75;
          } else {
            finalPrice = 5.00 + 1.0;
          }
          break;
        case "cappuccino":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 1.50 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 5.00 + 1.50 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 1.50 + 0.75;
          } else {
            finalPrice = 5.00 + 1.50;
          }
          break;
        case "mocha":
          if(extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 2.00 + 0.50 + 0.75;
          } else if (extras["whippedCream"] && !extras["extraShot"]){
            finalPrice = 5.00 + 2.00 + 0.50;
          } else if (!extras["whippedCream"] && extras["extraShot"]){
            finalPrice = 5.00 + 2.00 + 0.75;
          } else {
            finalPrice = 5.00 + 2.00;
          }
          break;
      }
    break;
  }
  finalPrice = Number(finalPrice.toFixed(2));
  return finalPrice;
}

// Unit Tests
// console.log(calculateCoffeePrice("small","regular",{"whippedCream":true, "extraShot":true }));
// console.log(calculateCoffeePrice("small","regular",{"whippedCream":false, "extraShot":false }));
