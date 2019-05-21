describe('/Warehouse Time', () => {
    const helper = require('../page-objects-freight/geral/helper.js');
    const carriers = require('../page-objects-freight/carriers-routes-po/carriers-management.po.js');

    const helperScreenshot = new helper();
    const carriersManagement = new carriers();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no Carriers & Routes e no menu Carriers Management', () => {
            it('Então devera visualizar o menu do Carriers Management', () => {

                carriersManagement.carriersRoutes.click();
                browser.sleep(1000);
                carriersManagement.carriersManagement.click();

                expect(carriersManagement.buttonCreateNew.isPresent()).toBeTruthy();
                expect(carriersManagement.buttonSave.isPresent()).toBeTruthy();
            });
        });
    });
});