/**
 * Who Sale - Aliexpress
 */

class WhoSalePage {
    #listPagination = "[class='list-pagination']";
    #listElements = "[class='list-items']";
    #nextPage = "[product-index='%s']";
    #item= ".list-item:nth-child(%s) .place-container > a";

    #NUMBER_PRODUCT = "1";
    #NUMBER_ITEM = "2";
    #NEXT = "Next"; 

    public nextPage(): void {
        cy.get(this.#listPagination).scrollIntoView({duration: 2000});
        cy.contains(this.#NEXT).click();
    }

    public buy(): void {
        cy.get(this.#listElements).children().should('have.length.above', 1);
        cy.get(this.#nextPage.replace("%s", this.#NUMBER_PRODUCT)).should('be.visible');
        cy.get(this.#item.replace("%s", this.#NUMBER_ITEM)).then (function(value){
            const url= value.prop('href');
            cy.visit(url);
        });
    }
}
export const whoSalePage = new WhoSalePage();