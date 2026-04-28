const BG_COLORS = {
  danger: "bg-danger-subtle",
  success: "bg-success-subtle",
  warning: "bg-warning-subtle",
  secondary: "bg-secondary-subtle",
};

const CATEGORIES_LABELS = {
  underweightSevere: "Magreza grave",
  underweightModerate: "Magreza moderada",
  underweightMild: "Magreza leve",
  normal: "Peso normal",
  overweight: "Pré-obesidade (Sobrepeso)",
  obesity1: "Obesidade grau I",
  obesity2: "Obesidade grau II",
  obesity3: "Obesidade grau III (Mórbida)",
};

const BMI_CATEGORIES = [
  { label: CATEGORIES_LABELS.underweightSevere, min: 1, max: 16.0 },
  { label: CATEGORIES_LABELS.underweightModerate, min: 16.0, max: 16.99 },
  { label: CATEGORIES_LABELS.underweightMild, min: 17.0, max: 18.49 },
  { label: CATEGORIES_LABELS.normal, min: 18.5, max: 24.99 },
  { label: CATEGORIES_LABELS.overweight, min: 25.0, max: 29.99 },
  { label: CATEGORIES_LABELS.obesity1, min: 30.0, max: 34.99 },
  { label: CATEGORIES_LABELS.obesity2, min: 35.0, max: 39.99 },
  { label: CATEGORIES_LABELS.obesity3, min: 40.0, max: Infinity },
];

const COLORS = {
  [CATEGORIES_LABELS.underweightSevere]: BG_COLORS.danger,
  [CATEGORIES_LABELS.underweightModerate]: BG_COLORS.danger,
  [CATEGORIES_LABELS.underweightMild]: BG_COLORS.danger,
  [CATEGORIES_LABELS.normal]: BG_COLORS.success,
  [CATEGORIES_LABELS.overweight]: BG_COLORS.warning,
  [CATEGORIES_LABELS.obesity1]: BG_COLORS.danger,
  [CATEGORIES_LABELS.obesity2]: BG_COLORS.danger,
  [CATEGORIES_LABELS.obesity3]: BG_COLORS.danger,
};

const getCategories = () => BMI_CATEGORIES;
const getCategoryColor = (category) => COLORS[category] || BG_COLORS.secondary;
