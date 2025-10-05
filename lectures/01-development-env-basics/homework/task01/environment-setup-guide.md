# QA Automation Environment Setup Guide

### Prerequisites:

- Node.js 18.18+ (ESLint v9 requires Node 18.18 or newer)
- npm 9+
- VS Code (recommended) with ESLint and Prettier extensions

Setup:

```bash
# Install dependencies
npm install
```

# Open in VS Code and install the recommended extensions when prompted.

### Installation verification steps

Setup:

# Install dependencies

npm install

# Open in VS Code and install the recommended extensions when prompted.

# Check lint errors

npx eslint .

# Auto-fix lint issues where possible

npx eslint . --fix

# Check formatting

npx prettier . --check

# Format files in place

npx prettier . --write

# Tip: Install the "ESLint" and "Prettier - Code formatter" VS Code extensions for on-save feedback and formatting. See resources/lecture-01/extensions-settings.md for more details and helpful extensions.

# Run the example code

# You can run the JS examples directly with Node:

node lectures/01-development-env-basics/examples/02-javascript-variables.js
node lectures/01-development-env-basics/examples/03-javascript-functions.js
If you prefer, open the files in VS Code and use the built-in Run/Debug features.

### Troubleshooting

1. ESLint not running? Ensure Node is >= 18.18: node -v.

2. VS Code not showing lint errors? Make sure the ESLint extension is enabled and the workspace trust is granted.

3. Prettier not formatting on save? Check that the Prettier extension is installed and selected as the default formatter, and that Format on Save is enabled.

### Project Structure

# Top-level layout and where to look for things:

lectures/
01-development-env-basics/
examples/ # Small runnable JS examples from the lecture
02-javascript-variables.js
03-javascript-functions.js
04-devtools-practice.md
homework/ # Homework brief for this lecture
lecture-01-homework.md
practice/ # Practice tasks and helper functions
first-test-functions.js

resources/
lecture-01/ # Extra reading, tips, and settings
extensions-settings.md
lecture-01.md
npm-npx.md

homework-submission-guide.md # Branch/PR workflow, folder structure, naming
eslint.config.mjs # ESLint flat config (ES Modules)
package.json # Dev tooling (ESLint, Prettier); type: module
LICENSE
