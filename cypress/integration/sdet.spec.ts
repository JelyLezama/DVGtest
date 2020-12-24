import { homePage } from "../support/pageObject/HomePage";
import { itemPage } from "../support/pageObject/ItemPage";
import { whoSalePage } from "../support/pageObject/WhoSalePage";

describe('E2E SDET--SG Test', function() {

    beforeEach(() => {
        homePage.open();
    });

    it('Go to buy Aliexpress', function () {
        homePage.search();
        whoSalePage.nextPage();
        whoSalePage.buyProduct();
        itemPage.quantityProduct();
    });    
});