/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  const winter = new Set([12,1,2]);
  const spring = new Set([3,4,5]);
  const summer = new Set([6,7,8]);
  const autumn = new Set([9,10,11]);

  // Edge case
  if(!(winter.has(month) || spring.has(month) || summer.has(month) || autumn.has(month))){
    return null;
  }

  switch(true){
    case (winter.has(month)):
      if(temperature < 0){
        return {
          "season": "Winter",
          "activity": "skiing"
        };
      } else if (temperature >= 0){
        return {
          "season": "Winter",
          "activity": "ice skating"
        };
      }
      break;
    case (spring.has(month)):
      if( temperature <= 20){
        return { 
          "season": "Spring",
          "activity": "museum visit"
        };
      } else if(temperature > 20){
        return { 
          "season": "Spring",
          "activity": "hiking"
        };
      }
      break;
    case (summer.has(month)):
      if(temperature <= 35){
        return { 
          "season": "Summer",
          "activity": "cycling"
        };
      }else if(temperature > 35){
        return { 
          "season": "Summer",
          "activity": "swimming"
        };
      }
      break;
    case ( autumn.has(month)):
      if(temperature <= 15){
        return { 
          "season": "Autumn",
          "activity": "reading at a cafe"
        };
      }else if(temperature > 15){
        return { 
          "season": "Autumn",
          "activity": "nature walk"
        };
      }
      break;
    default:
      return null;
  }
  return;
}

// // Unit Tests
// console.log(getSeasonActivity(12, 1));
// console.log(getSeasonActivity(1, 10));
// console.log(getSeasonActivity(2, -4));
// console.log(getSeasonActivity(3, 16));
// console.log(getSeasonActivity(4, 16));
// console.log(getSeasonActivity(5, 42));
// console.log(getSeasonActivity(6, 42));
// console.log(getSeasonActivity(7, 34));
// console.log(getSeasonActivity(8, 36));
// console.log(getSeasonActivity(9, 42));
// console.log(getSeasonActivity(10, 15));
// console.log(getSeasonActivity(11, 16));