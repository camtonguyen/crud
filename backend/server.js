import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'crudgames';
app.use(bodyParser.json());

const validate = (data) => {
    let errors = {};
    if(data.title === '') errors.title = 'Title cannot be empty';
    if(data.cover === '') errors.cover = 'Cover cannot be empty';
    const isValid = Object.keys(errors).length === 0;

    return { errors, isValid };
}

mongodb.MongoClient.connect(dbUrl, {useUnifiedTopology: true}, (err, client) =>{

    const db = client.db(dbName);

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({ games });
        });
    });

    app.post('/api/games', (req, res) => {
        const { errors, isValid } = validate(req.body);
        if (isValid) {
          const { title, cover } = req.body;
          db.collection('games').insertOne({ title, cover }, (err, result) => {
            if (err) {
              res.status(500).json({ errors: { global: "Something went wrong" }});
            } else {
              res.json({ game: result.ops[0] });
            }
          });
        } else {
          res.status(400).json({ errors });
        }
    });

    app.put('/api/games/:_id', (req, res) => {
      const { errors, isValid } = validate(req.body);

      if(isValid) {
        const { title, cover } = req.body;
        db.collection('games').findOneAndUpdate(
          { _id: new mongodb.ObjectId(req.params._id)},
          { $set: { title, cover } },
          { returnOriginal: false },
          (error, result) => {
            if(error) { res.status(500).json({ errors: {global: error}}); return }
            res.json({ game: result.value })
          }
        ) 
      } else {
        res.status(404).json({ errors });
      }
    });

    app.get('/api/games/:_id', (req, res) => {
      db.collection('games').findOne({ _id: new mongodb.ObjectId(req.params._id)}, (err, game) => {
        res.json({ game })
      })
    });

    app.delete('/api/games/:_id', (req, res) => {
      db.collection('games').deleteOne({ _id: new mongodb.ObjectId(req.params._id)}, (err) => {
        if (err) {
          res.status(500).json({ errors: { global: err }}); return;
        } 
        res.json({});
      })
    });

    app.use((req, res) => {
        res.status(404).json({
          errors: {
            global: "Still working on it. Please try again later when we implement it"
          }
        });
    });

    app.listen(8080, () => console.log('Server is running on localhost:8080'))
});
