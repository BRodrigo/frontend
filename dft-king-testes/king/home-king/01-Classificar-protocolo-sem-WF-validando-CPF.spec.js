describe('/Home/King', () => {
    const global = require('../../global-spec.js');
    const helper = require('../page-objects-king/geral/helper.js');
    const contato = require('../page-objects-king/home-po/registrar-contato.po.js');

    const helperScreenshot = new helper();
    const novoContato = new contato();

    const protocol = {
        OrderNumber: '17356585',
        ShipmentNumber: '8014276839'
    }

    beforeAll(() => {
        global.getBrowser('#/app/dashboard');
    });

    afterEach(() => {
        helperScreenshot.takeShot();
    });
    describe('Dado que o cliente informou login e senha e clicou em entrar', () => {
        describe('Quando clicar em Registrar Contato e informar os dados', () => {
            it('Então devera classificar um protocolo sem WF validando CPF', () => {
                $list = element.all(by.repeater("channel in listChannel"));

                browser.sleep(2000);
                novoContato.registrarContato.click();

                browser.sleep(1000);
                novoContato.brand.click();

                browser.sleep(1000);
                novoContato.origemDoAtendimento(protocol.OrderNumber, protocol.ShipmentNumber);
                novoContato.observation.sendKeys('Teste');

                novoContato.dadosDoProtocolo();

                browser.sleep(2000);
                expect((novoContato.saveProtocol).isDisplayed()).toBeTruthy();
                novoContato.saveProtocol.click();

                browser.sleep(2000);
                novoContato.confirmAttendance.click();

                browser.sleep(2000);
                novoContato.home.click();

                expect($list.count()).toBeGreaterThan(5);
            });
        });
    });
});

