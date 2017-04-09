//	protractor.conf.js

var	SpecReporter	=	require('jasmine-spec-reporter').SpecReporter;
var	Jasmine2HtmlReporter	=	require('protractor-jasmine2-html-reporter');

module.exports.config	=	{
    framework: 'jasmine',
    seleniumAddress:	'http://localhost:4444/wd/hub',
    capabilities:	{
        'browserName':	'firefox'
    },
    /*
    multiCapabilities: [
        { browserName: 'firefox' },
        { browserName: 'chromium' }
    ],
    */
    specs: ['specs/*.spec.js'],
    baseUrl: 'http://juliemr.github.io',

    onPrepare:	function() {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            takeScreenshots: true,
            fixedScreenshotName: true
        }));
    }
};
