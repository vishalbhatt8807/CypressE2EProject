export class registerPage{

    weblocators={
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        pass_confirm: '#input-confirm',
        policy: 'input[type="checkbox"]',
        continue: 'input[type="submit"]'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(firstname){
        cy.get(this.weblocators.firstName).type(firstname)
    }
    enterLastName(lastname){
        cy.get(this.weblocators.lastName).type(lastname)
    }
    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterTelephone(phone){
        cy.get(this.weblocators.telephone).type(phone)
    }
    enterPassword(pass){
        cy.get(this.weblocators.password).type(pass)
        cy.get(this.weblocators.pass_confirm).type(pass)
    }
    checkPolicy(){
        cy.get(this.weblocators.policy).check();
    }
    
    clickContinue(){
        cy.get(this.weblocators.continue).click();
    }
}