/**
 * 🌤️ TrailBuddy - The Hiking Weather App
 *
 * You're building a weather advisory feature for TrailBuddy, a popular
 * hiking app used by thousands of outdoor enthusiasts. Based on the
 * temperature (in Celsius) and whether it's raining, the app should
 * display helpful advice to hikers.
 *
 * Advisory Rules (check in this exact order):
 *   - temp >= 35              → "Too hot for hiking - stay indoors and hydrate"
 *   - temp >= 25 and no rain  → "Great weather for hiking - don't forget sunscreen"
 *   - temp >= 25 and raining  → "Warm but rainy - consider indoor activities"
 *   - temp >= 15 and no rain  → "Perfect hiking weather - enjoy the trails"
 *   - temp >= 15 and raining  → "Cool and rainy - bring waterproof gear if hiking"
 *   - temp >= 5 and no rain   → "Chilly - wear layers for your hike"
 *   - temp >= 5 and raining   → "Cold and wet - best to stay indoors"
 *   - temp < 5                → "Too cold - stay warm indoors"
 *
 * @param {number} temperature - Temperature in Celsius
 * @param {boolean} isRaining - Whether it's currently raining
 * @returns {string} The weather advisory message
 */
export function getWeatherAdvice(temperature, isRaining) {
  // Your code here
  let response;

  switch(true){
    case ( temperature >= 35):
      response = "Too hot for hiking - stay indoors and hydrate";
      break;
    case ( temperature >= 25 && !isRaining):
      response = "Great weather for hiking - don't forget sunscreen";
      break;
    case ( temperature >= 25 && isRaining):
      response = "Warm but rainy - consider indoor activities";
      break;
    case ( temperature >= 15 && !isRaining):
      response = "Perfect hiking weather - enjoy the trails";
      break;
    case ( temperature >= 15 && isRaining):
      response = "Cool and rainy - bring waterproof gear if hiking";
      break;
    case ( temperature >= 5 && !isRaining):
      response = "Chilly - wear layers for your hike";
      break;
    case ( temperature >= 5 && isRaining):
      response = "Cold and wet - best to stay indoors";
      break;
    default:
      response = "Too cold - stay warm indoors"
  }

  return response;
}
// Unit tests
// console.log(getWeatherAdvice(4,true));
// console.log(getWeatherAdvice(3,false));
// console.log(getWeatherAdvice(5,false));
// console.log(getWeatherAdvice(5,true));
// console.log(getWeatherAdvice(6, false));
// console.log(getWeatherAdvice(7, true));
// console.log(getWeatherAdvice(15, true));
// console.log(getWeatherAdvice(17, false));
// console.log(getWeatherAdvice(25, true));
// console.log(getWeatherAdvice(28, false));
// console.log(getWeatherAdvice(35, false));
// console.log(getWeatherAdvice(38, true));
