/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  if(billAmount <= 0 || ![1, 2, 3, 4, 5].includes(serviceRating)){
    return null;
  }
  
  const finalBill = {};

  switch(serviceRating){
    case 1:
      finalBill.tipPercentage = 5;
      finalBill.tipAmount = .05 * billAmount;
      finalBill.totalAmount = billAmount + finalBill.tipAmount;
      break;
    case 2:
      finalBill.tipPercentage = 10;
      finalBill.tipAmount = billAmount * 0.1;
      finalBill.totalAmount = billAmount + finalBill.tipAmount;
      break;
    case 3:
      finalBill.tipPercentage = 15;  
      finalBill.tipAmount = billAmount * 0.15;
      finalBill.totalAmount = billAmount + finalBill.tipAmount;
      break;
    case 4:
      finalBill.tipPercentage = 20;  
      finalBill.tipAmount = billAmount * 0.2;
      finalBill.totalAmount = billAmount + finalBill.tipAmount;
      break;
    case 5:
      finalBill.tipPercentage = 25;  
      finalBill.tipAmount = billAmount * 0.25;
      finalBill.totalAmount = billAmount + finalBill.tipAmount;
      break;
    default:
      finalBill.tipPercentage = 0;  
      finalBill.tipAmount = 0;
      finalBill.totalAmount = 0;
  }
  return finalBill;
}

// unit tests
// console.log(calculateTip(0, 5));
// console.log(calculateTip(50, 5));
// console.log(calculateTip(50, 4));
// console.log(calculateTip(50, 3));
// console.log(calculateTip(50, 2));
// console.log(calculateTip(50, 1));