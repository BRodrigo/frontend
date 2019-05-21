class Date {

    constructor() {
        this.blackList = element(by.linkText("Blacklist"));
        this.date = element(by.linkText("Date"));
        this.postCode = element(by.id("inptPostcode"));
        this.buttonFind = element(by.id("btnSubmitFind"));
        this.createNew = element(by.linkText("Create New"));
        this.exportCsv = element(by.linkText("Export Csv"));
        this.bulkImport = element(by.linkText("Bulk Import"));        
    }

    fillPostCode(zipcode){
        this.postCode.clear();
        this.postCode.sendKeys(zipcode);
    }    
}
module.exports = Date