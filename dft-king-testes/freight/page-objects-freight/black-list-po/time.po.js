class Time {

    constructor() {
        this.blackList = element(by.linkText("Blacklist"));
        this.time = element(by.linkText("Time"));     
        this.buttonCreateNew = element(by.linkText("Create New"));  
        this.timeFrom = element(by.name('time_from')).element(by.cssContainingText('option', '1 Hour(s)'));
        this.timeTo = element(by.name("time_to")).element(by.cssContainingText('option', '3 Hour(s)'));
        this.postCodeFrom = element(by.id("from_postcode"));
        this.postCodeTo = element(by.id("to_postcode"));
        this.priority = element(by.id("priority"));
        this.buttonSave = element(by.buttonText("Save"));
        this.buttonBack = element(by.linkText("Back"));
        this.buttonDelete = element(by.xpath("(//*[contains(@class, 'glyphicon')])[2]"));
    }

    fillNewBlacklistTime(fromzipcode, tozipcode, numberPriority){
        this.timeFrom.click();
        this.timeTo.click();
        this.postCodeFrom.clear();
        this.postCodeFrom.sendKeys(fromzipcode);
        this.postCodeTo.clear();
        this.postCodeTo.sendKeys(tozipcode);
        this.priority.clear();
        this.priority.sendKeys(numberPriority);
    }    
}
module.exports = Time