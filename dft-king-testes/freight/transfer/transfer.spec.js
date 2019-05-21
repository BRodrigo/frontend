describe('/Home/Transfer', () => {
    const transfersEdit = require('../page-objects-freight/transfer-po/transfers.po.js');
    const helper = require('../page-objects-freight/geral/helper.js');

    const helperScreenshot = new helper();
    const configuraTransfers = new transfersEdit();

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
        // browser.get('http://client.freight.dev/set-groups?groups=FREIGHT_ADMIN');
        // browser.get('http://client.freight.dev/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight e o menu Transfer', () => {
        describe('Quando o usuario clicar no menu Transfer', () => {
            it('Então devera visualizar uma listagem', () => {

                const createNew = element(by.linkText('Create New'));

                configuraTransfers.transfers.click();
                expect(createNew.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario clique para criar um novo Transfer', () => {
        describe('Quando o usuario informar dados do Transfer e clicar em Save', () => {
            it('Então devera visualizar uma mensagem de Transfer(s) successfully updated/created.', () => {

                const messageSucess = element(by.className('alert'));

                configuraTransfers.newTransfer.click();
                configuraTransfers.selectWarehouseExpedition.click();
                configuraTransfers.fillCepRangeStart("06000-000");
                configuraTransfers.fillCepRangeEnd("07000-000");
                configuraTransfers.transferThreshold.sendKeys(10);
                configuraTransfers.deliveryType.first().click();
                configuraTransfers.fillDeliveryTypeEconomic(10);
                configuraTransfers.buttonSave.click();

               expect(messageSucess.isPresent()).toBeTruthy();
            });
        });
    });


    describe('Dado que o usuario visualize o modal', () => {
        describe('Quando o usuario clicar no último DeliveryType e informar um valor e save', () => {
            it('Então devera visualizar uma mensagem de Transfer(s) successfully updated/created.', () => {

                const messageSucess = element(by.className('alert'));

                configuraTransfers.buttonBack.click();

                configuraTransfers.action.click();

                configuraTransfers.edit.click();

                configuraTransfers.checkBox();
                browser.sleep(1000);
                configuraTransfers.fillDeliveryTypeTurboDayZero(10);
                configuraTransfers.buttonUpdate.click();

                expect(messageSucess.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario clique para criar um novo Transfer', () => {
        describe('Quando o usuario informar um CEP Start já cadastrado e clicar em Save', () => {
            it('Então devera visualizar uma mensagem de CEP End already exists.', () => {

                const messageAlert = element(by.className('alert-danger'));

                configuraTransfers.newTransfer.click();
                configuraTransfers.fillCepRangeStart("04060-003");
                configuraTransfers.buttonSave.click();

                expect(messageAlert.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario queira excluir um Transfer', () => {
        describe('Quando o usuario clicar para visualizar o Transfer e clicar em Delete', () => {
            it('Então devera excluir o transfer', () => {

                configuraTransfers.buttonBack.click();

                configuraTransfers.newAction.click();
                configuraTransfers.buttonDelete.click();

                expect(configuraTransfers.newTransfer.isPresent()).toBeTruthy();
            });
        });
    });
});