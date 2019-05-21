class Bairro {

    constructor() {
        this.cityMenu = element(by.linkText("Bairros"));
        this.buttonSearch = element(by.buttonText("Buscar"));
        this.selectStatus = element(by.name('active')).element(by.cssContainingText('option', 'Ativo'));
        this.selectCountry = element(by.name('state')).element(by.cssContainingText('option', 'SP'));
        this.selectCity = element(by.id('city')).element(by.cssContainingText('option', 'São Caetano do Sul'));
        this.filterName = element(by.css('[name="name"]'));

    }

    fillNameFilter(name) {
        this.filterName.clear();
        this.filterName.sendKeys(name)
    }

}
module.exports = Bairro;