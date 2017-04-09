//	homepage.spec.js

var ApiPage = require('../page-objects/apipage.po.js');

describe('Homepage',	function(){

    var apiPage = new ApiPage();

    beforeEach(function(){
        apiPage.visit();
    });

    it('1) perform	a	search	into the	api	page',	function()	{
       expect(apiPage.getTitle()).toEqual('Super Calculator');
    });

    it('2) deve falhar o texto do title da pagina',	function()	{
       expect(apiPage.getTitle()).not.toEqual('Super Calculator2');
    });

    it('3) should add numbers 5 and 3 and result is equal 8', function () {
        apiPage.operation(5,3, 'ADDITION');
        expect(element(by.binding('latest')).getText()).toEqual('8');
    });

    it('4) should add numbers and not click button', function () {
        apiPage.operationEndNotClickGo(4,5, 'ADDITION');
        expect(element(by.binding('latest')).getText()).toEqual('0');
    });

    it('5) should sub two numbers', function () {
        apiPage.operation(10, 2, 'SUBTRACTION');
        expect(element(by.binding('latest')).getText()).toEqual('8');
    });

    it('6) should sub two numbers', function () {
        apiPage.operation(1, 2, 'SUBTRACTION');
        expect(element(by.binding('latest')).getText()).toEqual('-1');
    });

    it('7) should div two numbers', function () {
        apiPage.operation(9, 3, 'DIVISION');
        expect(element(by.binding('latest')).getText()).toEqual('3');
    });

    it('8) should div a seconde number per zero', function () {
        apiPage.operation(8, 0, 'DIVISION');
        expect(element(by.binding('latest')).getText()).toEqual('Infinity');
    });

    it('9) should default operation is ADDITION', function () {
        apiPage.defaultOperation(1, 1);
        expect(element(by.binding('latest')).getText()).toEqual('2');
    });

    it('10) should mult two numbers', function () {
        apiPage.operation(5, 4, 'MULTIPLICATION');
        expect(element(by.binding('latest')).getText()).toEqual('20');
    });

    it('11) not should pass', function () {
        apiPage.operation(5, 4, 'ADDITION');
        expect(element(by.binding('latest')).getText()).toEqual('10');
    });


});
