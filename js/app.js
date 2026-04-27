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

    console.log("resultSection", resultSection);
    resultSection.classList.add(color);

    bmiValue.textContent = bmi;
    bmiCategory.textContent = category;
  }
  function handleCalculation(event) {
    event.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = calculateBMI(weight, height);

    if (bmi === "Invalid input") {
      bmiValue.textContent = "-";
      bmiCategory.textContent = "-";
      showMessage(
        "Introduza valores válidos para peso e altura. Use números positivos.",
      );
      return;
    }

    const category = getBMICategory(bmi);

    if (category === "Invalid input") {
      bmiValue.textContent = "-";
      bmiCategory.textContent = "-";
      showMessage("Não foi possível determinar a categoria do IMC.");
      return;
    }

    hideMessage();
    renderResult(bmi, category);
  }

  calculateButton.addEventListener("click", handleCalculation);
  form.addEventListener("submit", handleCalculation);
});
