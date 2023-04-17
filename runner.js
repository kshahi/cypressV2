const cypress = require('cypress')
cypress.run()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message)
        process.exit(1)
    })