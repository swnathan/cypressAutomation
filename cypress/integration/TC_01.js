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

  it('Articles', () => {
    const page = new homepage();
    page.getArticles().should('be.visible')
     page.getArticles().click()
     cy.url().should('contain','/archives')
  })

  it('Search Box', () => {
    const page = new homepage();
     page.getSearchBox().should('be.visible')
     page.getSearchBox().type('articles')
     cy.wait(1000)
     cy.get('.jetpack-instant-search__search-results-title'). should('be.visible');
  })
})

  afterEach(() => {
    cy.screenshot()
  })
