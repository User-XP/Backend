# Getting Started

1. Run `npm install`
2. Run `node app.js`

## Create `config/keys.js`
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