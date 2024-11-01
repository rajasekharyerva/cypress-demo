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

### Install extensions
    Cypress Snippet