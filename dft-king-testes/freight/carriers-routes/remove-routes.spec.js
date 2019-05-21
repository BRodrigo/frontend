describe('/Carriers & Routes', () => {
    const helper = require('../page-objects-freight/geral/helper.js');
    const carriers = require('../page-objects-freight/carriers-routes-po/remove-routes.po.js');

    const helperScreenshot = new helper();
    const removeRoutes = new carriers();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no Carriers & Routes e no menu Remove Routes', () => {
            it('Então devera visualizar o menu do Remove Routes', () => {

                removeRoutes.carriersRoutes.click();
                browser.sleep(1000);
                removeRoutes.deleteRoutes.click();

                expect(removeRoutes.selectChooseCurrier.isPresent()).toBeTruthy();
                expect(removeRoutes.buttonRemove.isPresent()).toBeTruthy();
            });
        });
    });
});