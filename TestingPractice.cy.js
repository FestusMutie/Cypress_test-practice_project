Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
  // failing the test
    return false
    })

it('visit url', ()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.url().should('include', 'testautomationpractice.blogspot.com')

it('should be able to type registration details')
  cy.wait(5000)
  cy.get('#name').type('Festus Mutie', { force: true })
  cy.get('#email').type('mutiefestus84@gmail.com', { force: true})
  cy.get('#phone').type('+254701768158', { force: true})
  cy.get('#textarea').type('Moi Ave',{ force: true})
  
it('select gender')
  cy.get('#male').click()

it('Select day of the week')
  cy.get('#monday').click()

it('Select Country')
  cy.get('#country').select('Canada')

it('Select Colour')
  cy.get('#colors').scrollIntoView().select('Red')

//it('should open cart link in a new origin',()=>{
//cy.visit('https://demo.opencart.com/')
//cy.contains('open cart').invoke('remove Attr','target').click()
   
    
//})


it('Select date')
cy.get('#datepicker').click()

it('confirm that table exists')
cy.get('#HTML1 > .widget-content').contains('BookName')

it('confirmation that pagination table exists')
cy.get('.table-container').contains('$10.99')
cy.get(':nth-child(1) > :nth-child(4) > input').click()
cy.get('#pagination > :nth-child(2) > a').click()

//it('confirm JS alerts')
//cy.get('[onclick="myFunctionPrompt()"]').click()
//cy.get('[onclick="myFunctionConfirm()"]').click()

//cy.on('window:confirm',(str)=>{
  //expect (str).to.equal('Please enter your name:')
 // return true
//})
//it('should copy text from #field1 to #field2 on double-click')
//cy.get('#field1').dblclick()
//cy.get('#field1').invoke('Hello World!').then('Hello World!')

it('search tab')
cy.get('#Wikipedia1_wikipedia-search-input').type('cypress.io')
cy.get('.wikipedia-search-button').click()

it('switch to new browser')
cy.get('#HTML4 > .widget-content > button').contains('New Browser Window')

})

