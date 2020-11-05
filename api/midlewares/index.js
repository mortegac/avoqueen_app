// const { logGenerate, isChangeLogs } = require('./log.midleware');
const { error404 } = require('./errorHandlers.midleware');
const { verifiedAuth } = require('./authToken.midleware')

module.exports = {
   error404,
   verifiedAuth
}