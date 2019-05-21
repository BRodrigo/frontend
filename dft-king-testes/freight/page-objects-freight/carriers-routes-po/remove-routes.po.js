class RemoveRoutes {

    constructor() {
        this.carriersRoutes = element(by.linkText("Carriers & Routes"));
        this.deleteRoutes = element(by.linkText("Remove Routes"));
        this.selectChooseCurrier = element(by.id("carrier_id"));
        this.buttonRemove = element(by.buttonText("Remover"));
    }
}
module.exports = RemoveRoutes;