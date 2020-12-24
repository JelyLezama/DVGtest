/**
 * Home Page Aliexpress
 */

class HomePage {
    #baseUrl = Cypress.env('base_url');
    #search = "input[id='search-key']";
    #searchButton = "input[class='search-button']";
    #logo = "[class='logo-base']";
   
    #TEXT = "Iphone";

    //Go to home page
    public open(): void {
        cy.visit(this.#baseUrl);
        cy.get(this.#logo).should('be.visible'); //Validation
     }

     // Search within the web page
     public search(): void {
        cy.get(this.#search).clear().type(this.#TEXT);
        cy.get(this.#searchButton).click();
     }
}
export const homePage = new HomePage();