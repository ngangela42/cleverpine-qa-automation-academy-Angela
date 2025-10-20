# Homework: Functions and Code Organization

**Course section:** Lectures 05 — Functions and Code Organization  
**Goal:** Practice clean, reusable JavaScript functions using declarations, parameters, scope, and different function types.

---

## Folder structure

lectures/
└── 05-functions-and-code-organization/
└── homework/
├── task01/
│ └── functions-declarations-basics.js
├── task02/
│ └── parameters-and-returns.js
├── task03/
│ └── function-types.js
├── task04/
│ └── scope-experiments.js
└── reusable-test-utilities-demo.js

## Task 1: Function Declarations — Removing Duplication

**File:** `task01/functions-declarations-basics.js`

### Objective

Refactor repetitive test logic into clean function declarations.

### Functions

- **`countPassedTests(results)`** — counts `"PASS"` values in an array
- **`formatExecutionTime(milliseconds)`** — formats milliseconds as `"123ms"` or `"1.2s"`
- **`findFailedTests(testNames, testResults)`** — returns names with result `"FAIL"`

### Concepts used

- Function declarations
- `for` loops
- `if/else`
- `toFixed(1)`
- String concatenation

### Example output

---

## Task 2: Parameters and Return Values

**File:** `task02/parameters-and-returns.js`

### Objective

Work with input parameters and return values to build reusable validators and formatters.

### Functions

- **`isValidEmail(email)`** — checks for `"@"`, `"."` and non-empty string
- **`formatDuration(milliseconds)`** — formats time like in lecture examples
- **`generateTestEmail(baseName, domain)`** — returns `baseName@domain`, with default `"testcompany.com"`

### Concepts used

- Parameters and return values
- String methods: `.includes()` and `.length`
- Conditional logic

### Example output

---

## Task 3: Function Types — Declarations vs. Expressions vs. Arrow Functions

**File:** `task03/function-types.js`

### Objective

Re-implement the same logic using three different function syntaxes.

### Functions

**Format test result (3 variants):**

- `formatTestResultDecl(testName, status)`
- `formatTestResultExpr`
- `formatTestResultArrow`

**Calculate average (3 variants):**

- `calculateAverageDecl(numbers)`
- `calculateAverageExpr`
- `calculateAverageArrow`

### Concepts used

- Function declarations / expressions / arrow functions
- Ternary operator `condition ? a : b`
- Array `.reduce()`

### Example output

---

## Task 4: Scope — Global vs. Function Scope

**File:** `task04/scope-experiments.js`

### Objective

Demonstrate how global and local variables behave differently.

### Functions

- **`runTest(testName, attempts)`** — uses global config inside, creates local vars (`attempts`, `testResult`)
- **`configureRetries(newMaxRetries)`** — updates global variable `maxRetries`

### Concepts used

- Global vs. function (local) scope
- Reading and modifying globals
- Demonstrating variable visibility

### Example output

> _Note:_ Uncommenting `console.log(attempts)` outside the function causes an error —  
> because `attempts` is **function-scoped**.

---

## Integration: Reusable Test Utilities Demo

**File:** `reusable-test-utilities-demo.js`

### Objective

Reuse the utilities from Tasks 1–4 to generate a compact console report.

### Steps

1. Define arrays: `names`, `results`, `times`
2. Reuse your functions from previous tasks
3. Print:
   - **BASIC METRICS** — total, passed, success rate
   - **FAILURES** — failed test names
   - **FORMATTED TIMES** — formatted durations
   - **EMAIL VALIDATION** — 2–3 examples
   - **FORMATTED RESULTS** — icons + statuses
   - **SCOPE DEMO (optional)** — reuse `runTest`

### Example output

---

## Summary:

| Task     | Focus                 | Key Concepts                             |
| -------- | --------------------- | ---------------------------------------- |
| **01**   | Function Declarations | Loops, basic logic, removing duplication |
| **02**   | Parameters & Returns  | Input/output, string checks              |
| **03**   | Function Types        | Declarations, expressions, arrows        |
| **04**   | Scope                 | Global vs. local variables               |
| **Demo** | Integration           | Reuse functions across files             |

---

## Run Instructions:

Make sure you’re in the repository root, then run:

```bash
node lectures/05-functions-and-code-organization/homework/task01/functions-declarations-basics.js
node lectures/05-functions-and-code-organization/homework/task02/parameters-and-returns.js
node lectures/05-functions-and-code-organization/homework/task03/function-types.js
node lectures/05-functions-and-code-organization/homework/task04/scope-experiments.js
node lectures/05-functions-and-code-organization/homework/reusable-test-utilities-demo.js
```
