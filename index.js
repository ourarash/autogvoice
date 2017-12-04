var options = {
    searchURL: "https://voice.google.com",
    uid: 'youremail@gmail.com',
    password: 'password',
    toList: [
        {
            name: "Sarah M. Jones",
            number: '1234567890'
        },
        {
            name: "Mammad Ataghi",
            number: '1234567890'
        },
    ],
    msg: "Merry Christmas! Here is a nice XMAS quote for you:",
    quotes: [
        `Christmas is the spirit of giving without a thought of getting. It is happiness because we see joy in people.`,

        `One can never have enough socks," said Dumbledore. "Another Christmas has come and gone and I didn't get a single pair. People will insist on giving me books." ― J.K. Rowling, Harry Potter and the Sorcerer's Stone'`,

        `The main reason Santa is so jolly is because he knows where all the bad girls live.
        ― George Carlin`
    ], 
    signature:` Love,
    -Ari`
};

//---------------------------------------------------------------
//Utility functions
// Removes the characters after the first space
hideLastName = function (name) {
    if (!name) {
        return name;
    }
    let index = name.indexOf(" ");
    let modifiedName;

    if (index > 0) {
        modifiedName = name.substring(0, index);
        return modifiedName;
    } else {
        return name;
    }

}
//End of utility functions
//---------------------------------------------------------------
var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get(options.searchURL);
driver.findElement(By.className("signUpLink")).click();
driver.findElement(By.name("identifier")).sendKeys(options.uid + "\n");
driver.sleep(1500);
driver.findElement(By.name("password")).sendKeys(options.password + "\n");
driver.sleep(6000);



options.toList.forEach(n => {
    let name = n.name;
    let number = n.number;
    //Select a random quote
    let randomQuote = options.quotes[Math.floor(Math.random() * options.quotes.length)];

    //Create the message
    let msg = "Hi " + hideLastName(name) + ",\n" + options.msg + "\n" + randomQuote;

    //Select top left message icon
    driver.findElement(By.xpath('//div[.//md-icon[contains(., "message")]]')).click();
    driver.sleep(1500);

    //Click on send message
    driver.findElement(By.xpath("//*[contains(text(), 'Send a message')]")).click();
    driver.sleep(1500);

    //Type phone number
    driver.findElement(By.xpath("//input[@placeholder='Type a name or phone number']")).sendKeys(number + "\n");
    driver.sleep(2500);
    driver.findElement(By.xpath("//input[@placeholder='Type a name or phone number']")).sendKeys("\t");

    //Type message
    driver.findElement(By.xpath("//textarea[@placeholder='Type a message']")).sendKeys(msg + "\n");
    driver.sleep(2000);
})
