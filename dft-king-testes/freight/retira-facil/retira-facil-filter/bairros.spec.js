describe('/Retira Facil/Bairros', () => {
    const helper = require('../../page-objects-freight/geral/helper.js');
    const retiraEnd = require('../../page-objects-freight/retira-facil-po/endereco.po.js');
    const retira = require('../../page-objects-freight/retira-facil-po/bairro.po.js');

    const helperScreenshot = new helper();
    const retiraF = new retiraEnd();
    const retiraFacil = new retira();

    const city = 'Centro';

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no menu Retira Facil e no menu Cidades', () => {
            it('Então devera visualizar o menu do GFG Pickup-Bairros', () => {

                retiraF.retiraFacil.click();
                browser.sleep(1000);
                retiraFacil.cityMenu.click();

                expect(retiraFacil.buttonSearch.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario acesse o Retira Fácil e o menu do GFG Pickup-Cidades', () => {
        describe('Quando o usuario informar um o status Ativo, Estado SP e Cidade Sao Paulo e clicar em Buscar', () => {
            it('Então devera visualizar Cidades Ativas', () => {

                const result = element(by.xpath("//*[contains(text(), 'SP')]"));

                retiraFacil.selectStatus.click();
                retiraFacil.selectCountry.click();
                browser.sleep(1000);
                retiraFacil.selectCity.click();
                retiraFacil.buttonSearch.click();

                expect(result).not.toBeLessThan(5);
            });
        });
    });

    describe('Dado que o usuario acesse o Retira Fácil e o menu do GFG Pickup-Cidades', () => {
        describe('Quando o usuario informar o nome de um bairro e clicar em Buscar', () => {
            it('Então devera retornar o bairro informada', () => {

                const result = element(by.xpath("//*[contains(text(), 'Centro')]")).getText();

                retiraFacil.fillNameFilter(city);
                retiraFacil.buttonSearch.click();

                expect(result).toContain(city);
            });
        });
    });
});