describe('/Black List/Date', () => {
    const helper = require('../page-objects-freight/geral/helper.js');
    const dateblack = require('../page-objects-freight/black-list-po/date.po.js');

    const helperScreenshot = new helper();
    const blacklist = new dateblack();

    const Date = "78635-000";

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/set-groups?groups=FREIGHT_ADMIN');
        browser.get('http://staging-freight-api.aws.dafitidev.com.br/admin');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });

    describe('Dado que o usuario acesse o Freight', () => {
        describe('Quando o usuario clicar na Blacklist e no menu Date', () => {
            it('Então devera visualizar o menu Date', () => {


                blacklist.blackList.click();
                browser.sleep(1000);
                blacklist.date.click();

                expect(blacklist.buttonFind.isPresent()).toBeTruthy();
            });
        });
    });
});