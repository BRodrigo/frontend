class WarehouseTime {

    constructor() {
        this.warehouseTime = element(by.linkText("Warehouse Time"));
        this.buttonCreateNew = element(by.id("btnCreate"));
        this.timeWarehouse = element(by.id("inputWarehouseTime"));
        this.fromPostCode = element(by.id("inputFromPostcode"));
        this.toPostCode = element(by.id("inputToPostcode"));
        this.buttonSave = element(by.id("btnSave"));
        this.buttonBack = element(by.id("btnBack"));
        this.buttonEdit = element(by.xpath("(//*[starts-with(@id, 'btnUpdate')])[1]"));
        this.buttonDelete = element(by.xpath("(//*[starts-with(@id, 'btnDelete')])[1]"));
    }

    fillWarehouseTime(time) { 
        this.timeWarehouse.clear();
        this.timeWarehouse.sendKeys(time);
    }

    fillFromPostCode(frompostcode){
        this.fromPostCode.clear();
        this.fromPostCode.sendKeys(frompostcode);
    }

    fillToPostCode(topostcode){
        this.toPostCode.clear();
        this.toPostCode.sendKeys(topostcode);
    }
}
module.exports = WarehouseTime;