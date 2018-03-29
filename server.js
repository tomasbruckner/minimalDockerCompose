const app = require('express')();
const MongoClient = require('mongodb').MongoClient;

start();
return;

function start() {
    MongoClient.connect('mongodb://mongoDB:27017', (err, client) => {
        if (err) {
            // connection will fail until docker-compose establishes network connection
            setTimeout(start, 1000);
            return;
        }

        // we insert a document to DB and showcase that it actually 
        // returns data from DB (connection is working)
        // see: https://docs.docker.com/compose/startup-order
        client
            .db('testDb')
            .collection('testCollection')
            .insert(
                { text: 'some data from db' },
                (err, doc) => {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    console.log(doc)

                    // returns data from database
                    app.get('/', (req, res) => {
                        res.send(doc.ops[0].text);
                    });

                    app.listen(3333);
                }
            );
    });
}
