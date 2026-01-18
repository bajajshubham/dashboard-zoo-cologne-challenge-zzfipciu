# Cologne Zoo Dashboard

This dashboard allows zookeepers to get an overview of the animals and their relevant health data.

## Project Description

The project presents a scenario where the Cologne Zoo's IT infrastructure needs repair after a cyberattack. As the new IT Director, your mission is to restore the Zoo Dashboard, enhance its functionality, and document it effectively. The dashboard provides an overview of animals, their health, feeding plans, and operational logistics for zookeepers.

## Tech stack

- Nuxt3 + vue3
- `TailwindCSS` for styling, `ESlint` for linting
- `Vitest` is used for testing
- `Typescript` for both frontend and backend
- Dev platform: `Stackblitz` (you may choose to work locally, but make sure the same code is able to run on stackblitz)
- Package manager: `pnpm`

## Steps to reproduce for development

1. Clone or fork the repository
2. Install the dependencies using command `pnpm install`. If you are working on Stackblitz, the dependencies will be installed automatically.
3. To start the application in development mode execute command `pnpm run dev`.

## Project Structure

- **`app.vue`**: Main Vue.js application file displaying the dashboard layout and fetching animal data.
- **`components/`**: Houses reusable Vue components. E.g., `TheAnimalTable.vue` lists animals with details such as name, species, age, and required food.
- **`utils/`**: Contains utility scripts for calculations. For example, `useCalculateRequiredFood.ts` computes the required food for animals.
- **`TASKS.md`**: Provides details on the challenge steps, tasks, and important observations during development.
- **`README.md`**: (You're reading it!) Documents project's functionality, running instructions, and developer guidelines.
- **`nuxt.config.ts`**: Configuration file for Nuxt.js framework, enabling modules and dev tools.
- **`.eslint.config.js`**: Linting configuration to maintain code quality.
- **`package.json`**: Lists scripts, dependencies, and configurations for development, testing, and production.

## Testing and Development

### Available scripts

The scripts are stored in `package.json` file and can be executed by command `pnpm run <script_name>`. The following is the list of available scripts for developemnt:

- `dev` : To start the development server
- `build` : Builds the project for production
- `start` : To serve the production build
- `postinstall` : Runs after package is installed
- `lint` : Runs code quality tool (ESlint)
- `typecheck` : runs vue-tsc to check types throughout the app
- `test` : To run the test files

### Steps to Test Locally

- Ensure that `vitest` is installed using PNPM.
- Execute `pnpm test` to validate functionalities.

## Features

1. **Current Functionality**:
   - Animal listing with details (name, species, age, weight, etc.)
   - Computation of monthly food requirements
   - Display of the dashboard interface for zookeepers
2. **Planned Enhancements**:
   - Feeding plans (assign meals, track inventory, and schedule meals)
   - Dashboard UI improvements and bug fixes

## Contribution Guidelines

- Follow the ESLint rules defined in `eslint.config.js`.
- Commit changes with meaningful messages.

## Support

For any issues, please contact the dashboard admin: `"admin@zoo-cologne.de"`.
Collaborators can log bugs or improvement suggestions in the repository's Issues section.

Enjoy fixing and enhancing the Cologne Zoo Dashboard! 🐾
