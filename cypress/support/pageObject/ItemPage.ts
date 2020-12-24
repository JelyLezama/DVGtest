/**
 * Item to buy - Aliexpress
 */

class ItemPage {
    #productQuantity = "[class='product-quantity-tip']";

    //Validation quantity product
    public quantityProduct(): void {
            cy.get(this.#productQuantity).then(number => {
                const divNumber = parseInt(number.text()); //Number of product available 
                cy.log(divNumber.toString());
                if(divNumber >= 1) {
                    cy.log('You can buy the product');
                 }
                else {
                    cy.log('Product not available'); 
                 }
       });
    }
}
export const itemPage = new ItemPage();
