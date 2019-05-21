describe('/Black List/Time', () => {
    const helper = require('../page-objects-freight/geral/helper.js');
    const timeblack = require('../page-objects-freight/black-list-po/time.po.js');

    const helperScreenshot = new helper();
    const blacklist = new timeblack();

    const zip = {
        fromcode: '04251-100',
        tocode: '04251-101',
        priority: '1'
    }


    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar na Blacklist e no menu Time', () => {
            it('Então devera visualizar o menu Blacklist Time', () => {

                blacklist.blackList.click();
                browser.sleep(1000);
                blacklist.time.click();

                expect(blacklist.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });


    describe('Dado que o usuario clique para criar um novo Time', () => {
        describe('Quando o usuario informar dados do Time e clicar em Save', () => {
            it('Então devera visualizar o menu Blacklist Time', () => {

                blacklist.buttonCreateNew.click();
                blacklist.fillNewBlacklistTime(zip.fromcode, zip.tocode, zip.priority);
                blacklist.buttonSave.click();

                expect(blacklist.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario clique para criar um novo Time', () => {
        describe('Quando o usuario informar os mesmos dados do Time anterior e clicar em Save', () => {
            it('Então devera visualizar uma mensagem de Duplicidade', () => {

                const messageSucess = element(by.className('alert'));

                blacklist.buttonCreateNew.click();
                blacklist.fillNewBlacklistTime(zip.fromcode, zip.tocode, zip.priority);
                blacklist.buttonSave.click();

                expect(messageSucess.isPresent()).toBeTruthy();
            });
        });
    });

    describe('Dado que o usuario queira excluir um Transfer', () => {
        describe('Quando o usuario informar os mesmos dados do Time anterior e clicar em Save', () => {
            it('Então devera visualizar uma mensagem de Duplicidade', () => {

                blacklist.buttonBack.click();
                blacklist.buttonDelete.click();

                expect(blacklist.buttonCreateNew.isPresent()).toBeTruthy();
            });
        });
    });
});

