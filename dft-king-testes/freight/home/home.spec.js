describe('/Home', () => {
    const helper = require('../page-objects-freight/geral/helper.js');

    const helperScreenshot = new helper();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://dev-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://dev-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario informe login e senha', () => {
        describe('Quando o usuario clicar em entrar', () => {
            it('Então devera visualizar a Home do Freight', () => {

                const menu = element(by.className('sidebar-toggle'));

                expect(menu.isPresent()).toBeTruthy();               
            });
        });
    });
});



