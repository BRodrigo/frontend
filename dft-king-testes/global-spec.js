module.exports = {
    user: {
        isAdmin: true,
    },
    mocky: {
        organizacao: 'Dharma Initiative',
        usuario: {
            nome: 'Chris Martin',
        },
        projeto: 'Meu Primeiro Projeto',
        workflow: 'Driving faster',
        daterange: {
            start: '01/03/2017',
            end: '10/04/2017'
        }
    },
    logado: false,
    getBrowser(url) {
        if (!this.logado) {
            this.logar();
        }

        this.getUrl(url);
    },
    wait(timeout = 100) {
        browser.sleep(timeout);
    },
    getUrl(url) {
        browser.driver.get(`${browser.baseUrl}${url}`);
    },
    logar() {
        browser.waitForAngularEnabled(true);
        this.getUrl('login');
        browser.sleep(1000);
        this.findElement(by.xpath('/html/body/div[1]/div/div/div[1]/div[2]/form/div[1]/input')).sendKeys(browser.params.login.email);
        browser.sleep(1000);
        this.findElement(by.xpath('/html/body/div[1]/div/div/div[1]/div[2]/form/div[2]/input')).sendKeys(browser.params.login.senha);
        browser.sleep(1000);
        this.findElement(by.xpath("//*[contains(text(),'Entrar')]")).click();

        this.logado = true;
    },
    naoTemPermissao() {
        var mensagem = element(by.id('main')).getText();
        expect(mensagem).toEqual('Você não possui permissão para realizar essa operação.');
    },
    naoTemAcesso() {
        var mensagem = element(by.css('p.margin-top')).getText();
        expect(mensagem).toEqual('Você não tem permissão para realizar a ação desejada.');
    },

    naoTemAcessoApontamentos() {
        var mensagem = element(by.id('main')).getText();
        expect(mensagem).toEqual('Voc� n�o tem permiss�o para visualizar apontamentos de outros usu�rios!');
    },
    findElement(elem) {
        return browser.driver.findElement(elem);
    },
    findElements(elem) {
        return browser.driver.findElements(elem);
    },
    select2First(select2Locator, opt_query) {
        var selector = select2Locator + ' a.select2-choice',
            options = element.all(by.css('.select2-results-dept-0'));

        browser.driver.executeScript('$(arguments["0"]).mousedown();', (selector));

        if (opt_query) {
            browser.driver.switchTo().activeElement().sendKeys(opt_query);
        }

        browser.driver.wait(() => options.count().then(count => 0 < count), 2000);

        options.first().click();
    },
    waitForUrlToChangeTo(time) {
        var currentUrl;

        return browser.getCurrentUrl()
            .then(url => currentUrl = url)
            .then(() => browser.wait(() => browser.getCurrentUrl().then(url => currentUrl != url), time));
    },

    pressEnter(){
        browser.actions().sendKeys(protractor.Key.ENTER).perform();       
    }
};
