/**
 * Who Sale - Aliexpress
 */

class WhoSalePage {
    #listPagination = "[class='list-pagination']";
    #listElements = "[class='list-items']";
    #itemValidate = "[product-index='%s']";
    #pageList = "[class='next-pagination-list']";
    #item= ".list-item:nth-child(%s) .place-container > a";

    #NUMBER_PRODUCT = "1";
    #NUMBER_ITEM = "2";
    #NEXT = "Next"; 

    public nextPage(): void {
        cy.get(this.#listPagination).scrollIntoView({duration: 2000});
        cy.get(this.#pageList).children().should('have.length.above', 1);
        cy.contains(this.#NEXT).click();
    }

    public buyProduct(): void {
        cy.get(this.#listElements).children().should('have.length.above', 1);
        cy.get(this.#itemValidate.replace("%s", this.#NUMBER_PRODUCT)).should('be.visible');
        cy.get(this.#item.replace("%s", this.#NUMBER_ITEM)).then (function(value){
            const url= value.prop('href');
            cy.visit(url);
        });
    }
}
export const whoSalePage = new WhoSalePage();