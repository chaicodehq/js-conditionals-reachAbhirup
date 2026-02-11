/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {

  // Edge cases
  if(typeof password !== "string" || password.length === 0){
    return "weak";
  }


  const specialCharacters = new Set(
    ("!@#$%^&*()_+-=[]{}|;:,.<>?").split("")
  );  
  
  const passwordArray = password.split("");

  const isMatchingMinLengthCriteria = (passwordArray.length >= 8);

  const hasUpperCaseLetter = passwordArray.some(
    char => char >= 'A' && char <= 'Z'
  );
  const hasLowerCaseLetter = passwordArray.some(
    char => char >= 'a' && char <= 'z'
  );
  const hasNumericLetter   = passwordArray.some(
    char => char >= '0' && char <= '9'
  );
  const hasSpecialChar     = passwordArray.some(
    char => specialCharacters.has(char)
  );

  let criteriaCount = 0;
  
  let response;

  if(isMatchingMinLengthCriteria){
    criteriaCount++;
  }
  if(hasUpperCaseLetter){
    criteriaCount++;
  }
  if(hasLowerCaseLetter){
    criteriaCount++;
  }
  if(hasNumericLetter){
    criteriaCount++;
  }
  if(hasSpecialChar){
    criteriaCount++;
  }

  switch(true){
    case (criteriaCount <= 1):
      response = "weak";
      break;
    case (criteriaCount > 1 && criteriaCount <= 3):
      response = "medium";
      break;
    case (criteriaCount === 4):
      response = "strong";
      break;
    default:
      response = "very strong";
  }
  return response;
}

// unit tests
// console.log(checkPasswordStrength("abhirup"));
// console.log(checkPasswordStrength("Abhirup"));
// console.log(checkPasswordStrength("Abhirup_Roy"));
// console.log(checkPasswordStrength("Abhirup_Roy26"));