describe('/Retira Facil/Bairros', () => {
    const helper = require('../../page-objects-freight/geral/helper.js');
    const retiraEnd = require('../../page-objects-freight/retira-facil-po/endereco.po.js');

    const helperScreenshot = new helper();
    const retiraF = new retiraEnd();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no menu Retira Facil e no menu Estados', () => {
            it('Então devera visualizar o menu do GFG Pickup-Estados', () => {

                const country = element(by.linkText("Estados"))
                const button = element(by.xpath("(//*[contains(@title, 'Edit')])[1]"))

                retiraF.retiraFacil.click();
                browser.sleep(1000);
                country.click();

                expect(button.isPresent()).toBeTruthy();
            });
        });
    });
});