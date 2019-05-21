class CarriersManagement {

    constructor() {
        this.carriersRoutes = element(by.linkText("Carriers & Routes"));
        this.carriersManagement = element(by.linkText("Carriers Management"));
        this.buttonSave = element(by.buttonText("save"));
        this.buttonCreateNew = element(by.linkText("Create New"));
    }
}
module.exports = CarriersManagement;