describe('/Retira Facil/Bairros', () => {
    const helper = require('../../page-objects-freight/geral/helper.js');
    const retiraEnd = require('../../page-objects-freight/retira-facil-po/endereco.po.js');
    const partner = require('../../page-objects-freight/retira-facil-po/parceiros.po.js');

    const helperScreenshot = new helper();
    const retiraF = new retiraEnd();
    const partnerConsult = new partner();

    const namePartner = "Dafiti";
    const namePartnerUpdate = "Dafiti Atualizado";
    const codepartner = "10";

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no menu Retira Facil e no menu Parceiros', () => {
            it('Então devera visualizar o menu do GFG Pickup-Parceiros', () => {

                retiraF.retiraFacil.click();
                browser.sleep(1000);
                partnerConsult.partnerMenu.click();

                expect(partnerConsult.buttonPartnerRegister.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario acesse o menu GFG Pickup-Parceiros', () => {
        describe('Quando o usuario informar os dados do parceiro e clicar em Salvar', () => {
            it('Então devera visualizar o registro de um novo parceiro', () => {

                partnerConsult.buttonPartnerRegister.click();
                partnerConsult.selectStatus.click();
                partnerConsult.fillCodePartner(codepartner);
                partnerConsult.fillNamePartner(namePartner);
                partnerConsult.buttonPartnerSave.click();

                expect(partnerConsult.buttonPartnerRegister.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario acesse o menu GFG Pickup-Parceiros', () => {
        describe('Quando o usuario clicar para editar informar os dados e clicar em Salvar', () => {
            it('Então devera visualizar o registro do parceiro atualizado', () => {

                partnerConsult.editPartner.click();
                partnerConsult.fillNamePartner(namePartnerUpdate);
                partnerConsult.buttonPartnerSave.click();

                expect(partnerConsult.buttonPartnerRegister.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario queira excluir um Parceiro', () => {
        describe('Quando o usuario clicar para visualizar o Parceiro e clicar em Delete', () => {
            it('Então devera excluir o Parceiro', () => {

                partnerConsult.deletePartner.click();

                expect(partnerConsult.buttonPartnerRegister.isPresent()).toBeTruthy();
            });
        });
    });
});