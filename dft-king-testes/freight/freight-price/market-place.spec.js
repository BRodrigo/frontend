describe('/Retira Facil/Bairros', () => {
    const helper = require('../page-objects-freight/geral/helper.js');
    const FreightPlace = require('../page-objects-freight/freight-price-po/market-place.po.js');

    const helperScreenshot = new helper();
    const freightPrice = new FreightPlace();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no Freight-Price e no menu Market Place', () => {
            it('Então devera visualizar o menu do GFG Manager Postcode', () => {

                freightPrice.freightPrice.click();
                browser.sleep(1000);
                freightPrice.marketPlace.click()

                expect(freightPrice.buttonImportCsv.isPresent()).toBeTruthy();
                expect(freightPrice.buttonExportCsv.isPresent()).toBeTruthy();
            });
        });
    });
});