class Parceiros {

    constructor() {
        this.partnerMenu = element(by.linkText("Parceiros"));
        this.buttonPartnerRegister = element(by.linkText("Cadastrar novo parceiro"));
        this.buttonPartnerSave = element(by.buttonText("Save"));
        this.namePartner = element(by.id("name"));
        this.codePartner = element(by.id("code"));
        this.selectStatus = element(by.name("is_active")).element(by.cssContainingText('option', 'Sim'));
        this.editPartner = element(by.xpath("(//*[contains(@title, 'Edit')])[2]"));
        this.deletePartner = element(by.xpath("(//*[contains(@title, 'Delete')])[2]"));
    }

    fillCodePartner(code) {
        this.codePartner.clear();
        this.codePartner.sendKeys(code);
    }

    fillNamePartner(name) {
        this.namePartner.clear();
        this.namePartner.sendKeys(name);
    }
}
module.exports = Parceiros;