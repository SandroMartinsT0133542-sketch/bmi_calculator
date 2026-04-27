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

const COLORS = {
  "Magreza grave": "bg-danger-subtle",
  "Magreza moderada": "bg-danger-subtle",
  "Magreza leve": "bg-danger-subtle",
  "Peso normal": "bg-success-subtle",
  "Pré-obesidade (Sobrepeso)": "bg-warning-subtle",
  "Obesidade grau I": "bg-danger-subtle",
  "Obesidade grau II": "bg-danger-subtle",
  "Obesidade grau III (Mórbida)": "bg-danger-subtle",
};

const getCategories = () => BMI_CATEGORIES;
const getCategoryColor = (category) =>
  COLORS[category] || "bg-secondary-subtle";
