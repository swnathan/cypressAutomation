class homepage {

    getArticles() {
        return cy.get('li[class="articles"]');
    }

    getVideos() {
        return cy.get('li[class="videos"]');
    }

    getAlmanac() {
        return cy.get('li[class="almanac"]');
    }

    getNewsLetter() {
        return cy.get('li[class="newsletter"]');
    }

    getSearchBox() {
        return cy.get('input[type="search"]');
    }
}
export default homepage