import homepage from '../pageobjects/homepage.js';

beforeEach(() => {
  cy.visit('https://css-tricks.com/');
})

describe('Verifying CSS Home Page', () => {

  it('Menu List', () => {
    const page = new homepage();
    page.getArticles().should('be.visible')
    page.getVideos().should('be.visible')
    page.getAlmanac().should('be.visible')
    page.getNewsLetter().should('be.visible')
  })
})

  afterEach(() => {
    cy.screenshot()
  })
