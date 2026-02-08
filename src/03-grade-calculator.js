/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param {number} score - The student's percentage score (0-100)
 * @param {boolean} hasExtraCredit - Whether the student has extra credit
 * @returns {string} The letter grade or "INVALID"
 */
export function calculateGrade(score, hasExtraCredit) {
  // Your code here
  const bonus = 5;
  let grade;
  let finalScore;

  if(score < 0 || score > 100){
    return "INVALID"
  }

  if(hasExtraCredit && score <= 95){
    finalScore = score + bonus;
  }else if(hasExtraCredit && [96, 97, 98, 99, 100].includes(score)){
    finalScore = 100;
  }else if(!hasExtraCredit){
    finalScore = score;
  }

  switch(true){
    case (finalScore >= 90 && finalScore <= 100):
      grade = "A";
      break;
    case (finalScore >= 80 && finalScore <=89):
      grade = "B";
      break;
    case (finalScore >= 70 && finalScore <= 79):
      grade = "C";
      break;
    case (finalScore >= 60 && finalScore <= 69):
      grade = "D";
      break;
    default:
      grade = "F";
    }

      return grade;
  }

// Unit testing
// console.log(calculateGrade(49,false));
// console.log(calculateGrade(59,false));
// console.log(calculateGrade(69,false));
// console.log(calculateGrade(79,false));
// console.log(calculateGrade(84,true));
// console.log(calculateGrade(89,true));
// console.log(calculateGrade(90,true));
// console.log(calculateGrade(95,true));
// console.log(calculateGrade(96,true));
// console.log(calculateGrade(100,true));
