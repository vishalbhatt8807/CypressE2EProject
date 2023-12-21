export class homePage{

    webLocators={
        search_input:'.form-control.input-lg',
        clickSearch: 'button[class="btn btn-default btn-lg"]',
        product:'img[title="MacBook"]',
        addto_Cart:`[onclick="cart.add('43', '1');"]`,
        alert:'.alert.alert-success.alert-dismissible'
    }

    searchProduct(productName){
        cy.get(this.webLocators.search_input).type(productName)
        cy.get(this.webLocators.clickSearch).click()
    }

    addCart(){
        cy.get(this.webLocators.product).should('be.visible')
        cy.get(this.webLocators.addto_Cart).click()
    }

    verifySuccessMessage(){
        return cy.get(this.webLocators.alert);
    }
}