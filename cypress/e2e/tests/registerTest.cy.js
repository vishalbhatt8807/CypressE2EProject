import { registerPage } from "../Pages/register";
const regObj = new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('Test Automation', () => {
    
    it('register Flow',()=>{
        regObj.openURL()
        regObj.enterFirstName(registerData.firstName)
        regObj.enterLastName(registerData.lastName)
        regObj.enterEmail(registerData.email)
        regObj.enterTelephone(registerData.telephone)
        regObj.enterPassword(registerData.password)
        regObj.checkPolicy()
        regObj.clickContinue()
    })
    
});