class Transfers {

    constructor() {
        this.transfers = element(by.xpath("//*[contains(text(),'Transfer')]"));
        this.action = element(by.xpath("(//*[contains(@title,'Show')])[2]"));
        this.edit = element(by.buttonText("Edit"));
        this.deliveryType = element.all(by.className("delivery-type-checkbox"));
        this.deliveryTypeName = element.all(by.className("delivery-type-transfer-time"));
        this.deliveryTypeNameX = element(by.xpath("(//*[contains(@class, 'delivery-type-transfer-time')])[9]"));
        this.buttonUpdate = element(by.buttonText("Update"));
        this.newTransfer = element(by.linkText("Create New"));
        this.cepStart = element(by.id("from_postcode"));
        this.cepEnd = element(by.id("to_postcode"));
        this.buttonSave = element(by.buttonText("Save"));
        this.buttonBack = element(by.linkText("Back"));
        this.buttonDelete = element(by.linkText("Delete"));
        this.selectWarehouseExpedition = element(by.name('fk_warehouse_expedition')).element(by.cssContainingText('option', 'MACH 1'));
        this.newAction = element(by.xpath("(//*[contains(@title,'Show')])[2]"));
        this.transferThreshold = element(by.id("transference_threshold"));
    }

    fillDeliveryTypeEconomic(name) {
        this.deliveryTypeName.first().clear();
        this.deliveryTypeName.first().sendKeys(name)
    }

    fillDeliveryTypeTurboDayZero(name) {
        this.deliveryTypeNameX.clear();
        this.deliveryTypeNameX.sendKeys(name)
    }

    fillCepRangeStart(cep) {
        this.cepStart.clear();
        this.cepStart.sendKeys(cep);
    }

    fillCepRangeEnd(cepTo) {
        this.cepEnd.clear();
        this.cepEnd.sendKeys(cepTo);
    }

    checkBox(){
        browser.executeScript("$('input[value=\"10\"]').click();")
    }
}
module.exports = Transfers;


