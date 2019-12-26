const routes = require('next-routes')()

// Default link for new fundraisers page.
routes.add('fundraisers/new', '/fundraisers/new')

// Add a wildcard URL to handle viewing existing fundraisers
// If the user goes to the first argument, show the second argument.
routes.add('/fundraisers/:address', '/fundraisers/display')


// Routing for a requests on a specific fundraiser
routes.add('/fundraisers/:address/requests', '/fundraisers/requests/index')
module.exports = routes;