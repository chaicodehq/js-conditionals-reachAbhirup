/**
 * 📦 ShopSwift Shipping Calculator
 *
 * ShopSwift is a growing online store. They've hired you to build their
 * shipping cost calculator. The cost depends on the package weight,
 * where it's going, and the order total.
 *
 * Domestic Shipping (country === "US"):
 *   - Weight up to 1 kg:   $5
 *   - Weight up to 5 kg:   $10
 *   - Weight over 5 kg:    $15
 *
 * International Shipping (any other country):
 *   - Weight up to 1 kg:   $15
 *   - Weight up to 5 kg:   $25
 *   - Weight over 5 kg:    $40
 *
 * Free Shipping:
 *   - Domestic orders over $50 get FREE shipping (return 0)
 *   - International orders over $100 get FREE shipping (return 0)
 *
 * Rules:
 *   - If weight is 0 or negative, return -1
 *   - If orderTotal is negative, return -1
 *
 * @param {number} weight - Package weight in kilograms
 * @param {string} country - Destination country code (e.g., "US", "UK", "IN")
 * @param {number} orderTotal - Total order amount in dollars
 * @returns {number} Shipping cost, 0 for free shipping, or -1 for invalid input
 */
export function calculateShipping(weight, country, orderTotal) {
  
  let shippingCost;

  // edge cases
  if( weight <= 0 || orderTotal < 0){
    return -1;
  }

  // US Shipping
  if( country === "US"){

    if( orderTotal > 50){    // FREE shipping category
      return 0;
    } else{
      switch(true){           //NON FREE shipping category
        case (weight <= 1):
          shippingCost = 5;
          break;
        case (weight > 1 && weight <= 5):
          shippingCost = 10;
          break;
        case (weight > 5 && orderTotal < 50):
          shippingCost = 15;
          break;
      }
    }

  }

  // International Shipping
  if( country !== "US"){
    
    if( orderTotal >100){     // FREE shipping category
      return 0;
    }else {
      switch(true){           //NON FREE shipping category
          case (weight <= 1):
            shippingCost = 15;
            break;
          case (weight > 1 && weight <= 5):
            shippingCost = 25;
            break;
          case (weight > 5  && orderTotal < 100):
            shippingCost = 40;
            break;
        }
    }
  }

  return shippingCost;
}

// // Unit Tests
// console.log(calculateShipping(1,"US",51));
// console.log(calculateShipping(1,"US",49));
// console.log(calculateShipping(4,"US",49));
// console.log(calculateShipping(5,"US",50));
// console.log(calculateShipping(6,"US",34));
// console.log(calculateShipping(0.5,"IN",34));
// console.log(calculateShipping(5,"UK",100));
// console.log(calculateShipping(6,"FR",160));
// console.log(calculateShipping(5.1,"IN",14));