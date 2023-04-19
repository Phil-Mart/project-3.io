const {MongoClient} = require('mongodb');

async function main() {
    
    // not sure how to access the database from here
    const uri = "";

    //connect to mongo server
    const client = new MongoClient(uri);

    //try statement in case it doesn't work to log errors
    try {
        await client.connect();
    }   catch (e) {
        console.error(e);
    }   finally {
        await client.close();
    }

}

main().catch(console.error);