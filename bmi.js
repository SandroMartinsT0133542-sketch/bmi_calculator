/* O Índice de Massa Corporal (IMC) é uma medida internacional usada pela OMS.
Permite avaliar se o peso de uma pessoa é adequado à sua altura.
Fórmula:
IMC =peso (kg) / altura (m)2
*/

const BMI_CATEGORIES = [
  { label: "Magreza grave", min: 1, max: 16.0 },
  { label: "Magreza moderada", min: 16.0, max: 16.99 },
  { label: "Magreza leve", min: 17.0, max: 18.49 },
  { label: "Peso normal", min: 18.5, max: 24.99 },
  { label: "Pré-obesidade (Sobrepeso)", min: 25.0, max: 29.99 },
  { label: "Obesidade grau I", min: 30.0, max: 34.99 },
  { label: "Obesidade grau II", min: 35.0, max: 39.99 },
  { label: "Obesidade grau III (Mórbida)", min: 40.0, max: Infinity },
];

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

  for (const category of BMI_CATEGORIES) {
    if (bmi >= category.min && bmi < category.max) {
      return category.label;
    }
  }
  return "Invalid input";
}

// Test cases
console.log(calculateBMI(70, 1.75)); // 22.86
console.log(getBMICategory(22.86)); // "Peso normal"
console.log(calculateBMI(0, 1.75)); // "Invalid input"
console.log(calculateBMI(-10, 1.75)); // "Invalid input"
console.log(calculateBMI(70, 0)); // "Invalid input"
console.log(calculateBMI(70, -1.75)); // "Invalid input"
console.log(calculateBMI("abc", 1.75)); // "Invalid input"
console.log(calculateBMI(70, "aaaa")); // "Invalid input"
console.log(calculateBMI(null, 1.75)); // "Invalid input"
console.log(calculateBMI(70, undefined)); // "Invalid input"
console.log(getBMICategory(-5)); // "Invalid input"
console.log(getBMICategory(15)); // "Magreza grave"
console.log(getBMICategory(16.5)); // "Magreza moderada"
console.log(getBMICategory(17.5)); // "Magreza leve"
console.log(getBMICategory(22)); // "Peso normal"
console.log(getBMICategory(27)); // "Pré-obesidade (Sobrepeso)"
console.log(getBMICategory(32)); // "Obesidade grau I"
console.log(getBMICategory(37)); // "Obesidade grau II"
console.log(getBMICategory(45)); // "Obesidade grau III (Mórbida)"

// get database from sql sample.db

function getall() {
  queryDatabase("SELECT * FROM bmi_records").then((rows) => {
    rows.forEach((row) => {
      const bmi = calculateBMI(row.weight, row.height);
      const category = getBMICategory(bmi);
      console.log(
        `ID: ${row.id}, Weight: ${row.weight}, Height: ${row.height}, BMI: ${bmi}, Category: ${category}`,
      );
    });
  });
}

function getNotesAverage() {
  const tablerows = Array.from(document.getElementsByTagName("tr"));

  tablerows.shift(); // Remove the header row
  for (let i = 0; i < tablerows.length; i++) {
    console.log(
      `${tablerows[i].children[2].innerText} - ${tablerows[i].children[3].innerText}`,
    );
  }

  // add average method to the array prototype
  Array.prototype.average = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += parseFloat(this[i].children[3].innerText);
    }
    return sum / this.length;
  };

  console.log(`------------------------------`);
  console.log(`Average: ${tablerows.average().toFixed(2)}`);
}

function createTableElements() {
  const tbody = document.getElementById("table-body");

  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      if (j === 0) {
        td.innerText = `Aluno ${i + 1}`;
      } else if (j === 1) {
        td.innerText = `Nota ${j + 1}`;
      } else {
        td.innerText = `Classificação ${j + 1}`;
      }
    }
  }
}

const arr = [
  "andre.alves.T0133527@edu.atec.pt",
  "bernardo.pinteus.T0133706@edu.atec.pt",
  "Camila.Franca.T0133529@edu.atec.pt",
  "Caroline.Meijerink.T0133530@edu.atec.pt",
  "Claudia.Alfieri.T0133531@edu.atec.pt",
  "gabriel.valverde.T0133626@edu.atec.pt",
  "Goncalo.Silva.T0123533@edu.atec.pt",
  "Hosana.Guimaraes.T0133533@edu.atec.pt",
  "Joao.Amaral.T0098049@edu.atec.pt",
  "Joao.Mateus.T0133534@edu.atec.pt",
  "Joao.Pinheiro.T0133535@edu.atec.pt",
  "Melanio.Francisco.T0133537@edu.atec.pt",
  "Pedro.Goncalves.T0133538@edu.atec.pt",
  "Ricardo.Lopes.T0133539@edu.atec.pt",
  "Ricardo.Tavares.T0133540@edu.atec.pt",
  "Sandro.Martins.T0133542@edu.atec.pt",
  "Vicente.Cassule.T0133543@edu.atec.pt",
];

console.log(arr.filter((email) => email.includes("T")));
