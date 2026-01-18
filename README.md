# dashboard-zoo-cologne-challenge-zzfipciu

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/bajajshubham/dashboard-zoo-cologne-challenge-zzfipciu)

This dashboard allows zookeepers to get an overview of the animals and their relevant health data.

## Technical overview
### Tech stack
- Nuxt3 + vue3
- `TailwindCSS` for styling, `ESlint` for linting
- `Vitest` is used for testing
- `Typescript` for both frontend and backend
- Dev platform: `Stackblitz` (you may choose to work locally, but make sure the same code is able to run on stackblitz)
- Package manager: `pnpm`

### Available scripts
The scripts are stored in `package.json` file and can be executed by command `pnpm run <script_name>`. The following is the list of available scripts for developemnt:
- `dev` : To start the development server
- `build` : Builds the project for production
- `start` : To serve the production build
- `postinstall` : Runs after package is installed
- `lint` : Runs code quality tool (ESlint) 
- `typecheck` : runs vue-tsc to check types throughout the app
- `test` : To run the test files

### Steps to reproduce for development
1. Clone or fork the repository
2. Install the dependencies using command `pnpm install`. If you are working on Stackblitz, the dependencies will be installed automatically.
3. To start the application in development mode execute command `pnpm run dev`.
