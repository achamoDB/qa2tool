var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.manage().timeouts().implicitlyWait(10000);

driver.get('http://www.kp-group.com.ar/extranet/sociograma');
driver.findElement(By.name('usuario')).sendKeys('james.bond');
driver.findElement(By.name('password')).sendKeys('1234');
driver.findElement(By.css('input.button')).click();
driver.findElement(By.css('a[href=\'sociograms.php\']')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();
