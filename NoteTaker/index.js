const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

//mongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5nydhny.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    await client.connect();
    const noteCollection = client.db("Notes-taker").collection("notes");
    // add notes
    app.post("/addNotes", async (req, res) => {
      const data = req.body;
      const result = await noteCollection.insertOne(data);
      res.send(result);
    });
    // get notes
    app.get("/notes", async (req, res) => {
      const query = {};
      const cursor = noteCollection.find(query);
      const notes = await cursor.toArray();
      res.send(notes);
    });
    // delete a note
    app.delete("/notes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await noteCollection.deleteOne(query);
      res.send(result);
    });
    // update notes
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const notes = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          data: notes.updateTodo,
        },
      };
      const note = await taskCollection.updateOne(filter, updateDoc, options);
      res.send({ success: true, data: note });
    });
    // checkbox and complete task
    app.patch("/Checkbox/:CheckID", async (req, res) => {
      const data = req.params.CheckID;
      const id = { _id: ObjectId(data) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          Checkbox: true,
        },
      };
      const result = await noteCollection.updateOne(id, updateDoc, options);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to NoteTaker App");
});
app.listen(port, () => {
  console.log("listening to port", port);
});
