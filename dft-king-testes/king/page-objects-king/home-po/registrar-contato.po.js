class ReigstrarContato {

    constructor() {
        this.brand = element(by.xpath("/html/body/div[5]/div/div/div[2]/div[13]/div/img"));
        this.registrarContato = element(by.xpath('//*[contains(@class, "btn btn-xs pull-right ng-scope bg-purple")]'));

        this.orderNumber = element(by.model("prt.orderNumber"));
        this.shipmentNumber = element(by.model("prt.shipmentNumber"));
        this.shipmentNumberReverse = element(by.model("prt.shipmentNumberReverse"));
        this.observation = element(by.id("dftNotes"));

        this.matrizTree = element(by.xpath("//div[@is-open='classificationMatrixTree.isopen']"));

        this.classification = element(by.xpath("//div[@is-open='classificationMatrixTree.isopen']"));
        this.classificationTree = element(by.xpath("//div[contains(@id,'classificationMatrixTree')]//div[contains(*,'Classificação')]"));
        this.classificationTreeClass = element(by.xpath("//div[contains(@id,'classificationMatrixTree')]//div[contains(*,'Teste')]"));
        this.classificationTreeTes = element(by.xpath("//div[contains(@id,'classificationMatrixTree')]//div[contains(*,'Teste_vivi')]"));
        this.classificationTreeSpam = element(by.xpath("//div[contains(@id,'classificationMatrixTree')]//div[contains(*,'Spam')]"));

        this.saveProtocol = element(by.xpath("(//*[contains(@id, 'save')])[2]"));
        this.confirmAttendance = element(by.id("btnYes"));

        this.home = element(by.css('[ng-click="goToDashboard()"]'));
    }

    identificacaoDoAtendimento() {

    }

    origemDoAtendimento(numberOrder, shipment) {
        this.orderNumber.clear();
        this.orderNumber.sendKeys(numberOrder);
        this.shipmentNumber.clear();
        this.shipmentNumber.sendKeys(shipment);
        this.shipmentNumber.sendKeys(protractor.Key.ENTER);
    }

    dadosDoProtocolo() {
        this.classification.click();
        this.classificationTree.click();
        this.classificationTreeClass.click();
        this.classificationTreeTes.click();
        this.classificationTreeSpam.click();
    }
}
module.exports = ReigstrarContato;