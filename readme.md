# Getting Started

1. Run `npm install`
2. Create `config/keys.js`   
Visit [https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin](https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin) to create the google auth credentials.  
 ```
 module.exports = {
    google: {
        clientID: "CLIENT ID HERE",
        clientSecret: "SECRET KEY HERE"
    },
    mongodb: {
        dbURI: "DB URI HERE"
    },
    session: {
        cookieKey: "COOKIE NAME HERE"
    }
 }
 ```  
3. Run `node app`