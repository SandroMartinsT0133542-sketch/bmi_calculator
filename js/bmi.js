/* O Índice de Massa Corporal (IMC) é uma medida internacional usada pela OMS.
Permite avaliar se o peso de uma pessoa é adequado à sua altura.
Fórmula:
IMC =peso (kg) / altura (m)2
*/

/**
 * Calculates the Body Mass Index (BMI).
 * @param {number} weight - Weight in kilograms.
 * @param {number} height - Height in meters.
 * @returns {number|string} BMI rounded to 2 decimal places, or "Invalid ,→ input".
 */

function calculateBMI(weight, height) {
  const isInvalidNumber =
    isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0;

  if (isInvalidNumber) return "Invalid input";

  const bmi = weight / Math.pow(height, 2);
  return parseFloat(bmi.toFixed(2));
}

/**
 * Returns the WHO category for a given BMI value.
 * @param {number} bmi - BMI value.
 * @returns {string} Category label, or "Invalid input".
 */

function getBMICategory(bmi) {
  if (isNaN(bmi) || bmi <= 0) {
    return "Invalid input";
  }
  const categories = getCategories();

  for (const category of categories) {
    if (bmi >= category.min && bmi < category.max) {
      return category.label;
    }
  }
  return "Invalid input";
}
