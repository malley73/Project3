const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/OneList",
  {
    useMongoClient: true
  }
);

const listSeed = [
  {
    list: "Task List",
    items: [{
      name:"grocery shopping",
      checked: "false"
    },
    {
      name:"get a hair cut",
      checked:"false"
    }],
  users:[
    "gamestoomuch@gmail.com",
    "michael.j.alley@gmail.com"
    ]
  },
  {
    list : "Grocery List",
    items : [{
      name : "banana",
      checked : "false"
      }, 
      {
      name : "eggs",
      checked : "false"
      }
    ],
    users : [
      "gamestoomuch@gmail.com"
    ]
  }
];

const userSeed= [
  {
    logon : "gamestoomuch@gmail.com",
    password : "mypassword",
    lists : [{
      name : "Grocery List",
      id : ""
    }]
  },
  {
    logon : "michael.j.alley@gmail.com",
    password : "myotherpassword",
    lists : [{
      name : "Grocery List",
      id : ""
    }]
  }
];

db.List
  .remove({})
  .then(() => db.List.collection.insertMany(listSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

