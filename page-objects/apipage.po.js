var ApiPage = function () {

    this.field_one = element(by.model('first'));
    this.field_two = element(by.model('second'));

};

ApiPage.prototype.visit = function () {
    browser.get('/protractor-demo/');
};

ApiPage.prototype.getTitle = function () {
    return browser.getTitle();
};

ApiPage.prototype.operation = function (numberA, numberB, operationValue) {
    this.field_one.sendKeys(numberA);
    this.field_two.sendKeys(numberB);
    ApiPage.prototype.selectOperator(operationValue);
    ApiPage.prototype.clickButtonGo();
};

ApiPage.prototype.defaultOperation = function (numberA, numberB) {
    this.field_one.sendKeys(numberA);
    this.field_two.sendKeys(numberB);
    ApiPage.prototype.clickButtonGo();
};


ApiPage.prototype.operationEndNotClickGo = function (numberA, numberB, operationValue) {
    this.field_one.sendKeys(numberA);
    this.field_two.sendKeys(numberB);
    ApiPage.prototype.selectOperator(operationValue);
};

ApiPage.prototype.selectOperator = function (operatorValue) {
    element(by.model('operator')).$('[value='+operatorValue.toString()+']').click();
};

ApiPage.prototype.clickButtonGo = function () {
    element(by.id('gobutton')).click();
};

ApiPage.prototype.verifyCount = function () {
    //var count = element.all(by.repeater('result in memory'));
    //return count.count();
};

module.exports = ApiPage;
