class ManagerCep {

    constructor() {
        this.freightPrice = element(by.linkText("Freight Price"));
        this.managerCep = element(by.linkText("Manager CEP"));
        this.editPostCode = element(by.xpath("(//*[contains(@title, 'Update')])[1]"));
    }
}
module.exports = ManagerCep;