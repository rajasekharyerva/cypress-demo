# Cypress
### Open README.md Preview
    Right click on README.md
    select Open Preview
### Check if Node.js is Installed
    node -v
### Install Node.js
    brew install node
### Initialize a New Node Project
    mkdir cypress-demo
    cd cypress-demo
    npm init -y

### Install Cypress
    npm install cypress --save-dev

### Open Cypress
    npx cypress open

### Create a New Test File
    Go to the cypress/e2e directory
    Create a new file named login.spec.js

### Alternate Open Cypress
    #package.json
    {
    "scripts": {
        "cy:open": "cypress open"
    }
    }

    npm run cy:open

## Funtions & Uses 
**describe() Function**
    Groups related tests together. Here, it describes "Login Functionality."
**it() Function**
    Defines a single test case
**beforeEach() Function**
    Runs before each test
**afterEach() Function**
    Runs after each test
**expect Assertion**
    expect(true).to.equal(true)
**visit**
used to navigate to a specific URL within your test
**contains**
searches the DOM for an element that contains the specified text
**click()**
**url().should('include', '/commands/actions')**
**get('.action-email').type('fake@email.com')**
**get('.action-email').should('have.value', 'fake@email.com')**
**.check(), .uncheck(), and .select()**
**task('db:seed')**
Jest: npm install --save-dev @types/jest
npm install --save-dev @types/cypress
Mocha: npm install --save-dev @types/mocha
npm install --save-dev @types/cypress


### Install extensions
    https://docs.cypress.io/app/tooling/IDE-integration#Intelligent-Code-Completion
    Cypress Snippet
    Cypress Fixture-IntelliSense
    Cypress Helper
    Cypress Snippets
    Cypress Snippets
    Open Cypress
    Test Utils
    npm install eslint eslint-plugin-cypress --save-dev
    "lint": "eslint cypress/**/*.js",
    npm run lint
    npm install -g yarn
    yarn --version
    brew install yarn
    npm install -g ncp
    npm install -g cross-env
    npm install --save-dev concurrently
    npm install --legacy-peer-deps
    npm install react@16 react-dom@16
    npm install --force
    yarn install | npm install
    npm install --save-dev chalk
    npm install --save-dev @types/chalk
    npm install react@16 react-dom@16
    npm list react
    yarn build-for-devtools
    yarn

    Cmd + Z-Undo
    Cmd +Shift +Z-Redo

cypress.config.js/ts
export default defineConfig({
  e2e: {
    experimentalStudio: true,
  },
})