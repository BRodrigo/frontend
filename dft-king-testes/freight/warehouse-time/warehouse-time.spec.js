describe('/Warehouse Time', () => {
    const helper = require('../page-objects-freight/geral/helper.js');
    const WarehouseTime = require('../page-objects-freight/warehouse-time-po/warehouse-time.po.js');

    const helperScreenshot = new helper();
    const warehouse = new WarehouseTime();

    const warehousetime = "1";
    const frompostcode = "04251100";
    const topostcode = "04251101";
    const topostcodeUpdate = "04251102";

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar no Freight-Price e no menu Warehouse Time', () => {
            it('Então devera visualizar o menu do Warehouse', () => {

                warehouse.warehouseTime.click();

                expect(warehouse.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario clique para criar um novo Warehouse', () => {
        describe('Quando o usuario informar dados do Warehouse e clicar em Save', () => {
            it('Então devera visualizar o novo Warehouse', () => {

                warehouse.buttonCreateNew.click();
                warehouse.fillWarehouseTime(warehousetime);
                warehouse.fillFromPostCode(frompostcode);
                warehouse.fillToPostCode(topostcode);
                warehouse.buttonSave.click();

                expect(warehouse.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario clique para criar um novo Warehouse', () => {
        describe('Quando o usuario informar um CEP já cadastrado e clicar em Save', () => {
            it('Então devera visualizar uma mensagem de CEP End already exists.', () => {

                const messageAlert = element(by.className('alert-danger'));

                warehouse.buttonCreateNew.click();
                warehouse.fillWarehouseTime(warehousetime);
                warehouse.fillFromPostCode(frompostcode);
                warehouse.fillToPostCode(topostcode);
                warehouse.buttonSave.click();

                expect(messageAlert.isPresent()).toBeTruthy();

                warehouse.buttonBack.click();
            });
        });
    });

    describe('Dado que o usuario clique para editar um Warehouse existente', () => {
        describe('Quando o usuario informar o dados a ser atualizar e clicar em Save', () => {
            it('Então devera visualizar o Warehouse atualizado', () => {

                warehouse.buttonEdit.click();
                warehouse.fillFromPostCode(topostcodeUpdate);
                warehouse.buttonSave.click();

                expect(warehouse.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario queira excluir um Warehouse', () => {
        describe('Quando o usuario clicar para visualizar o Warehouse e clicar em Delete', () => {
            it('Então devera excluir o Warehouse', () => {

                warehouse.buttonDelete.click();

                expect(warehouse.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });
});