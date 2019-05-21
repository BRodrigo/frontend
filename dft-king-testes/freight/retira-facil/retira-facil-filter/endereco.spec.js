describe('/Retira Facil/Endereco', () => {
    const helper = require('../../page-objects-freight/geral/helper.js');
    const retira = require('../../page-objects-freight/retira-facil-po/endereco.po.js');

    const helperScreenshot = new helper();
    const retiraFacil = new retira();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no menu Retira Facil', () => {
            it('Então devera visualizar o menu do Retira Facil', () => {

                retiraFacil.retiraFacil.click();
                browser.sleep(1000);
                retiraFacil.address.click();

                expect(retiraFacil.buttonSearch.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario acesse o Retira Facil e o menu Endereços', () => {
        describe('Quando o usuario informar um o status Inativo no filtro e clicar em Buscar', () => {
            it('Então devera retornar dados de acordo com o status informado no Filtro', () => {

                const result = element(by.xpath("//*[contains(text(), 'Não')]"));

                retiraFacil.selectStatusInative.click();
                retiraFacil.buttonSearch.click();

                expect(retiraFacil.buttonSearch.isPresent()).toBeTruthy();
                expect(result).not.toBeLessThan(10);
            });
        });
    });


    describe('Dado que o usuario acesse o Retira Facil e o menu Endereços', () => {
        describe('Quando o usuario informar um nome no filtro e clicar em Buscar', () => {
            it('Então devera retornar um endereço de acordo com o nome informado no Filtro', () => {

                const result = element(by.xpath("//*[contains(text(), 'AC ASSIS BRASIL')]"));

                retiraFacil.selectStatus.click();
                retiraFacil.buttonSearch.click();

                retiraFacil.fillNameFilter("AC ASSIS BRASIL");
                retiraFacil.buttonSearch.click();

                expect(retiraFacil.buttonSearch.isPresent()).toBeTruthy();
                expect(result).not.toBeLessThan(1);
            });
        });
    });

    describe('Dado que o usuario acesse o Retira Facil e o menu Endereços', () => {
        describe('Quando o usuario informar um Estado no filtro e clicar em Buscar', () => {
            it('Então devera retornar um endereço de acordo com o Estado informado no Filtro', () => {

                const result = element(by.xpath("//*[contains(text(), 'SP')]"));

                retiraFacil.filterName.clear();
                retiraFacil.buttonSearch.click();

                retiraFacil.selectCountry.click();
                retiraFacil.buttonSearch.click();

                expect(retiraFacil.buttonSearch.isPresent()).toBeTruthy();
                expect(result).not.toBeLessThan(5);
            });
        });
    });

    describe('Dado que o usuario acesse o Retira Facil e o menu Endereços', () => {
        describe('Quando o usuario informar um CEP no filtro e clicar em Buscar', () => {
            it('Então devera retornar um endereço de acordo com o CEP informado no Filtro', () => {

                const result = element(by.xpath("//*[contains(text(), '11089-110')]"));

                retiraFacil.fillZipCode("11089-110");
                retiraFacil.buttonSearch.click();

                expect(retiraFacil.buttonSearch.isPresent()).toBeTruthy();
                expect(result).not.toBeLessThan(3);
            });
        });
    });
})