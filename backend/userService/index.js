// const express = require("express");
// // const abc = require('./ xyz')
// const app = express();
// // GET, POST, PUT, DELETE

// const person = {
//     id: 1,
//     name: "Payal",
//     email: "payal.dabas.22cse@bmu.edu.in",
// },
// {
//     id: 2,
//     name: "Payal",
//     email: "payal.dabas.24cse@bmu.edu.in",
// },
// {
//     id: 1,
//     name: "Payal",
//     email: "payal.dabas.23cse@bmu.edu.in",
// },
// {
// app.get("/hello", (req, res) => {
//   try {
//     res.send("hello world!");
//   } catch (err) {
//     res.send("something went wrong ");
//   }
// }
// });
// // app.post()
// // app.put()
// // app.delete()
// app.get('/alluser', (req, res)=>{
//     try{
//     res.send(person)
//     }catch(err){
//     res.send('err')
// }

//     })

// app.get('/alluser/:name', (req, res)=>{
//     try{
//         let name = req.params.name
//     res.send(name)
//     }catch(err){
//     res.send('err')
// }

//     })
// app.listen(3000, () => {
//   console.log("server started at port 3000");
// });

const express = require("express");
// const abc = require('./ xyz')
const app = express();

// User data as an array of objects
const persons = [
  {
    id: 1,
    name: "Payal",
    email: "payal.dabas.22cse@bmu.edu.in",
  },
  {
    id: 2,
    name: "Payal",
    email: "payal.dabas.24cse@bmu.edu.in",
  },
  {
    id: 3,
    name: "Payal",
    email: "payal.dabas.23cse@bmu.edu.in",
  },
];

// GET endpoint to return a message
app.get("/hello", (req, res) => {
  try {
    res.send("hello world!");
  } catch (err) {
    res.send("something went wrong");
  }
});

// GET endpoint to return all users
app.get("/alluser", (req, res) => {
  try {
    res.send(persons);
  } catch (err) {
    res.send("error occurred");
  }
});

// GET endpoint to search users by name
app.get("/alluser/:name", (req, res) => {
  try {
    let name = req.params.name;
    // Filter users by name (case-sensitive)
    const result = persons.filter((person) => person.name === name);
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No user found with the name: " + name);
    }
  } catch (err) {
    res.send("error occurred");
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});



