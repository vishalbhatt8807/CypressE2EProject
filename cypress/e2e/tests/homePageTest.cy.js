import { homePage } from "../Pages/homePage";
const homePObj = new homePage();
import testData from "../../fixtures/testData.json"
describe('Home Page', () => {
    before(()=>{
        cy.login(testData.login.userName,testData.login.password)
    })
    
    it('Select Product and validate alert', () => {
        homePObj.searchProduct(testData.product.productName)
        homePObj.addCart()
        homePObj.verifySuccessMessage().should('contain',testData.message.successMessage+1)
        
    });
});
