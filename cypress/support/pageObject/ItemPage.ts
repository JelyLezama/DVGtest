/**
 * Item to buy - Aliexpress
 */

class ItemPage {
    #productQuantity = "[class='product-quantity-tip']";

    public quantityProduct(): void {
            cy.get(this.#productQuantity).then(number => {
                const divNumber = parseInt(number.text());
                cy.log(divNumber.toString());
                if(divNumber >= 1) {
                    cy.log('Buy to product');
                 }
                else {
                    cy.log('Productxo no disponible'); 
                 }
       });
    }
}
export const itemPage = new ItemPage();
