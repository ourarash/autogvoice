
# Auto-Gvoice

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ourarash/autogvoice)

### Automation Script for sending sms messages using Google Voice
This script automatically sends sms messages using your Gvoice account.

Implemented in nodejs using the Selenium module.


**Disclaimer**: Please Note that this is a research project. I am by no means responsible for any usage of this tool. Use on your own behalf. I’m also not responsible if your  get into any trouble due to extensive use of this tool.


Table of Contents
=================

* [Getting Started](#getting-started)
  * [Basic Installation](#basic-installation)
  * [Gmail Settings](#gmail-settings)
  * [Chrome Driver](#chrome-driver)
* [Run the Script](#run-the-script)
 
## Getting started

### Basic Installation:

```bash
1. git clone https://github.com/ourarash/autogvoice.git
2. cd autogvoice
3. npm install
```

Set your `email`, `password`, `toList`, and `msg` in index.js

The example in index.js sends a personalized Christmas message with a Christmas quote to the people in `toList`.

```javascript
// Fill out these options
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

```

### Google Voice Settings:
This script uses https://voice.google.com. Notice that if you have enabled Google Hangout, your SMS messages are managed by Google Hangout. In order to use this script you need to disable Google Hangout from here:
https://voice.google.com/settings

### Chrome Driver
The latest version of Chrome driver is included in this repo, but make sure that you have the latest version by downloading it from here:

https://sites.google.com/a/chromium.org/chromedriver/downloads

Also you will need to download the chromedriver if you are using a non Windows/Mac OS.


### Run the Script:
Execute it:

```bash
$ node index.js
```
