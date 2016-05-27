openshiftDBUrl = process.env.OPENSHIFT_MONGODB_DB_URL;

module.exports = {
    db: mongodb_connection_string = openshiftDBUrl != undefined ? openshiftDBUrl + 'ndb' : 'mongodb://127.0.0.1:27017/' + 'ndb'
};