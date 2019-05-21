class MarketPlace {

    constructor() {
        this.freightPrice = element(by.linkText("Freight Price"));
        this.marketPlace = element(by.linkText("Market Place"));
        this.buttonImportCsv = element(by.buttonText("Import CSV"));
        this.buttonExportCsv = element(by.linkText("Export CSV"));
    }
}
module.exports = MarketPlace;