/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  hours = Math.ceil(hours); 
  vehicleType = vehicleType.toLowerCase();

  // Edge cases
  if(hours <=0 || !["car", "motorcycle", "bus"].includes(vehicleType)){
    return -1;
  }

  let parkingFee = 0;

  switch(vehicleType){
    case "car":
      if (hours === 1){
        parkingFee = 5;
      }else{
        parkingFee = (5 + (3 * (hours-1))) >= 30 ? 30 : (5 + (3 * (hours-1)));
      }
      break;
    case "motorcycle":
      if(hours === 1){
        parkingFee = 3;
      }else{
        parkingFee = (3 + (2 * (hours-1))) >= 18 ? 18 : (3 + (2 * (hours-1)));
      }
      break;
    case "bus":
      if (hours === 1){
        parkingFee = 10;
      }else {
        parkingFee = (10 + (7 * (hours-1))) >= 60 ? 60 : (10 + (7 * (hours-1)));
      }
      break;
    default:
      parkingFee = -1;
  }

  return parkingFee;
}

/*
 11 - City Central: Parking Fee Calculator (9 pts)
    Car rates
      ✓ Car, 1 hour → $5 (3 ms)
      ✕ Car, 3 hours → $5 + $3 + $3 = $11 (3 ms)
      ✕ Car, 5 hours → $5 + 4×$3 = $17 (2 ms)
      ✓ Car, 10 hours → $5 + 9×$3 = $32 → capped at $30 (1 ms)
    Motorcycle rates
      ✓ Motorcycle, 1 hour → $3 (1 ms)
      ✕ Motorcycle, 4 hours → $3 + 3×$2 = $9 (1 ms)
      ✓ Motorcycle, 12 hours → $3 + 11×$2 = $25 → capped at $18 (1 ms)
    Bus rates
      ✕ Bus, 1 hour → $10 (2 ms)
      ✕ Bus, 3 hours → $10 + 2×$7 = $24 (2 ms)
      ✓ Bus, 10 hours → $10 + 9×$7 = $73 → capped at $60 (1 ms)
    Partial hours (round up)
      ✓ Car, 0.5 hours → rounds up to 1 → $5 (1 ms)
      ✕ Car, 1.1 hours → rounds up to 2 → $5 + $3 = $8 (1 ms)
      ✕ Motorcycle, 2.5 hours → rounds up to 3 → $3 + 2×$2 = $7 (1 ms)
    Invalid input
      ✓ 0 hours → -1 (1 ms)
      ✓ Negative hours → -1 (1 ms)
      ✓ Unknown vehicle "truck" → -1 (1 ms)
*/



console.log(calculateParkingFee(3, "Car"));
