// Nível A
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#bmi-form");
  const weightInput = document.querySelector("#weight");
  const heightInput = document.querySelector("#height");
  const calculateButton = document.querySelector('button[type="submit"]');
  const bmiValue = document.querySelector("#bmi-value");
  const bmiCategory = document.querySelector("#bmi-category");
  const message = document.querySelector("#message");
  const resultSection = document.querySelector("section.mt-4");

  if (
    !form ||
    !weightInput ||
    !heightInput ||
    !calculateButton ||
    !bmiValue ||
    !bmiCategory ||
    !message
  ) {
    return;
  }

  function showMessage(text) {
    message.textContent = text;
    message.classList.remove("d-none");
  }

  function hideMessage() {
    message.textContent = "";
    message.classList.add("d-none");
  }

  function renderResult(bmi, category) {
    const color = getCategoryColor(category);
    resultSection.classList.add(color);
    bmiValue.textContent = bmi;
    bmiCategory.textContent = category;
  }

  /**
   * Handles invalid input by displaying an appropriate message and resetting the result display.
   * @param {number|string} value - The value to check for validity (BMI or category).
   * @param {string} type - The type of value being checked ("bmi" or "category").
   * @returns {boolean} - Returns true if the input is invalid and has been handled, false otherwise.
   */
  const handleInvalidInput = (value, type) => {
    if (type !== "bmi" && type !== "category")
      throw new Error(`Invalid input type: ${type}`);

    const errorMessages = {
      bmi: "Introduza valores válidos para peso e altura. Use números positivos.",
      category: "Não foi possível determinar a categoria do IMC.",
    };

    if (value === "Invalid input") {
      bmiValue.textContent = "-";
      bmiCategory.textContent = "-";
      showMessage(errorMessages[type] || "Entrada inválida.");
      return true;
    }
    return false;
  };

  function handleCalculation(event) {
    event.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    if (
      handleInvalidInput(bmi, "bmi") ||
      handleInvalidInput(category, "category")
    )
      return;

    hideMessage();
    renderResult(bmi, category);
  }

  calculateButton.addEventListener("click", handleCalculation);
  form.addEventListener("submit", handleCalculation);
});
