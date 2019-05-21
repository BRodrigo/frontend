describe('/Home/King', () => {
    const global = require('../../global-spec.js');
    const helper = require('../page-objects-king/geral/helper.js');

    const helperScreenshot = new helper();

    beforeAll(() => {
        global.getBrowser('#/app/dashboard');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });
    describe('Dado que acesse o King', () => {

        describe('Quando informar login e senha e clicar no Entrar', () => {

            it('Então devera visualizar o painel de Dashboard', () => {
                $list = element.all(by.repeater("channel in listChannel"));

                browser.sleep(1000);
                expect($list.count()).toBeGreaterThan(5);
            });
        });
    });
});

