module.exports = {
    db: mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + 'ndb' || 'mongodb://127.0.0.1:27017/' + 'ndb'
};