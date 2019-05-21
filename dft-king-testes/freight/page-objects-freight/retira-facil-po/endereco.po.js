class Endereco {

    constructor() {

        this.retiraFacil = element(by.linkText("Retira Fácil"));
        this.address = element(by.linkText("Endereços"));
        this.buttonSearch = element(by.buttonText("Buscar"));
        this.filterName = element(by.css('[name="name"]'));
        this.selectStatusInative = element(by.name('is_active')).element(by.cssContainingText('option', 'Inativo'));
        this.selectStatus = element(by.name('is_active')).element(by.cssContainingText('option', 'Status'));
        this.selectCountry = element(by.name('uf')).element(by.cssContainingText('option', 'SP'));
        this.zipCode = element(by.css('[name="filter_postcode"]'));
    }

    fillNameFilter(name) {
        this.filterName.clear();
        this.filterName.sendKeys(name)
    }

    fillZipCode(codezipe){
        this.zipCode.clear();
        this.zipCode.sendKeys(codezipe);
    }
}
module.exports = Endereco;