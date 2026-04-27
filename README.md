# Calculadora de IMC (BMI Calculator)

Uma aplicação web interativa para calcular o Índice de Massa Corporal (IMC) segundo as categorias da Organização Mundial da Saúde (OMS).

## 🎯 Funcionalidades

- **Cálculo de IMC**: Insira peso (kg) e altura (m) para calcular o seu IMC
- **Categorização automática**: O resultado é automaticamente classificado segundo as categorias OMS
- **Validação de entrada**: Tratamento robusto de entradas inválidas com mensagens de erro visíveis
- **Interface responsiva**: Design adaptado para desktop e dispositivos móveis
- **Sem recarregar página**: Atualização dinâmica dos resultados sem recarregar a página
- **Modal informativo**: Informações detalhadas sobre o IMC e suas categorias

## 📋 Categorias de IMC (OMS)

| Categoria                    | Intervalo        |
| ---------------------------- | ---------------- |
| Magreza grave                | < 16,0           |
| Magreza moderada             | 16,0 - 16,99     |
| Magreza leve                 | 17,0 - 18,49     |
| **Peso normal**              | **18,5 - 24,99** |
| Pré-obesidade (Sobrepeso)    | 25,0 - 29,99     |
| Obesidade grau I             | 30,0 - 34,99     |
| Obesidade grau II            | 35,0 - 39,99     |
| Obesidade grau III (Mórbida) | ≥ 40             |

## 🏗️ Estrutura do Projeto

```
js/
├── index.html          # Página principal com formulário e layout
├── js/
│   ├── app.js          # Lógica de apresentação e interação DOM
│   ├── bmi.js          # Funções de cálculo do IMC
│   ├── categories.js   # Categorias OMS e utilitários de cor
│   └── modal.js        # Gerenciamento do modal informativo
└── README.md           # Este ficheiro
```

### 📄 Ficheiros Principais

#### **index.html**

- Estrutura HTML semântica
- Bootstrap 5 para estilo responsivo
- Formulário com campos de entrada para peso e altura
- Área de resultados e mensagens de erro
- Modal com informações sobre IMC

#### **js/app.js**

- Seleciona elementos do DOM com `querySelector`
- Lê valores dos campos e converte para número
- Chama as funções de cálculo do `bmi.js`
- Atualiza a página com resultados ou mensagens de erro
- Implementado com nível A (estrutura e estilo criados do zero)

#### **js/bmi.js**

- `calculateBMI(weight, height)`: Calcula o IMC
  - Retorna número com 2 casas decimais ou "Invalid input"
- `getBMICategory(bmi)`: Retorna a categoria OMS para um IMC
  - Valida o valor e mapeia para a categoria correspondente

#### **js/categories.js**

- Array `BMI_CATEGORIES`: Definições das categorias OMS
- `getCategoryColor(category)`: Retorna classe CSS de cor por categoria
- `isDangerousCategory(index)`: Identifica categorias de risco

#### **js/modal.js**

- Gerenciamento do modal informativo sobre IMC
- Integrado com Bootstrap modal

## 🚀 Como Usar

1. Abra o ficheiro `index.html` num navegador web
2. Introduza o seu peso em quilogramas (kg)
3. Introduza a sua altura em metros (m)
4. Clique no botão "Calcular IMC"
5. O resultado e a categoria OMS são apresentados instantaneamente

**Exemplos de entrada:**

- Peso: 70, Altura: 1.75 → IMC: 22.86 (Peso normal)
- Peso: 100, Altura: 1.75 → IMC: 32.65 (Obesidade grau I)
- Peso: 150, Altura: 1.75 → IMC: 48.98 (Obesidade grau III)

## ⚠️ Tratamento de Erros

A aplicação valida as seguintes situações inválidas:

- Campos vazios
- Valores zero ou negativos
- Entradas não numéricas
- Valores nulos ou indefinidos

Quando uma entrada inválida é detectada, uma mensagem de erro visível é apresentada na página.

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Bootstrap 5**: Framework CSS responsivo
- **JavaScript (ES6+)**: Lógica de aplicação
- **Bootstrap Icons**: Ícones

## 📦 Requisitos

Não há requisitos de instalação. A aplicação funciona directamente no navegador, abrindo o ficheiro `index.html`.

## 🧪 Casos de Teste

Todos os casos de teste do projeto anterior são validados:

**Casos válidos:**

- ✅ 70 kg, 1.75 m → 22.86, Peso normal
- ✅ 100 kg, 1.75 m → 32.65, Obesidade grau I
- ✅ 150 kg, 1.75 m → 48.98, Obesidade grau III

**Casos inválidos:**

- ✅ Campos vazios → Mensagem de erro visível
- ✅ Valores zero/negativos → Mensagem de erro visível
- ✅ Entradas com letras → Mensagem de erro visível

## 📝 Notas de Implementação

- A separação de responsabilidades: `bmi.js` contém apenas a lógica de cálculo, enquanto `app.js` cuida da apresentação
- O código utiliza `DOMContentLoaded` para garantir que o DOM está carregado antes de executar scripts
- Os resultados são atualizados dinamicamente sem recarregar a página
- Design responsivo funciona em dispositivos móveis e desktop

## 📖 Referência OMS

Para mais informações sobre o IMC e as suas categorias, consulte a [Organização Mundial da Saúde (OMS)](https://www.who.int/).

---
