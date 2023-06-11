import BasePage from '../pageObjects/Base.page.js';
import GridPage from '../pageObjects/Grid.page.js';

describe('My First Test', () => {
  context('Actions', () => {    
    before(() => {
      BasePage.Visit;
    })
    
    it('Pressing grid buttons', () => {
      //clicking on grid tab
      BasePage.GridTab.click();
      //clicking buttons
      GridPage.ButtonTwo.click();
      GridPage.ButtonFour.click();
      GridPage.ButtonSix.click();
      GridPage.ButtonEight.click();
      //validating buttons are active
      GridPage.ButtonTwo.should('have.class', 'active');
      GridPage.ButtonFour.should('have.class', 'active');
      GridPage.ButtonSix.should('have.class', 'active');
      GridPage.ButtonEight.should('have.class', 'active');
      //validating that other buttons are not highlighted
      GridPage.ButtonOne.should('not.have.class', 'active');
      GridPage.ButtonThree.should('not.have.class', 'active');
      GridPage.ButtonFive.should('not.have.class', 'active');
      GridPage.ButtonSeven.should('not.have.class', 'active');
      GridPage.ButtonNine.should('not.have.class', 'active');
    })
  })
})
