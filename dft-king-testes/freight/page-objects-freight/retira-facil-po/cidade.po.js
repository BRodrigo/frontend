class Cidade {

    constructor() {
        this.cityMenu = element(by.linkText("Cidades"));
        this.buttonSearch = element(by.buttonText("Buscar"));
        this.selectStatus = element(by.name('active')).element(by.cssContainingText('option', 'Ativo'));
        this.selectCountry = element(by.name('state')).element(by.cssContainingText('option', 'SP'));
        this.filterName = element(by.css('[name="name"]'));

    }

    fillNameFilter(name) {
        this.filterName.clear();
        this.filterName.sendKeys(name)
    }

}
module.exports = Cidade;