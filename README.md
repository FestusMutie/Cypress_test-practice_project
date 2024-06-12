# Cypress Test Automation for Test Automation Practice Blog

## Overview
This repository contains Cypress automated tests for the Test Automation Practice Blog web application. The tests cover various functionalities such as form submission, selecting options, interacting with elements, and verifying table contents.

## Prerequisites
Before running the tests, ensure you have the following installed:
- Node.js (version 12 or higher)
- Cypress (version 6.0 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/test-automation-practice.git
   ```
2. Navigate to the project directory:
   ```bash
   cd test-automation-practice
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Tests
To run the tests, use the following command:
```bash
npx cypress open
```
This will open the Cypress Test Runner. Select the test file you want to run to execute the tests.

## Test Structure
The tests are organized in a single file. Here is a brief overview of the test scenarios:

### Test 1: Visit URL
- Visits the Test Automation Practice Blog website.
- Verifies the URL contains `testautomationpractice.blogspot.com`.

### Test 2: Type Registration Details
- Waits for 5 seconds.
- Types in the name, email, phone number, and address in the registration form.

### Test 3: Select Gender
- Selects the gender "Male".

### Test 4: Select Day of the Week
- Selects "Monday".

### Test 5: Select Country
- Selects "Canada" from the country dropdown.

### Test 6: Select Colour
- Scrolls into view and selects "Red" from the color dropdown.

### Test 7: Select Date
- Clicks on the date picker.

### Test 8: Confirm Table Exists
- Verifies the presence of a table containing "BookName".

### Test 9: Confirm Pagination Table Exists
- Verifies the pagination table contains "$10.99".
- Clicks on the pagination controls.

### Test 10: Search Tab
- Searches for "cypress.io" using the Wikipedia search input.
- Clicks the search button.

### Handling Uncaught Exceptions
The following code snippet prevents Cypress from failing the test in case of uncaught exceptions:
```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
```

## Test File
```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from failing the test
   return false;
});

it('visit url', () => {
  cy.visit('https://testautomationpractice.blogspot.com/');
  cy.url().should('include', 'testautomationpractice.blogspot.com');
});

it('should be able to type registration details', () => {
  cy.wait(5000);
  cy.get('#name').type('Festus Mutie', { force: true });
  cy.get('#email').type('mutiefestus84@gmail.com', { force: true });
  cy.get('#phone').type('+254701768158', { force: true });
  cy.get('#textarea').type('Moi Ave', { force: true });
});

it('select gender', () => {
  cy.get('#male').click();
});

it('Select day of the week', () => {
  cy.get('#monday').click();
});

it('Select Country', () => {
  cy.get('#country').select('Canada');
});

it('Select Colour', () => {
  cy.get('#colors').scrollIntoView().select('Red');
});

it('Select date', () => {
  cy.get('#datepicker').click();
});

it('confirm that table exists', () => {
  cy.get('#HTML1 > .widget-content').contains('BookName');
});

it('confirmation that pagination table exists', () => {
  cy.get('.table-container').contains('$10.99');
  cy.get(':nth-child(1) > :nth-child(4) > input').click();
  cy.get('#pagination > :nth-child(2) > a').click();
});

it('search tab', () => {
  cy.get('#Wikipedia1_wikipedia-search-input').type('cypress.io');
  cy.get('.wikipedia-search-button').click();
});

it('switch to new browser', () => {
  cy.get('#HTML4 > .widget-content > button').contains('New Browser Window');
});
```

## Conclusion
This README provides an overview of the Cypress automated tests for the Test Automation Practice Blog application. Follow the installation and running instructions to execute the tests. The tests cover various interactions and verifications to ensure the application's core functionalities work as expected.
